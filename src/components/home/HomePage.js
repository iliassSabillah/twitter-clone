//This component handles the Home template
import React from "react";
import $ from 'jquery';
import {IndexLink, Link} from "react-router";
import axios from "axios";

const HomePage  = React.createClass({
	getInitialState(){
		return {
			cnnData:{},
			username:''
		}
	},
	componentWillMount(){
		let that = this;
		axios.get("https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=5dcc087c73fb4052a41f6688d7619d79")
			.then(data=> that.setState({cnnData: data.data.articles}))
	},
	showNavi() {
		{
			// JQUERY FOR THE NAVBAR
			$('.handle').on('click', function() {
				$('nav ul').toggleClass('showing')
			})
		}
	},
	showArticles(data,index){
		return (
				<div key={index} className="col-md-4">
					<div  className="box">
						<div className="boxheading">
							<p><strong>{data.title}</strong></p>
						</div>
						<a href={data.url} target ="_blank">
							<div >
								<img width="100%" src={data.urlToImage}/>
							</div>
						</a>
					</div>
				</div>
				)
	},
	render() {
		console.log("home page state",this.state.cnnData);
		console.log()
		let list = !this.state.cnnData ? "<div>Loading...</div>" :this.state.cnnData.map(this.showArticles).filter((val,i,arr)=> i <= 8) ;
		return (
			<div className="container-fluid">
				<div className="siteHeader">
					<div className="container">
						<div className="row">
							{
								// THE LOGO ON THE LEFT
							}
							<div className="col-md-4">
								<span className="fa fa-diamond" aria-hidden="true" id="logo"></span>
							</div>
							{
								// THE MIDDLE QUOTE
							}
							<div className="col-md-4">
								<center><h1 id="headertext">Whats cooking?</h1></center>
							</div>
							{
								// THE SIGN UP/ LOGIN BUTTONS ON THE FAR RIGHT
							}
							<div className="col-md-4">

								<button id="signup">SIGN UP</button>
								<button id="login"><Link to={`/profile/${this.state.username}`}>Login</Link></button>
							</div>

						</div>

					</div>
				</div>
				<div className="navi">
					<center>
						<nav>
							<ul>
								<li>Featured</li>
								<li>Sports</li>
								<li>News</li>
								<li>Entertainment</li>
								<li>Music</li>
								<li>Lifestyle</li>
								<li><span className="glyphicon glyphicon-search" id="searchicon"></span></li>
							</ul>

							<div className="handle" onClick={this.showNavi}>
								<span className="glyphicon glyphicon-menu-hamburger" id="ham"></span>
							</div>

						</nav>
					</center>
				</div>
				<div className="home">
					<div className="container">
						{
							// THE FOUR INITIAL BOXES INLUDING THE SIGN-UP FORM
						}
							<div className="row">
								<div className="col-md-9">
									{list}
								</div>
								<div className="col-md-3">
									<center><div className="box" id="signupform">
										<center><p id="signintext"><strong>Sign into your account:</strong></p></center>
										<center>
											<form>
												<input type="text" placeholder="Enter your E-Mail..." className="enteremail" />
												<input type="text" placeholder="Password" className="enterpassword" />
												<p className="remforgot" id="rem">Remember me</p>
												<p className="remforgot" id="pwd">Forgot Password?</p>
												<button className="submitlogin">Submit</button>
											</form>
										</center>
									</div>
									</center>
								</div>
							</div>

						{
							// THE REST OF THE BODY (FEATURED POSTS) WHICH WILL BE DISPLAYED USING THE TWITTER API
						}

						<div className="row featuredPosts">
							<div className="container">
								<center><p id="featuredHeading"><span id="greycover">Featured Posts</span></p></center>
								<hr id="featuredhr" />
							</div>
						</div>
						<div className="row" id="featuredboxes">

							<div className="col-md-3">
								<div className="box" id="newsOne">
									<div className="boxheading">
										<p><strong>The Clintons have done enough damage: Steven Strauss</strong></p>
									</div>

									<a href="http://www.usatoday.com/story/opinion/2016/12/06/hillary-clinton-campaign-stupid-stuff-steven-strauss/94990920/" target="_blank">
										<div className="picdiv">
										</div>
									</a>

								</div>
							</div>
							<div className="col-md-3">
								<div className="box">

									<div className="boxheading">
										<p><strong>Tom Brady leads Fantasy Hipsters overrated plays</strong></p>
									</div>

									<a href="http://www.nfl.com/fantasyfootball/story/0ap3000000752642/article/tom-brady-leads-fantasy-hipsters-overrated-plays" target="_blank">
										<div className="picdivtwo">
										</div>
									</a>

								</div>
							</div>
							<div className="col-md-3">
								<div className="box">

									<div className="boxheading">
										<p><strong>How Kanye West’s Issues Have Caused Strain on His Marriage to Kim Kardashian</strong></p>
									</div>

									<a href="http://people.com/celebrity/kanye-west-issues-caused-strain-on-marriage-kim-kardashian/" target="_blank">
										<div className="picdivthree">
										</div>
									</a>

								</div>
							</div>


						</div>

					</div>

				</div>
			</div>
		);
	}
});


export default HomePage;
