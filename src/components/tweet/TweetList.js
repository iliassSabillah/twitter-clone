//This component handles the Tweet section
import React from 'react';
import {Link} from 'react-router';

class TweetList extends React.Component{
	render(){
		return (
			<div className ="container-fluid">
				<Link to="tweet"><button className="btn-primary">tweet</button></Link>
				<p>Tweet List</p>
			</div>
		);
	}
}

export default TweetList;
