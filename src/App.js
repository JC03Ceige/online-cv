
// We import the style sheet for the app.
import './App.css'
// We import the raect library
import React from 'react';

// We import all the components required to render the app in the final build.
import Profile from './sections/Profile';
import Education from './sections/Education';
import Skills from './sections/Skills';
import About from './sections/About';
import Work from './sections/Work';
import { object } from 'prop-types';

// We create a App component that we use to produce the app as it will be rendered. We capitalize the first letter of the component.
const App = props => {
  const { jsonObj: { basics, work, skills, education } } = props
  const profileData = basics;
  const aboutData = profileData.summary;
  const workData = work;
  const skillsData = skills;
  const educationData = education;
  return (
    <div className="App">
      <script src="https://kit.fontawesome.com/4a9bacebc4.js" crossorigin="anonymous"></script>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"></link>
      <div className="container">
        <aside>< Profile profileData={ profileData } /></aside>
        <main>
          <About aboutData={ aboutData }/>
          <Skills skillsData={ skillsData } />
          <Education educationData={ educationData } />
          <Work workData={ workData }/>
        </main>
      </div>
    </div>
  );
}

/* We specify that the object is required for this component */
App.propTypes = {
  jsonObj: object.isRequired
}

// We export the component.
export default App;
