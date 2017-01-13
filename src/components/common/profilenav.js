

//This component handles the header navbar component
import React ,{PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Glyphicon} from 'react-bootstrap';
import LoggedInHome from './loggedinhome';
import Header from './Header'
import $ from 'jquery';
import path from 'path';
import Image from '../image/image';
import ProfileBanner from './profileBanner';

// import '../../profile.png'

const ProfileNav = (props)=> {
	$(()=> {
		$(".nav-pills").on( "tabsactivate", (event,ui)=> window.location.hash = ui.panel.id);
	});
	return (
		<div style={{}}>
      <div id="bannerNav">
        <div className="bannerPic">
          <ProfileBanner />
        </div>
  			<nav className="navbar navbar-default profile" style={{height: 60, width: '100vw', backgroundColor: '#FFFFFF'}}>
  				<div className="container-fluid">
  					<div className="navbar-header">
  						<button type="button" className="navbar-toggle collapsed">
  							<span className="sr-only">Toggle navigation</span>
  							<span className="icon-bar"/>
  							<span className="icon-bar"/>
  							<span className="icon-bar"/>
  						</button>
  						{/* <a className="navbar-brand" href="#">Twitter</a> */}
  					</div>
  					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  						<ul className="nav navbar-nav">
  							<li><IndexLink>TWEETS</IndexLink></li>
  							<li><Link>FOLLOWING</Link></li>
  							<li><Link>FOLLOWERS</Link></li>
  							<li><Link>LIKES</Link></li>
  							<li><Link>MOMENTS</Link></li>
  						</ul>
              <ul className="nav navbar-nav">
                <li>
                  <Link>
                    <button id="profileBtn" style={{width: 'auto', height: 37, color: '66757F', paddingTop: 8, paddingBottom: 8, paddingLeft: 16, paddingRight: 16}} className="btn btn-outline-primary" href="#">
                      {' '}EDIT PROFILE
                    </button>
                  </Link>
                </li>
              </ul>
  					</div>
  				</div>
  			</nav>
      </div>
		</div>
	);
};
// Header.propTypes = {
// 	submit: PropTypes.func
// };

export default ProfileNav;
