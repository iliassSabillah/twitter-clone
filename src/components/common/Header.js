//This component handles the header navbar component
import React ,{PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import $ from 'jquery';

const Header = (props)=> {
	$(()=> {
		$(".nav-pills").on( "tabsactivate", (event,ui)=> window.location.hash = ui.panel.id);
	});
	return (
		<div>
			{/* { this.props.loginError ? (<div>{this.props.loginError}</div>) : null } */}
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"/>
							<span className="icon-bar"/>
							<span className="icon-bar"/>
						</button>
						<a className="navbar-brand" href="#">Twitter-MVP</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li><IndexLink to="/" activeClassName="active">Home<span className="sr-only"/></IndexLink></li>
							<li><Link to="about" activeClassName="active">About</Link></li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<form className="form-inline">
								<div className="form-group">
									<input style={{marginTop: 10+ 'px'}} type="email" className="form-control" id="email" placeholder="Enter email"/>
								</div>
								<div className="form-group">
									<input style={{marginTop: 10+ 'px'}} type="password" className="form-control" id="password" placeholder="Password"/>
								</div>
								<ul className="nav navbar-nav navbar-right">
									<li><button className="btn btn-outline-primary" href="#">Sign Up</button></li>
									<li><input className="btn btn-outline-primary" type="submit" value="Log In"/></li>
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
