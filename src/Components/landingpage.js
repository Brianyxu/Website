import React, { Component } from "react";
import TextLoop from 'react-text-loop';
import { Grid, Cell } from 'react-mdl';
import Lettuce from "../lettuce.jpeg";
import Cat from "../Pictures/cat.jpg";
import Sichuan from "../Pictures/sichuan.jpg";
import Nature from "../Pictures/nature.png";
import Bedhead from "../Pictures/bedhead.jpg";
import Stream from "../Pictures/stream.png";
import Tournament from "../Pictures/tournament.jpg";

class Landingpage extends Component {
  render() {
    return (
      < div className="contact" >
        <h2 style={{ textAlign: 'center' }}>
          About Me
      </h2>
        <hr className="aboutline"></hr>
        <Grid className="contact-grid">
          <Cell col={1}></Cell>
          <Cell col={4}>
            <h2>Brian Xu</h2>
            <img className="contact-picture"
              src={Lettuce}
              alt="avatar"
              style={{ height: "250px" }}
            />

          </Cell>
          <Cell col={1}></Cell>
          <Cell col={4} className="about-cell">
            Hello, I am a software developer from Houston, Texas who is currently a computer science student.
            <div style={{ paddingTop: "1em" }}></div>
            In 2018, I graduated with a Bachelors in mathematics and decided to pursue a Masters in computer science with focus on Machine Learning at Vanderbilt University.
            <div style={{ margin: "auto", paddingTop: "1em" }}>
            </div>
            I am a&nbsp;
              <TextLoop
              interval={5000}
              springConfig={{ stiffness: 30, damping: 10 }}
              mask
            >
              <span>
                cat owner.
              </span>
              <span>
                Sichuan food fanatic.
              </span>
              <span>
                bedhead victim.
              </span>
              <span>
                nature partaker.
              </span>
              <span>
                washed up semi-retired collegiate e-athlete.
              </span>
              <span>
                beneficiary of many beautiful friends.
              </span>
            </TextLoop>
            <div style={{ margin: "auto", paddingTop: "5px" }}>
              <TextLoop
                interval={5000}
                springConfig={{ stiffness: 30, damping: 10 }}
                mask
              >
                <span>
                  <img
                    src={Cat}
                    alt="cat"
                    style={{ height: "200px" }}
                  />
                </span>
                <span>
                  <img
                    src={Sichuan}
                    alt="sichuan"
                    style={{ height: "200px" }}
                  />
                </span>
                <span>
                  <img
                    src={Bedhead}
                    alt="bedhead"
                    style={{ height: "200px" }}
                  />
                </span>
                <span>
                  <img
                    src={Nature}
                    alt="nature"
                    style={{ height: "200px" }}
                  />
                </span>
                <span>
                  <img
                    src={Stream}
                    alt="stream"
                    style={{ height: "200px" }}
                  />
                </span>
                <span>
                  <img
                    src={Tournament}
                    alt="tournament"
                    style={{ height: "200px" }}
                  />
                </span>

              </TextLoop>
            </div>
          </Cell>
          <Cell col={1}></Cell>
        </Grid>
        <div style={{ textAlign: 'center' }}>
          <a href="https://www.linkedin.com/in/brianyxu" className="social" target="_blank" rel="noopener noreferrer"> <i className="fa fa-2x fa-linkedin-square" aria-hidden="false"></i></a>
          <a href="mailto:brian.y.xu@vanderbilt.edu" className="social" rel="noopener noreferrer"><i className="fa fa-2x fa-envelope"></i></a>
          <a href="https://github.com/brianyxu" className="social" target="_blank" rel="noopener noreferrer"><i className="fa fa-2x fa-github-square" aria-hidden="false"></i></a>
        </div>
      </div >

    );
  }
}
export default Landingpage;
