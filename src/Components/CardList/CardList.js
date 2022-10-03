import { useState, useEffect} from "react"
import "./CardList.css"

//FIREBASE

import { collection, query, getDocs} from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import ClothesCard from "../ClothesCard/ClothesCard"
import { Link } from "@mui/material"


const CardList = () => {
    const [clothesData, setClothesData]= useState ([])
    useEffect (()=>{
        const getClothes = async ()=>{
            const q = query(collection (db, 'clothes'))
            const docs = []
            const querySnapshot = await getDocs (q);
            querySnapshot.forEach ((doc)=>{
               
                docs.push({ ...doc.data(), id:doc.id})
              
            })
           setClothesData (docs)
           
        }
        getClothes ()
    },[])
   console.log (clothesData)
    return (
		<div className='CardListContainer'>
			{clothesData.map((data) => {
						return (
							<Link to={`detail/${data.id}`} key={data.id}>
								<ClothesCard clothesData={data} />
							</Link>
						);
					})}
		</div>
	);
};
export default CardList
