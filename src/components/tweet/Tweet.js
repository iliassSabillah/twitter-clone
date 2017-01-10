//This component handles the tweet section
import React, {PropTypes, Component}   from 'react';


class Tweet extends React.Component{
	render() {
		console.log('inside tweet', this.props);
		return (
			<div id="tweet" className="contact-form col-md-3">
			</div>
		);
	}
}

Tweet.propTypes = {

};

export default Tweet;
