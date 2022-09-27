import React from 'react';
import './Header.css';
import img from './logo_banner.jpg';

const Header = ({ title }) => {
	return (
		<div className='Header'>
			<img src={img} alt='logo-banner' />
		</div>
	);
};

Header.defaultProps = {
	title: 'Consumiendo Firebase',
};

export default Header;

