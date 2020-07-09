import React from 'react';

//require('./styles.scss');
import ExTable from '../exTable/components/Extable';

const productsList = [
	{ name: 'Phone', description: 'phone and camera in one.' },
	{ name: 'Tv', description: '1080p' },
	{ name: 'Computer mouse', description: '2 special buttons on the left' },
	{ name: 'Extra Computer mouse', description: '12 special buttons on the left' }
];

const LandingPage = () => {
	return (
		<div className='content'>
			<h2>Example Table</h2>
			<div className='Example-wrapper'>
				<ExTable data={productsList} />
			</div>
		</div>
	);
};

export default LandingPage;
