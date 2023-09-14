import React, { Component } from 'react';

export class AboutCard extends Component {
  constructor({ props }) {
    super(props);
  }
  render() {
    return (
      <div className="w3-card w3-margin w3-margin-top">
        <img src={this.props.aboutCard.image} alt="" />
        <div className="w3-container w3-white">
          <h4>
            <b>{this.props.aboutCard.name}</b>
          </h4>
          <p>{this.props.aboutCard.text}</p>
        </div>
      </div>
    );
  }
}
