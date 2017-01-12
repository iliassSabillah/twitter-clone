//This component handles the header navbar component
import React ,{PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Glyphicon} from 'react-bootstrap';
import LoggedInHome from './loggedinhome';
import $ from 'jquery';
import path from 'path';
import Image from '../image/image';

// import '../../profile.png'

const Header = (props)=> {
	$(()=> {
		$(".nav-pills").on( "tabsactivate", (event,ui)=> window.location.hash = ui.panel.id);
	});
	return (
		<div>
{/*
			<NewNavBar /> */}

			{/* { this.props.loginError ? (<div>{this.props.loginError}</div>) : null } */}
			<nav className="navbar navbar-default" style={{height: 46, width: '100vw', backgroundColor: '#FFFFFF'}}>
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
							<li><IndexLink to="/" activeClassName="active"><Glyphicon glyph="home" style={{fontSize: '1.25em'}} /><span>{' '}Home</span></IndexLink></li>
							{/* <li ><Link to="about" activeClassName="active">About</Link></li> */}
							<li><Link><Glyphicon glyph="flash" style={{fontSize: '1.25em'}} /><span>{' '}Moments</span></Link></li>
							<li><Link><Glyphicon glyph="bell" style={{fontSize: '1.25em'}} /><span>{' '}Notifications</span></Link></li>
							<li><Link><Glyphicon glyph="envelope"  style={{fontSize: '1.25em'}} /><span>{' '}Messages</span></Link></li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<form className="mainNav form-inline">
								<div id="leeds" className="form-group">
									<div className="searchDiv">
										<input style={{marginLeft: 5, marginTop: 10, borderRadius: 21, height: 32, backgroundColor: '#F5F8FA', border: '#E1E8ED'}} type="text" className="form-control" id="search" placeholder="Search" />
										<Glyphicon className="sherlock" glyph="search" />
									</div>
								{/* <div className="form-group">
									<input style={{marginTop: 10+ 'px'}} type="password" className="form-control" id="password" placeholder="Password"/>
								</div> */}
								<ul className="nav navbar-nav navbar-right">
									<li className="smallPic bigPic" style={{marginTop: 10, marginRight: 5, marginLeft: 5 }}>
										<Image />
									</li>

									<li>
									{/* <li><button className="btn btn-outline-primary" href="#">Sign Up</button></li> */}
									{/* <li><input className="btn btn-outline-primary" type="submit" value="Log In"/></li> */}
									{/* <img src={'./profile.png'} /> */}
										<button style={{marginTop: 10, marginRight: '3vw', width: 90, height: 32, backgroundColor: '#0084B4', color: '#FFFFFF'}} className="btn btn-outline-primary" href="#">
											<Glyphicon glyph="leaf" />
											{' '}Tweet
										</button>
									</li>
								</ul>
							</div>
							</form>
						</ul>
					</div>
				</div>
			</nav>
			<div className="sectionNav">
				<ul className="box-row nav nav-pills center">
					<div className="test1">
						<li>
							{/* <button type="button" className="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button> */}
							<div style={{borderRadiusTop: 5, borderBottom: '1px solid #E1E8ED', backgroundColor: '#1DA1F2', height: 96}} />
							<div style={{height: 95}} >
								<IndexLink to="/">Home</IndexLink>
							</div>
						</li>
					</div>
					<div className="test2">
						<li>
							<div style={{borderBottom: '1px solid #E1E8ED', backgroundColor: '#E6F6FD', height: 58}} />
								{/* <button type="button" className="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button> */}
							<div style={{borderBottom: '1px solid #E1E8ED', backgroundColor: '#F4F8FB', height: 40}} />
							<Link to="profile/tweet">Tweet</Link>
						</li>
					</div>
					<div className="test3">
					<li><Link to="/profile">Profile</Link></li>
				</div>
				</ul>
			</div>
			{props.children}
		</div>
	);
};
Header.propTypes = {
	submit: PropTypes.func
};

export default Header;
