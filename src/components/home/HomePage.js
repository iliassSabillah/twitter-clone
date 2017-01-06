//This component handles the Home template
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import * as messageActions from '../../actions/messageActions';


class HomePage extends React.Component {
	render() {
		console.log('home page props',this.props.state);
		return (
			<div className="container-fluid">
				{this.props.children}
			</div>
		);
	}
}

HomePage.propTypes = {
	children : PropTypes.object,
	state: React.PropTypes.object,
};

const mapStateToProps= (state,ownProps)=>({state: state});

const mapDispatchToProps=(dispatch)=>({
	actions: bindActionCreators({userActions, messageActions}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

