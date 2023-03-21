import './App.css';
import React from 'react';
import data from "./data.js"

import {ReactComponent as IconLinked} from "./icons/linkedin.svg"
import {ReactComponent as IconPrint} from "./icons/printer.svg"

function App() {
  return (
      <div className="App">
        <div className="App--actions">
          <a className="App--actions-link" href={data.social.linkedin} target="_blank"
             rel="noreferrer"><IconLinked/></a>
          <button onClick={() => window.print()}><IconPrint/></button>
        </div>
        <div className="App--CV">
          <div className="App--CV-container">
            <header className="App--CV-header">
              <h1>{data.bio.name}</h1>
              <div className="App--header-infoBox">
                <h2>{data.bio.years}</h2>
                <span>{data.bio.location}</span>
                <span>{data.bio.email}</span>
              </div>
              <p>{data.bio.info}</p>
            </header>
            <main className="App--CV-main">
              <section>
                <h3>Experience</h3>
                {data.experience.map(place => {
                  return (
                      <div key={place.name} className="App--experience">
                        <div className="App--experience-place">
                          <h4>{place.name}</h4>
                          <span>{place.date}</span>
                        </div>
                        <div className="App--experience-desc">
                          <p>{place.description}</p>
                          <p>Stack: {place.stack}</p>
                        </div>
                      </div>
                  )
                })}
              </section>
              <section>
                <h3>Education</h3>
                {data.education.map(place => (
                    <div key={place.university} className="App--education">
                      <span>{place.period}</span>
                      <h4>{place.university}</h4>
                      <p>{place.degree}</p>
                    </div>
                ))}
                <div className="App--education-skills">
                  <h3>Skills</h3>
                  <ul>
                    {data.skills.map(skill => (<li key={skill}>{skill}</li>))}
                  </ul>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
  );
}

export default App;
