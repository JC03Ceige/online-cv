
import './App.css'
import React from 'react';

import Profile from './sections/Profile';
import Education from './sections/Education';
import Skills from './sections/Skills';
import About from './sections/About';
import Work from './sections/Work';
import { object } from 'prop-types';


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
          <section className='education'>
          <Education educationData={ educationData } />
          </section>
          <Work workData={ workData }/>
        </main>
      </div>
    </div>
  );
}

App.propTypes = {
  jsonObj: object.isRequired
}

export default App;
