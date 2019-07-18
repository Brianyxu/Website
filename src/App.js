import React, { Component } from "react";
import "./App.css";
import Main from "./Components/main";
import { Button, Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link, withRouter } from "react-router-dom";
import Cat from "./Pictures/cat.jpg"


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
          <Layout style={{ background: "url(" + Cat + ") center / cover" }}>
            <Header transparent >
            </Header>
            <Drawer title="Navigation">
              <Navigation>
                <Link to="/" onClick={() => this.close()}>Home Page</Link>
                <Link to="/about" onClick={() => this.close()}>About Me</Link>
                <Link to="/resume" onClick={() => this.close()}>Resume</Link>
                <Link to="/Portfolio" onClick={() => this.close()}>Projects</Link>
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
        <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
          <Header transparent >
          </Header>
          <Drawer title="Navigation">
            <Navigation>
              <Link to="/" onClick={() => this.close()}>Home Page</Link>
              <Link to="/about" onClick={() => this.close()}>About Me</Link>
              <Link to="/resume" onClick={() => this.close()}>Resume</Link>
              <Link to="/Portfolio" onClick={() => this.close()}>Projects</Link>
              <a href="https://github.com/brianyxu" target='_blank' rel="noopener noreferrer" onClick={() => this.close()}>Github</a>
            </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout >
      </div >
    );
  }
}

export default withRouter(props => <App {...props} />);
