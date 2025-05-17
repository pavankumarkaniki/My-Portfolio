import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

class About extends Component {
  render() {
    const message = 'This is it. ;)'
    const description =
      ' K Pavan Kumar is an Indian UI/UX Designer, Front-End Developer, and Full-Stack Web Developer with a passion for building beautiful, functional, and responsive user experiences. Typically, he’s driven, curious, and constantly learning. He’s obsessed with crafting clean and user-friendly designs—both for the web and mobile platforms. Pavan began creating at a young age and has since evolved into a thoughtful designer and developer. He holds a Bachelor of Technology (B.Tech) degree and has been actively involved in full-stack web development for the last few years. He has built a variety of projects including landing pages, calculators, stopwatch apps, a contact manager, and even AI-powered and cloud-based tools. Currently, he’s based in Andhra Pradesh, India, where he’s working as an independent creative and tech enthusiast. His interests, however, extend beyond the screen. Pavan is deeply passionate about machine learning, automatic number plate detection, cloud computing, and startup innovation. He enjoys building complete solutions from design to backend architecture. When he’s not coding or designing, he’s probably exploring something new on YouTube, experimenting with side projects, or planning his next big idea.'
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <div className="about-bg" id="About">
              <div className="about-sub-bg">
                <div className="hand-bg">
                  <img
                    className="hand-img"
                    src="https://res.cloudinary.com/dujxyjzqn/image/upload/v1747460284/Rectangle_f5fiml.png"
                    alt="hand"
                  />
                </div>
                <div>
                  <h1 className={isDarkMode ? 'about-head-dark' : 'about-head'}>
                    {message} <hr className="hr-1" />
                  </h1>
                  <p className={isDarkMode ? 'about-para-dark' : 'about-para'}>
                    {description}
                  </p>
                  <br />
                  <hr className="hr-2" />
                </div>
                <div>
                  <img
                    className="mango-img"
                    src="https://res.cloudinary.com/dujxyjzqn/image/upload/v1747464915/Vector_3_yvs5iu.png"
                    alt="mango"
                  />
                </div>
              </div>
              <div className="about-sub-bg-2">
                <img
                  className="bottom-img"
                  src="https://res.cloudinary.com/dujxyjzqn/image/upload/v1747465347/Vector_4_dcjtwa.png"
                  alt="bottom-1"
                />
                <img
                  className="bottom-img"
                  src="https://res.cloudinary.com/dujxyjzqn/image/upload/v1747465348/Vector_5_whtbms.png"
                  alt="bottom-2"
                />
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default About
