import React, { Component } from 'react';
import { Title } from '../components/Title';
import { Blog } from '../components/Blog';
import { AboutCard } from '../components/AboutCard';
import { Posts } from '../components/Posts';
import { Lables } from '../components/Lables';
import { Footer } from '../components/Footer';
import blogs from '../assets/blogs.json';
import aboutCards from '../assets/about.json';

export class BlogPage extends Component {
  render() {
    return (
      <>
        <div className="w3-content">
          <Title />
          <div className="w3-row">
            <div className="w3-col l8 s12">
              {blogs.map((blog, index) => (
                <Blog key={index} blog={blog} />
              ))}
            </div>
            <div className="w3-col l4">
              {aboutCards.map((aboutCard, index) => (
                <AboutCard key={index} aboutCard={aboutCard} />
              ))}
              <hr />
              <Posts />
              <hr />
              <Lables />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
