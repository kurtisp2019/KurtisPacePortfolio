import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom"

// reset all css before loading in the pages
import "./styles/reset.css"

// import pages
import Home from "./pages/Home"
import Education from "./pages/Education"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import WorkExperience from "./pages/WorkExperience"
import Resume from "./pages/Resume"
import Skills from "./pages/Skills"
import PageNotFound from "./pages/PageNotFound"

// import components
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const { match } = this.props;

  return (
    <>
      <BrowserRouter>
        <div>

          {/* Header */}
          {<Header />}

          {/* Body */}
          <Switch>
            <Route path={`${match.url}/`}component={Home} />
            <Route path={`${match.url}/education`} component={Education} />
            {/* <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/workexperience" component={WorkExperience} />
            <Route path="/resume" component={Resume} />
            <Route path="/skills" component={Skills} />
            <Route component={PageNotFound} /> */}
          </Switch>

          {/* Footer */}
          <Footer />

        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
