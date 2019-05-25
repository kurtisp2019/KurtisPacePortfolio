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

  return (
    <>
      <BrowserRouter  basename={process.env.PUBLIC_URL}>
      {/* <HashRouter basename='/'> */}
        {/* Header */}
        {<Header />}

      {/* Body */}
        <Switch>
          <Route exact path="KurtisPacePortfolio/" component={Home} />
          <Route exact path="KurtisPacePortfolio/education" component={Education} />
          <Route exact path="KurtisPacePortfolio/projects" component={Projects} />
          <Route exact path="KurtisPacePortfolio/contact" component={Contact} />
          <Route exact path="KurtisPacePortfolio/workexperience" component={WorkExperience} />
          <Route exact path="KurtisPacePortfolio/resume" component={Resume} />
          <Route exact path="KurtisPacePortfolio/skills" component={Skills} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
      {/* </HashRouter> */}
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
