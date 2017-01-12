

//This component handles the header navbar component
import React ,{PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Glyphicon} from 'react-bootstrap';
import LoggedInHome from './loggedinhome';
import Header from './Header'
import $ from 'jquery';
import path from 'path';
import Image from '../image/image';

// import '../../profile.png'

const ProfileNav = (props)=> {
	$(()=> {
		$(".nav-pills").on( "tabsactivate", (event,ui)=> window.location.hash = ui.panel.id);
	});
	return (
		<div>
			<nav className="navbar navbar-default" style={{height: 60, width: '100vw', backgroundColor: '#FFFFFF'}}>
				<div className="container-fluid">
					<div className="collapse navbar-collapse" id="profileNavDiv">
						<ul className="nav navbar-nav">
							<li><Link>TWEETS</Link></li>
							<li><Link>FOLLOWING</Link></li>
							<li><Link>FOLLOWERS</Link></li>
							<li><Link>LIKES</Link></li>
							<li><Link>MOMENTS</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
// Header.propTypes = {
// 	submit: PropTypes.func
// };

export default ProfileNav;
