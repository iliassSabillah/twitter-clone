import React from 'react';
import {Link, IndexLink} from 'react-router';
import {Glyphicon} from 'react-bootstrap';
import Image from '../image/image';
import $ from 'jquery';
// import { Link } from 'react-router';

const InternalNav = React.createClass({
  render() {
    $('textarea.tweetInput').focus(function () {
      $(this).animate({ height: "4em" }, 500);
    });
    return(
      <div>
        <div className="sectionNav">
  				<ul className="box-row nav nav-pills center">
  					<div className="test1">
  						<li>
  							{/* <button type="button" className="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button> */}
  							<div style={{borderTopLeftRadius: 5,borderTopRightRadius: 5, borderTop: '1px solid #E1E8ED', backgroundColor: '#1DA1F2', height: 96}} />
  							<div style={{height: 95}} >
  								<IndexLink to="/">Home</IndexLink>
  							</div>
  						</li>
  					</div>
  					<div className="test2">
  						<li>
  							<div style={{borderBottom: '1px solid #E1E8ED', backgroundColor: '#E6F6FD', height: 58}}>
                  {/* http://jsfiddle.net/Y3rMM/ */}
                  <textarea style={{marginLeft: 70, marginTop: 10, width: '85%', height: 32}} type="email" className="tweetInput" placeholder="What's happening?" />
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
      </div>
  );
  }
});

export default InternalNav;
