import React from 'react';


class Skills extends React.Component{
    render() {
        return (
<div id="skills-section">
<div id="parallax-world-of-ugg">      
<section>
  <div className="parallax-two">
    <h2>Skills</h2>
    <div className="skills-container">
    <div className="skill">
        <img className="logo" src="../images/html-logo.png" alt="HTML logo"/>
        <h4>HTML5</h4>
    </div>

    <div className="skill">
        <img className="logo" src="../images/css-logo.png" alt="CSS logo"/>
        <h4>CSS</h4>
    </div>

    <div className="skill">
        <img className="logo" src="../images/javascript-logo.png" alt="JavaScript logo"/>
        <h4>JavaScript</h4>
    </div>

    <div className="skill">
        <img className="wider-logo" src="../images/nodejs-logo.png" alt="Node.js logo"/>
        <h4>Node.js</h4>
    </div>

    <div className="skill">
        <img className="wider-logo" src="../images/mysql-logo3.png" alt="MySQL logo"/>
        <h4>MySQL</h4>
    </div>

    <div className="skill">
        <img className="logo" src="../images/react-logo.PNG" alt="REACT logo"/>
        <h4>REACT</h4>
    </div>

    <div className="skill">
        <img className="wider-logo" src="../images/aws-logo.jpeg" alt="AWS logo"/>
        <h4>AWS</h4>
    </div>

    <div className="skill">
        <img className="logo" src="../images/github-logo.jpg" alt="AWS logo"/>
        <h4>Github</h4>
    </div>

    </div>
  </div>
</section>
</div> 
</div>
        )
    }
}

export default Skills;