import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import StreamList from './streams/StreamList.js';
import StreamCreate from './streams/StreamCreate.js';
import StreamDelete from './streams/StreamDelete.js';
import StreamEdit from './streams/StreamEdit.js';
import StreamShow from './streams/StreamShow.js';
import Header from './Header.js';
// const PageOne = () => {
	
// 	return(
// 		<div>
// 			<div>Page One</div>
// 			{/*
// 			this is bad way to navigate as it flushes away all the data
// 			<a href="/pagetwo">navigate to page one</a>
// 			*/}
// 			<Link to="/pagetwo">navigate to page two</Link>
// 		</div>
// 	);
// };

// const PageTwo = () => {
	
// 	return(
// 		<div>
// 			<div>
// 				PageTwo
// 			</div>
// 			{/*
// 			this is bad way to navigate as it flushes away all the data
// 			<a href="/">navigate to page one</a>
// 			*/}
// 			<Link to="/">navigate to page One</Link>
// 		</div>
// 	);
// };


const App = () => {
	return (
			<div className="ui container">
				<BrowserRouter>
					<div>
						<Header></Header>
						{/* <Route path='/' exact component={PageOne} />
						<Route path='/pagetwo' component={PageTwo} /> */}
						<Route path="/" exact component={StreamList}></Route>
						<Route path="/streams/show" exact component={StreamShow}></Route>
						<Route path="/streams/new" exact component={StreamCreate}></Route>
						<Route path="/streams/edit" exact component={StreamEdit}></Route>
						<Route path="/streams/delete" exact component={StreamDelete}></Route>
					</div>
				</BrowserRouter>
			</div>
		);
};

export default App;