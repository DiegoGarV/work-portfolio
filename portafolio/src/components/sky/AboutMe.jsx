import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='aboutme' id='about-me'>
            <div id="background-wrap">
                <div className="x1">
                    <div className="cloud"></div>
                </div>
                <div className="x2">
                    <div className="cloud"></div>
                </div>
                <div className="x3">
                    <div className="cloud"></div>
                </div>
                <div className="x4">
                    <div className="cloud"></div>
                </div>
                <div className="x5">
                    <div className="cloud"></div>
                </div>
                <div className="x6">
                    <div className="cloud"></div>
                </div>
            </div>
            <div className="container">
                <div className="avatar">
                    <img src="../src/img/avatar.jpg" alt="Me" />
                </div>
            </div>
            <div id='title-content'>
                <h1 id='name'>Diego García</h1>
            </div>
            <div id='personal-info'>
                <div id='card-personal'>
                    <h2 id='about'>About me</h2>
                    <p>Hi, people call me Diego. I'm currently studying computer science at Universidad del Valle de Guatemala (UVG). I like to watch movies and tv series, but my real passion are videogames. I also like to spend time with my family and friends. My favorite sport is swimming, but I also like going to the gym.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
