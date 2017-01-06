//This component handles the Experience section
import React, {PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as tweetActions from '../../actions/tweetActions';
import Tweet from './Tweet';

class TweetContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tweet: {
				tweet:''
			}
		};
		this.tweetRow= this.tweetRow.bind(this);
		this.handleChange= this.handleChange.bind(this);
		this.handleSubmit= this.handleSubmit.bind(this);

}
	// 	browserHistory.push('/tweet');

	handleChange(e,inputField) {
		const tweet = this.state.tweet;
		tweet[inputField] = e.target.value;
	}
	handleSubmit(e) {
		e.preventDefault();
		let tweet = this.refs.tweet;
		this.props.actions.createTweet(tweet);

	}
	tweetRow(tweet,index){return (<li key={tweet+index}>{tweet}</li>);}
	render(){
		return (
			<Tweet handleChange={this.handleChange} tweet={this.props.tweet} handleSubmit={this.handleSubmit} tweetRow={this.tweetRow}/>		);
	}
}

TweetContainer.propTypes = {
	actions : PropTypes.object,
	tweetRow: PropTypes.func,
	handleChange : PropTypes.func,
	tweet: React.PropTypes.object,
	handleSubmit: PropTypes.func
};

const mapStateToProps= (state,ownProps)=>({tweet: state.tweet});

const mapDispatchToProps=(dispatch)=>({
	actions: bindActionCreators(tweetActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TweetContainer);
