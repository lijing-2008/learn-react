import React, {createContext, memo, useContext, useEffect, useState} from 'react';
import {ThemeContext} from "./context";

const App = memo((props) => {
	const theme = useContext(ThemeContext)
	return (
		<div>
			App
			<div style={{color: theme.color, fontSize: theme.fontSize}}>{theme.color}-{theme.fontSize}</div>
		</div>
	)
});

export default App;
