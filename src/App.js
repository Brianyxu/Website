import React, { Component } from "react";
import "./App.css";
import Main from "./Components/main";
import { Button, Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link, withRouter } from "react-router-dom";
import Background from "./Pictures/background.jpg"
import PDF from "./Resume.pdf";



class App extends Component {
  close() {
    var selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
  }



  render() {

    return (
      <div className="main-div" >
        <Layout style={{ background: "url(" + Background + ") center / cover" }} >
          <Header style={{ backgroundColor: '#a9b6ca' }} title={<Link to="/"><Button style={{ color: 'white' }}>Home Page</Button></Link>}>
            <Navigation>
              <a href={PDF} target= '_black' rel= "noopener noreferrer" ><Button style={{ color: 'white' }}>Resume</Button></a>
              <Link to="/Portfolio" ><Button style={{ color: 'white' }}>Portfolio</Button></Link>
              <a href="https://github.com/brianyxu" target='_blank' rel="noopener noreferrer" ><Button style={{ color: 'white' }}>Github</Button></a>
            </Navigation></Header>
          <Drawer title="Navigation">
            <Navigation>
              <a href={PDF} target= '_black' rel= "noopener noreferrer" onClick={() => this.close()}>Resume</a>
              <Link to="/resume" onClick={() => this.close()}>Resume</Link>
              <Link to="/Portfolio" onClick={() => this.close()}>Portfolio</Link>
              <a href="https://github.com/brianyxu" target='_blank' rel="noopener noreferrer" onClick={() => this.close()}>Github</a>
            </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout>
      </div >
    )
  }
}

export default withRouter(props => <App {...props} />);
