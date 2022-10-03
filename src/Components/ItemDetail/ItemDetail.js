import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../../firebase/firebaseConfig'

import {
	collection,
	query,
	getDocs,
	documentId,
	where,
} from 'firebase/firestore';

import ClothesCard from '../ClothesCard/ClothesCard';




const ItemDetail = () => {
	const [clothesData, setClothesData] = useState([]);
   

	const { id } = useParams();

	useEffect(() => {
		const getClothes = async () => {
			const q = query(collection(db, 'clothes'), where(documentId(), '==', id));
			const docs = [];
			const querySnapshot = await getDocs(q);
		
			querySnapshot.forEach((doc) => {
			
				docs.push({ ...doc.data(), id: doc.id });
			});

			setClothesData(docs);
		};
		getClothes();
		
	}, [id]);

    console.log (clothesData)

	return (
		<div>
			{clothesData.map ((data)=>{
                return <ClothesCard clothesData={data}/>
            })}
			
		</div>
	);
};

export default ItemDetail;
