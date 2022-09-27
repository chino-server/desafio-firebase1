import { useState, useEffect} from "react"
import "./CardList.css"

//FIREBASE

import { collection, query, getDocs} from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { async } from "@firebase/util"
import ClothesCard from "../ClothesCard/ClothesCard"


const CardList = () => {
    const [clothesData, setClothesData]= useState ([])
    useEffect (()=>{
        const getClothes = async ()=>{
            const q = query(collection (db, 'clothes'))
            const docs = []
            const querySnapshot = await getDocs (q);
            querySnapshot.forEach ((doc)=>{
                docs.push({ ...doc.data(), id2:doc.id})
              
            })
           setClothesData (docs)
           
        }
        getClothes ()
    },[])
    console.log (clothesData)
    return (
		<div className='CardListContainer'>
			{clothesData.map((clothes) => {
				return (
					<div key={clothes.id}>
						<ClothesCard clothesData={clothes} />
					</div>
				);
			})}
		</div>
	);
};
export default CardList
