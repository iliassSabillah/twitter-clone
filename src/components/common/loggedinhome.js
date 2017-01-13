import React ,{PropTypes}from 'react';
import {Link, IndexLink} from 'react-router';
import {Glyphicon} from 'react-bootstrap';
import Image from '../image/image';
import Portrait from '../image/portrait';
import $ from 'jquery';
// import { Link } from 'react-router';
import Header from './Header';
import profilenav from './profilenav';

const LoggedInHome = React.createClass({
  render() {
    $('textarea.tweetInput').focus(function () {
      $(this).animate({ height: "4em" }, 500);
    });
    console.log('loggedin home state',this.props);
    return(
      <div>
		  <Header/>
		<profilenav/>
        <div className="sectionNav">
  				<ul className="box-row nav nav-pills center">
  					<div className="containerTest1 test1">
  						<li>
  							{/* <button type="button" className="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button> */}
  							<div className="testTopDiv" style={{borderTopLeftRadius: 5,borderTopRightRadius: 5, borderTop: '1px solid #E1E8ED', height: 96}} />
  							<div className="testBottomDiv" style={{height: 95}} >
  								{/* <IndexLink to="/">Home</IndexLink> Link to user profile*/}
                  <div className="userInfo">
                    <div className="userTag">
                      USER NAME
                    </div>
                    <div className="userTwitter">
                      @username
                    </div>
                  </div>
                  <div className="stats" style={{height: 68}}>
                    <div>TWEETS<br />
                      <span className="statsNum">0</span>
                    </div>
                    <div>FOLLOWERS<br />
                      <span className="statsNum">0</span>
                    </div>
                    <div>FOLLOWING<br />
                      <span className="statsNum">0</span>
                    </div>
                  </div>
  							</div>
                <div className="testFrontDiv">
                  <Portrait />
                </div>
  						</li>
  					</div>
  					<div className="test2">
  						<li>

  							<div className="tweetBox" style={{borderBottom: '1px solid #E1E8ED', backgroundColor: '#E6F6FD', height: 58}}>
                  {/* http://jsfiddle.net/Y3rMM/ */}
                  <div style={{marginLeft: 55}}><Image /></div>
                  <textarea style={{marginLeft: 10, width: '80%', height: 32}} type="email" className="form-control tweetInput" placeholder="What's happening?" />
  							</div>
  								{/* <button type="button" className="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button> */}
  							<div style={{borderBottom: '1px solid #E1E8ED', backgroundColor: '#F4F8FB', height: 40}} />
  							<Link to="tweet">Tweet</Link>
  						</li>
  					</div>
  					<div className="test3">
  					<li><Link to="profile">Profile</Link></li>
  				</div>
  				</ul>
  			</div>
		  {this.props.children}
      </div>
  );
  }
});

LoggedInHome.propTypes = {
	children: PropTypes.object
};

export default LoggedInHome;
