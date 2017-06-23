// @flow

import React from 'react';

const Detail = (props: Object) => (
	<div className="details">
		<h1>lolhi</h1>
		<pre>
			<code>{JSON.stringify(props, null, 4)}</code>
		</pre>
	</div>
);

export default Detail;
