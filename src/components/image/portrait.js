import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';

const Portrait = () => (
  // <img id="image" src="profile.jpg" alt="image" />
  // <div className="pics">{{data-icon={String.fromCharCode( "1f" )}}</div>
  <div className="portrait"><Glyphicon glyph="camera" style={{fontSize: '2.5em', color: '#FFFFFF'}} /></div>
);
export default Portrait;
