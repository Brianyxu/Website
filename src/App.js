import React, { Component } from "react";
import "./App.css";
import Main from "./Components/main";
import { Button, Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link, withRouter } from "react-router-dom";
import Background from "./Pictures/background.jpg"
import Nature from "./Pictures/nature.png"


class App extends Component {
  close() {
    var selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
  }



  render() {
    var landing = this.props.location.pathname === '/';
    if (landing) {
      return (
        <div style={{ height: "700px", position: "relative" }}>
          <Layout style={{ background: "url(" + Nature + ") center / cover" }} >
            <Header style={{ backgroundColor: '#a9b6ca' }} title={<Link to="/"><Button style={{ color: 'white' }}>Home Page</Button></Link>}>
              <Navigation>
                <Link to="/about" > <Button style={{ color: 'white' }}>About</Button></Link>
                <Link to="/resume" ><Button style={{ color: 'white' }}>Resume</Button></Link>
                <Link to="/Portfolio" ><Button style={{ color: 'white' }}>Portfolio</Button></Link>
                <a href="https://github.com/brianyxu" target='_blank' rel="noopener noreferrer" ><Button style={{ color: 'white' }}>Github</Button></a>
              </Navigation></Header>
            <Drawer title="Navigation">
              <Navigation>
                <Link to="/" onClick={() => this.close()}>Home Page</Link>
                <Link to="/about" onClick={() => this.close()}>About Me</Link>
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
    return (
      <div style={{ height: "700px", position: "relative" }}>
        <Layout style={{ background: 'url(' + Background + ') center / cover' }}>
          <Header style={{ backgroundColor: '#a9b6ca' }} title={<Link to="/"><Button style={{ color: 'white' }}>Home Page</Button></Link>}>
            <Navigation>
              <Link to="/about" > <Button style={{ color: 'white' }}>About</Button></Link>
              <Link to="/resume" ><Button style={{ color: 'white' }}>Resume</Button></Link>
              <Link to="/Portfolio" ><Button style={{ color: 'white' }}>Portfolio</Button></Link>
              <a href="https://github.com/brianyxu" target='_blank' rel="noopener noreferrer" ><Button style={{ color: 'white' }}>Github</Button></a>
            </Navigation></Header>
          <Drawer title="Navigation">
            <Navigation>
              <Link to="/" onClick={() => this.close()}>Home Page</Link>
              <Link to="/about" onClick={() => this.close()}>About Me</Link>
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
    );
  }
}

export default withRouter(props => <App {...props} />);
