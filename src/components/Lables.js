import React, { Component } from 'react';
import lables from '../assets/lables.json';

export class Lables extends Component {
  render() {
    return (
      <div className="w3-card w3-margin">
        <div className="w3-container w3-padding">
          <h4>Tags</h4>
        </div>
        <div className="w3-container w3-white">
          <p>
            {lables.map((label, index) => (
              <span key={index} className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                {label.name}
              </span>
            ))}
          </p>
        </div>
      </div>
    );
  }
}
