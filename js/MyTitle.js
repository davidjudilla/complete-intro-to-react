import React from 'react';

const MyTitle = props => {
	const style = { color: props.color };
	return (
		<div>
			<h1>{props.title}</h1>
		</div>
	);
};

export default MyTitle;
