import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LinkProvider } from './components/Nav/links-provider';

ReactDOM.render(
	<React.StrictMode>
		<LinkProvider>
			<App />
		</LinkProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
