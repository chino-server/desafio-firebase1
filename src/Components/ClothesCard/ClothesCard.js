import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ClothesCard = ({ clothesData }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia component='img' image={clothesData.img} alt='green iguana' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						Artista: {clothesData.title}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Album: {clothesData.category}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Price: ${clothesData.price}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						detalle: {clothesData.title} 
					</Typography>
					
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default ClothesCard;
