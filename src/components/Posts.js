import React, { Component } from 'react';
import posts from '../assets/posts.json';

export class Posts extends Component {
  render() {
    return (
      <div className="w3-card w3-margin">
        <div className="w3-container w3-padding">
          <h4>Popular Posts</h4>
        </div>
        <ul className="w3-ul w3-hoverable w3-white">
          {posts.map((post, index) => (
            <li key={index} className="w3-padding-16">
              <img src={post.image} alt="" className="w3-left w3-margin-right" />
              <span className="w3-large">{post.title}</span>
              <br />
              <span>{post.text}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
