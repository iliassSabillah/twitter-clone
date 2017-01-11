

//This component handles the header navbar component
import React ,{PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Glyphicon} from 'react-bootstrap';
import $ from 'jquery';
import path from 'path';
// import '../../profile.png'

const Header = (props)=> {
	$(()=> {
		$(".nav-pills").on( "tabsactivate", (event,ui)=> window.location.hash = ui.panel.id);
	});
	return (
		<div>
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
						<a className="navbar-brand" href="#">Twitter</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li><IndexLink to="/" activeClassName="active"><Glyphicon glyph="home" /><span> Home</span></IndexLink></li>
							{/* <li><Link to="about" activeClassName="active">About</Link></li> */}
							<li><Link><Glyphicon glyph="flash" /> Moments</Link></li>
							<li><Link><Glyphicon glyph="bell" /> Notifications</Link></li>
							<li><Link><Glyphicon glyph="envelope" /> Messages</Link></li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<form style={{display: 'inline-block', marginLeft: -75}}>
								<div className="form-group">
									<input style={{marginTop: 10, borderRadius: 21, height: 32, backgroundColor: '#F5F8FA', border: '#E1E8ED'}} type="text" className="form-control" id="search" placeholder="Search"/>
								</div>
								{/* <div className="form-group">
									<input style={{marginTop: 10+ 'px'}} type="password" className="form-control" id="password" placeholder="Password"/>
								</div> */}
								<ul className="nav navbar-nav navbar-right">
									{/* <li><button className="btn btn-outline-primary" href="#">Sign Up</button></li> */}
									{/* <li><input className="btn btn-outline-primary" type="submit" value="Log In"/></li> */}
									{/* <img src={'./profile.png'} /> */}
									<div style={{width: 32, height: 32, backgroundColor: '#B43900', borderRadius: 5, borderColor: '#6b2200', borderWidth: 3}}></div>
									<li><button style={{backgroundColor: '#0084B4', color: '#FFFFFF'}} className="btn btn-outline-primary" href="#">Tweet</button></li>
								</ul>
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
							<div style={{borderTopLeftRadius: 5,borderTopRightRadius: 5, borderTop: '1px solid #E1E8ED', backgroundColor: '#1DA1F2', height: 96}} />
							<div style={{height: 95}} >
								<IndexLink to="/">Home</IndexLink>
							</div>
						</li>
					</div>
					<div className="test2">
						<li>
							<div style={{borderBottom: '1px solid #E1E8ED', backgroundColor: '#E6F6FD', height: 58}}>
								<input style={{marginLeft: 70, marginTop: 10, width: '85%', height: 40}} type="email" className="tweetInput" placeholder="What's happening?"/>
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
};
Header.propTypes = {
	submit: PropTypes.func
};

export default Header;
