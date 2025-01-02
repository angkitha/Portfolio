import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from './pages/Introduction';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ResumeMore from './pages/ResumeMore';
import './styles/Global.css';

const App: React.FC = () => {
  return (
    <div>
      <div className="page-wrapPrecaution">

        <section className="IntroExpGradient">
          <div className = "shared-container">
            <div className = "section">
            <Introduction />
            </div>
            <div className = "section">
            <Experience />
            </div>
          </div>
        </section>

        <section className="ProjResMoreGradient">
          <div className = "section">
            <Projects />
            </div>
            <div className = "section">
            <ResumeMore />
            </div>
        </section>
        
      </div>
    </div>
  );
};


export default App;
