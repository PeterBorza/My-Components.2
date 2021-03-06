import { useContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import { MyContext } from './MyContext';
import { LinkContext } from './components/Nav/links-provider';

import ls1 from './images/ls1.jpg';
import ls2 from './images/ls2.jpg';
import ls3 from './images/ls3.jpg';
import ls4 from './images/ls4.jpg';
import ls5 from './images/ls5.jpg';
import ls6 from './images/ls6.jpg';
import ls7 from './images/ls7.jpg';
import ls8 from './images/ls8.jpg';
import ls9 from './images/ls9.jpg';
import ls10 from './images/ls10.jpg';

import './App.scss';

const pics = [ls1, ls2, ls3, ls4, ls5, ls6, ls7, ls8, ls9, ls10];

const App = () => {
	const links = useContext(LinkContext);

	const [counter, setCounter] = useState(0);

	const minusCount = () => {
		setCounter(prev => prev - 1);
	};
	const plusCount = () => {
		setCounter(prev => prev + 1);
	};
	const resetHandler = () => {
		setCounter(0);
	};
	const buttons = [
		{
			id: 1,
			content: 'Minus',
			handler: minusCount,
		},
		{
			id: 2,
			content: 'Plus',
			handler: plusCount,
		},
		{
			id: 3,
			content: 'Reset',
			handler: resetHandler,
		},
	];

	const renderLink = item => (
		<Route
			key={item.id}
			path={item.path}
			exact={item.exact}
			component={item.component}
		/>
	);

	return (
		<div className='App'>
			<MyContext.Provider
				value={{
					pics,
					buttons,
					minusCount,
					plusCount,
					resetHandler,
					counter,
					setCounter,
				}}
			>
				<Router>
					<Nav />
					<Switch>{links.map(renderLink)}</Switch>
				</Router>
			</MyContext.Provider>
		</div>
	);
};

export default App;
