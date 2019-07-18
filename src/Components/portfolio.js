import React, { Component } from "react";
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from "react-mdl";
class Portfolio extends Component {

  render() {
    return (
      <div className="projects-grid">
        <Grid>
          {/* Project 1 */}
          <Cell col={4}>
            <div className="ProjectsCard">
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/5/55/Unity3D_Logo.jpg) center / cover' }} >Memory Palace</CardTitle>
                <CardText style={{ height: '54px' }}>
                  <b>Memory Palace</b>
                  <br></br>
                  Virtual reality memory assistance aid created in Unity3D.
              </CardText>
                <CardActions border>
                  <a href="https://github.com/rpvandy/Memory-Palace" target="_blank" rel="noopener noreferrer">
                    <Button style={{ width: '50%' }} colored>GitHub</Button>
                  </a>
                  <a href="https://www.youtube.com/watch?time_continue=7&v=nhTvZp8O9OI" target="_blank" rel="noopener noreferrer">
                    <Button style={{ width: '50%' }} colored > Demo</Button>
                  </a>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                </CardMenu>
              </Card>
            </div>
          </Cell>
          {/* Project 2 */}
          <Cell>
            <div className="ProjectsCard">
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.fullstackpython.com/img/logos/flask.jpg) no-repeat center / contain' }} ></CardTitle>
                <CardText style={{ height: '54px' }}>
                  <b>Portfolize</b>
                  <br></br>
                  Investment portfolio application with Flask backend, deployed via Heroku.        </CardText>
                <CardActions border>
                  <a href="https://github.com/Brianyxu/Portfolize" target="_blank" rel="noopener noreferrer">
                    <Button style={{ width: '50%' }} colored>GitHub</Button>
                  </a>
                  <a href="https://salty-ridge-11736.herokuapp.com" target="_blank" rel="noopener noreferrer">
                    <Button style={{ width: '50%' }} colored > Application</Button>
                  </a>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                </CardMenu>
              </Card>
            </div>
          </Cell>
          {/* Project 3 */}
          <Cell>
            <div className="ProjectsCard">
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://camo.githubusercontent.com/8ec35c70c818d5c0031e347e63ec857f6d57f932/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6177732d6d6f62696c652d6875622d696d616765732f6177732d616d706c6966792d6c6f676f2e706e67) no-repeat center / contain' }} ></CardTitle>
                <CardText style={{ height: '54px' }}>
                  <b>Flushr</b>
                  <br></br>
                  Yelp-esque restroom rating application, with AWS Amplify powering backend.        </CardText>
                <CardActions border>
                  <a href="https://github.com/Brianyxu/flushr" target="_blank" rel="noopener noreferrer">
                    <Button style={{ width: '100%' }} colored>GitHub</Button>
                  </a>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                </CardMenu>
              </Card>
            </div>
          </Cell>
          {/* Project 4 */}
          <Cell>
            <div className="ProjectsCard">
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle className="norepeat" style={{ color: '#fff', height: '176px', background: 'url(https://www.fullstackpython.com/img/logos/flask.jpg) no-repeat center / contain' }} >
                </CardTitle>
                <CardText style={{ height: '54px' }}>
                  <b>RoadTrippn</b>
                  <br></br>
                  iOS application that recommends the best restaurants during a road trip.        </CardText>
                <CardActions border>
                  <a href="https://github.com/Brianyxu/RoadTrppn" target="_blank" rel="noopener noreferrer">
                    <Button style={{ width: '100%' }} colored>GitHub</Button>
                  </a>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                </CardMenu>
              </Card>
            </div>
          </Cell>
          {/* Project 5 */}
          <Cell>
            <div className="ProjectsCard">
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle className="norepeat" style={{ color: '#fff', height: '176px', background: 'url(https://pytorch.org/tutorials/_images/pytorch-logo-flat.png) no-repeat center / contain' }} ></CardTitle>
                <CardText style={{ height: '54px' }}>
                  <b>Reinforcement Learning Pacmen</b>
                  <br></br>
                  Adversarial Pacman reinforcement learning application.     </CardText>
                <CardActions border>
                  <a href="https://github.com/hazrmard/RL-Pacmen" target="_blank" rel="noopener noreferrer">
                    <Button style={{ width: '100%' }} colored>GitHub</Button>
                  </a>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                </CardMenu>
              </Card>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Portfolio;
