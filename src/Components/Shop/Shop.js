import React, {useState} from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig'

import './Shop.css'
import TextField from '@mui/material/TextField';
import MessageSuccess from "../MessageSuccess/MessageSuccess";

const initialState = {
    name: '',
    lastName: '',
    city: ''


}

const styles = {
	containerShop: {
		textAlign: 'left',
		paddingTop: 10,
	},
};

const Shop =()=>{
    const [values, setValues]= useState (initialState)
    const [purchaseID, setPurchaseID]=useState ('')

    const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

    const onSubmit = async (e) => {
		e.preventDefault();
		console.log(values);
		// Add a new document with a generated id.
		const docRef = await addDoc(collection(db, 'purchases'), {
			values,
		});
		// console.log('Document written with ID: ', docRef.id);
		setPurchaseID(docRef.id);
		setValues(initialState);
	};
    
    return (
		<div style={styles.containerShop}>
			<h1>Shop</h1>
			<form className='FormContainer' onSubmit={onSubmit}>
				<TextField
					placeholder='Name'
					style={{ margin: 10, width: 400 }}
					name='name'
					value={values.name}
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Last Name'
					style={{ margin: 10, width: 400 }}
					name='lastName'
					value={values.lastName}
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='City'
					style={{ margin: 10, width: 400 }}
					name='city'
					value={values.city}
					onChange={handleOnChange}
				/>
				<button className='btnASendAction'>Send</button>
			</form>
			{purchaseID && <MessageSuccess purchaseID={purchaseID} />}
		</div>
	);

}

export default Shop