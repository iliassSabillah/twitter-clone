import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';

const Image = () => (
  // <img id="image" src="profile.jpg" alt="image" />
  // <div className="pics">{{data-icon={String.fromCharCode( "1f" )}}</div>
  <div className="pics picsDiv"><Glyphicon glyph="user" style={{color: '#FFFFFF'}} /></div>
);
export default Image;
