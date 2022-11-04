import React, {useState} from 'react';
import {AppWrapper, SectionWrapper} from "./style";

function App(props) {
	const [customStyle, setCustomStyle] = useState({
		size: 30,
		color: ""
	});
	return (
		<AppWrapper>
			<SectionWrapper {...customStyle}>
				<h2 className="title">使用styled-components</h2>
				<p className="content">content</p>
				<button onClick={event => setCustomStyle({...customStyle, color: "#f00"})}>changeColor</button>
			</SectionWrapper>
			<div className="footer">
				<p>p1</p>
				<p>p2</p>
			</div>
		</AppWrapper>
	);
}

export default App;
