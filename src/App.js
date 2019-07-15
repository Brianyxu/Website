import React, { Component } from "react";
import "./App.css";
import Main from "./Components/main";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";


class App extends Component {
  close() {
    var selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
  }
  render() {
    return (
      <div style={{ height: "700px", position: "relative" }}>
        <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
          <Header transparent title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home Page</Link>} style={{ color: "white" }}>
            <Navigation>
              <Link to="/resume" >Resume</Link>
              <Link to="/Portfolio">Projects</Link>
              <a href="https://github.com/brianyxu" target='_blank' rel="noopener noreferrer" >Github</a>
            </Navigation></Header>
          <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/" onClick={() => this.close()}>Home Page</Link>}>
            <Navigation>
              <Link to="/resume" onClick={() => this.close()}>Resume</Link>
              <Link to="/Portfolio" onClick={() => this.close()}>Projects</Link>
              <a href="https://github.com/brianyxu" target='_blank' rel="noopener noreferrer" onClick={() => this.close()}>Github</a>
            </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
