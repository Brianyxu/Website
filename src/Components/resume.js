import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";
import Education from './education';
import Projects from './projects';
import Professional from './professional';
import Skills from './skills';
import PDF from "../Resume.pdf";

class Resume extends Component {
  render() {
    return (
      <div style={{ width: '80%', margin: 'auto' }}>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <h3 margin="0px" style={{ textAlign: "center" }}>Brian Xu</h3>
            <hr></hr>
            <h5 style={{ textAlign: "left" }}>Software Developer</h5>
            <div>
              <a href="https://www.linkedin.com/in/brianyxu" className="resumesocial" target="_blank" rel="noopener noreferrer"> <i className="fa fa-2x fa-linkedin-square" aria-hidden="false"></i><span className="resumespan">www.linkedin.com/in/brianyxu</span></a>
            </div>
            <div>
              <a href="mailto:brian.y.xu@vanderbilt.edu" className="resumesocial" target="_blank" rel="noopener noreferrer"> <i className="fa fa-2x fa-envelope" aria-hidden="false"></i><span className="resumespan">brian.y.xu@vanderbilt.edu</span></a>
            </div>
            <div>
              <a href="https://github.com/brianyxu" className="resumesocial" target="_blank" rel="noopener noreferrer"> <i className="fa fa-2x fa-github-square" aria-hidden="false"></i><span className="resumespan">github.com/brianyxu</span></a>
            </div>
            <div className="resumesocial2" target="_blank"> <i className="fa fa-2x fa-phone" aria-hidden="false"></i><span className="resumespan">832-290-9561</span></div>
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <Button id="skillsbutton" disabled raised accent>Skills</Button>
            <div className="languagediv">
              <Skills
                skill="React"
                progress={35}
                width='60%'>
              </Skills>
            </div>
            <div className="languagediv">
              <Skills style={{ width: '30%' }}
                skill="MySQL"
                progress={40}
                width='60%'>
              </Skills>
            </div>
            <div className="languagediv">
              <Skills
                skill="HTML/CSS"
                progress={45}
                width='60%'>
              </Skills>
            </div>
            <div className="languagediv">
              <Skills
                skill="MongoDB"
                progress={35}
                width='60%'>
              </Skills>
            </div>
            <div className="languagediv">
              <Skills
                skill="DynamoDB"
                progress={55}
                width='60%'>
              </Skills>
            </div>
            <div className="languagediv">
              <Skills
                skill="Git"
                progress={95}
                width='60%'>
              </Skills>
            </div>
            <div className="languagediv">
              <Skills
                skill="LaTeX"
                progress={95}
                width='60%'>
              </Skills>
            </div>
            <div className="languagediv">
              <Skills
                skill="Unity3D"
                progress={35}
                width='60%'>
              </Skills>
            </div>
            <Button id="languagesbutton" disabled raised accent>Languages</Button>
            <div className="languagediv">
              <Skills
                skill="Python"
                progress={95}>
              </Skills>
            </div>
            <div className="languagediv">
              <Skills
                skill="C++"
                progress={85}>
              </Skills>
            </div>
            <div className="languagediv">
              <Skills
                skill="C"
                progress={60}>
              </Skills>
            </div>
            <div className="languagediv">
              <Skills
                skill="Javascript"
                progress={50}>
              </Skills>
            </div>
            <div className="languagediv">
              <Skills
                skill="C#"
                progress={35}>
              </Skills>
            </div>
            <div className="languagediv">
              <Skills
                skill="Java"
                progress={45}>
              </Skills>
            </div>
            <div className="languagediv">
              <Skills
                skill="R"
                progress={20}>
              </Skills>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <a href={PDF} target='_blank' rel="noopener noreferrer">Link to pdf version of resume</a>
            <h3 style={{ marginBottom: '0px', marginTop: '0px' }}>Education</h3>
            <Education
              startMonth="August"
              startYear={2018}
              endMonth="May"
              endYear={2020}
              degree="Master's Degree in Computer Science"
              schoolName="Vanderbilt University"
              city="Nashville, TN"
              description={[{ description: "Computer Science master's degree with particular focus on machine learning" }, { description: "Select courses include Machine Learning, Big Data, Network Security" }]}
            ></Education>
            <Education
              startMonth="August"
              startYear={2014}
              endMonth="May"
              endYear={2018}
              degree="Bachelor of Science in Mathematics"
              city="Nashville, TN"
              schoolName="Vanderbilt University"
              description={[{ description: "Select mathematics courses include Topology, Modern Algebra, Actuarial Mathematics" }, { description: "Select computer science courses include Algorithms and Data Structures, Virtual Reality, Web Development, Operating Systems, Cryptography" }]}
            ></Education>
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h3 style={{ marginBottom: '0px', marginTop: '0px' }}>Projects</h3>
            <Projects
              name="Flushr App"
              startMonth="March"
              startYear="2019"
              endMonth="March"
              endYear="2019"
              description={[{ description: "Built a Yelp-esque application for public bathrooms with a new AWS library known as Amplify anchored by a DynamoDB database in the background." }, { description: "Incorporated support for new user reviews and pictures." }]}
            >
            </Projects>
            <Projects
              name="Portfolize App"
              startMonth="February"
              startYear="2019"
              endMonth="February"
              endYear="2019"
              description={[{ description: "Developed both the front end and the back end for an index-driven investment portfolio application." }, { description: "Optimized a basic time series regression algorithm to incorporate further realism." }]}
            >
            </Projects>
            <Projects
              name="RoadTrippn App"
              startMonth="October"
              startYear="2018"
              endMonth="October"
              endYear="2018"
              description={[{ description: "Utilized Swift to create iOS application that recommends the best restaurants while planning a road trip." }, { description: "Pulled data from Yelp API and Google API and employed Flask back-end to handle HTTP requests." }]}
            >
            </Projects>
            <Projects
              name="Pacman Reinforcement Learning Application"
              startMonth="August"
              startYear="2018"
              endMonth="December"
              endYear="2018"
              description={[{ description: "Developed my machine learning knowledge by construction a policy-gradient based convolutional neural network using PyTorch, a relevant neural network framework in Python." }]}
            >
            </Projects>
            <Projects
              name="Basic Video Streaming Application"
              startMonth="January"
              startYear="2018"
              endMonth="May"
              endYear="2018"
              description={[{ description: "Developed a TCP Socket-based rudimentary video streaming client and server from scratch in python" }, { description: "Integrated features such as rewind, pause, fast-forward and overcame obstacles such as synchronizing audio with video and data corruption" }]}
            >
            </Projects>
            <Projects
              name="Virtual Reality Memory Palace"
              startMonth="August"
              startYear="2017"
              endMonth="December"
              endYear="2017"
              description={[{ description: "Demoed a virtual memory palace utilizing Unity3D as a memory assistance mechanism in a conference." }, { description: "Solved the problem of motion sickness and achieved realistic physics with both held and placed objects. Im-plemented in C#." }]}
            >
            </Projects>
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h3 style={{ marginTop: '0px', marginBottom: '0px' }}>Leadership</h3>
            <Professional
              name="Code Ignite Project Leader"
              city="Nashville, TN"
              startMonth="February"
              startYear="2016"
              endMonth="April"
              endYear="2016"
              description={[{ description: "Coordinated a team to develop interest in computer science and programming among low-income students." }]}
            >
            </Professional>
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h3 style={{ marginTop: '0px', marginBottom: '0px' }}>Professional</h3>
            <Professional
              name="Ascension Education"
              city="Houston, TX"
              startMonth="July"
              startYear="2016"
              endMonth="July"
              endYear="2018"
              position="Helped Create Startup/Teacher"
              description={[{ description: "Physically built, including installing windows and doors, a tutoring startup geared towards accelerating education of immigrant students relocated to America." }, { description: "Created suitable personalized curriculums for each individual class" }]}
            >
            </Professional>
            <Professional
              name="Hua Sheng Academy"
              city="Houston, TX"
              startMonth="February"
              startYear="2014"
              endMonth="March"
              endYear="2014"
              position="Mathematics Teacher"
              description={[{ description: "Applied bilingual skills to guide students to a more comprehensive understanding of fundamental mathematical subjects such as number theory and combinatorics." }]}
            >
            </Professional>
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h3 style={{ marginTop: '0px', marginBottom: '0px' }}>Research</h3>

            <Professional
              name="Rice University"
              city="Houston, TX"
              startMonth="June"
              startYear="2015"
              endMonth="August"
              endYear="2015"
              position="Research Assistant"
              description={[{ description: "Developed and optimized a datamining program that analyzed several metabolic pathways detailed in TCGA database with R and MATLAB to determine practicality of starving cancer cells of L-Glutamine." }]}
            >
            </Professional>
            <Professional
              name="Texas State University"
              city="San Marcos, TX"
              startMonth="May"
              startYear="2013"
              endMonth="September"
              endYear="2013"
              position="Project Leader"
              description={[{ description: "Manufactured and analyzed sheets of nanospheres to measure the impact of imperfections in self-assemblednanocolloids" }]}
            >
            </Professional>

          </Cell>
        </Grid>
      </div>

    );
  }
}

export default Resume;
