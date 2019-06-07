import React from 'react';
import { Route, Switch } from "react-router-dom"

// reset all css before loading in the pages
import "./styles/reset.css"

// import pages
import Home from "./Views/Home"
import Education from "./Views/Education"
import RecentProjects from "./Views/RecentProjects"
import Contact from "./Views/Contact/Contact"
import WorkExperience from "./Views/WorkExperience"
import Resume from "./Views/Resume"
import PageNotFound from "./Views/PageNotFound"

// import components
import Header from "./Views/Header/Header"
import Footer from "./Views/Footer"


var headerMenuIsCollapsed = false;
function getHeaderCollapsedMenuState(_theState){

  if (_theState)
  headerMenuIsCollapsed = true;
  else
  headerMenuIsCollapsed = false;
}

function App() {

  return (
    <div>
      {/* Header */}
      {<Header parentCallback={getHeaderCollapsedMenuState} />}

      {/* Body */}
      <Switch>

          <Route exact path="/" component={Home} />
        <Route exact path="/education" render={(routeProps) => (
    <Education {...routeProps} IsHomePage={0} />
  )}
/>
          <Route exact path="/projects" component={RecentProjects} />
          <Route exact path="/contact"  headerMenuIsCollapsed={headerMenuIsCollapsed} component={Contact} />
          <Route exact path="/workexperience" render={(routeProps) => (
    <WorkExperience {...routeProps} IsHomePage={0} />
  )}
/>
          <Route exact path="/resume" component={Resume} />
          <Route component={PageNotFound} />

      </Switch>

        {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
