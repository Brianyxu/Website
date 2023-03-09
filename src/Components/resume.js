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
      <div style={{ width: '80%', margin: ' 50px auto' }}>
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
                skill="AWS"
                progress={80}
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
                progress={40}>
              </Skills>
            </div>
            <div className="languagediv">
              <Skills
                skill="C"
                progress={20}>
              </Skills>
            </div>
            <div className="languagediv">
              <Skills
                skill="Javascript"
                progress={70}>
              </Skills>
            </div>
            <div className="languagediv">
              <Skills
                skill="C#"
                progress={10}>
              </Skills>
            </div>
            <div className="languagediv">
              <Skills
                skill="Java"
                progress={80}>
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
            <h3 style={{ marginTop: '0px', marginBottom: '0px', marginLeft: '10px' }}>Professional</h3>
            <Professional
              name="Amazon"
              city="Nashville, TN"
              startMonth="August"
              startYear="2021"
              endMonth="Current"
              endYear=""
              position="Software Engineer"
              description={[{description: "Lead development, including design reviews, of SWA-Lite framework, to launch Shipping with Amazon into new geos, starting with France and Spain."}, 
              {description: "Revamped and standardized documentation process in order to streamline new hire onboarding experience."}, 
              {description: "Collaborated with engineers across 4 different teams on S Team goal to launch fulfillment channel in Turkey, allowing delivery from seller location straight to customer."},
              {description: "Served as primary on-call for SWA team, resolving 100+ tickets, including some high severity (SEV-2) issues."},
              {description: "Designed and implemented an onboarding workflow change in the UK to allow shippers to onboard with 2-day delivery (2DD) rates. Created changes to ten different services, released in many deployments to guarantee system stability and allow for easy rollback options. Coordinated deployments with multiple teams in multiple time zones. These changes increased package volume of UK geo by 30%, with a single day peak of 82k 2DD packages."}]}
            >
            </Professional>
            <Professional
              name="American Express"
              city="Phoenix, AZ"
              startMonth="August"
              startYear="2020"
              endMonth="July"
              endYear="2021"
              position="Software Enginer II"
              description={[{ description: "Immediately took leadership of a team that focused on building American Express’s intranet URL shortener, dotAmex." },
              {description: "Directed meetings with product leaders in order to prioritize features that would have the highest impact when delivered."},
              {description: "Built front end from scratch using React and JavaScript and seamlessly integrated it with the backend for better UX. "},
              {description: " Delivered RESTful backend APIs that improved overall functionality of dotAmex. Handled requests in the scale of hundreds of thousands a week."}]}
            >
            </Professional>
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h3 style={{ marginBottom: '0px', marginTop: '0px', marginLeft: '10px' }}>Education</h3>
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
            <h3 style={{ marginBottom: '0px', marginTop: '0px', marginLeft: '10px' }}>Projects</h3>
            <Projects
              name="Flushr App"
              startMonth="March"
              startYear="2019"
              endMonth="March"
              endYear="2019"
              description={[{ description: "Built a Yelp-esque application for public bathrooms using AWS Amplify anchored by a DynamoDB database; Assembled front end UI in React.js" }, { description: "Incorporated support for new user reviews and pictures." }]}
            >
            </Projects>
            <Projects
              name="Portfolize App"
              startMonth="February"
              startYear="2019"
              endMonth="February"
              endYear="2019"
              description={[{ description: "Developed both the front end (HTML/CSS) and the back end (Python) for an index-driven investment portfolio application." }, { description: "Optimized a basic time series regression algorithm to incorporate further realism." }]}
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
              description={[{ description: "Trained an agent using adversarial reinforcement learning in a multi-player Pacman game by constructing a policy-gradient based convolutional neural network in PyTorch." }]}
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
              description={[{ description: "Constructed a Unity3D project of an interactable virtual memory palace as a potential memory assistance mechanism.  Scripted in C#." }, { description: "Tweaked scripts in order to solve the problem of motion sickness and incorporate more realistic physics with both held and placed objects." }]}
            >
            </Projects>
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h3 style={{ marginTop: '0px', marginBottom: '0px', marginLeft: '10px' }}>Leadership</h3>
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
            <h3 style={{ marginTop: '0px', marginBottom: '0px', marginLeft: '10px' }}>Research</h3>

            <Professional
              name="Vanderbilt University"
              city="Nashville, TN"
              startMonth="August"
              startYear="2019"
              endMonth="Present"
              position="Research Assistant"
              description={[{ description: "Manufactured and analyzed sheets of nanospheres to measure the impact of imperfections in self-assemblednanocolloids" }]}
            >
            </Professional>
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

          </Cell>
        </Grid>
      </div>

    );
  }
}

export default Resume;
