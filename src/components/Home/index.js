import {Component} from 'react'
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiTwitterFill,
  RiFacebookCircleFill,
  RiInstagramFill,
} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'
import About from '../About'
import Skills from '../Skills'
import Projects from '../Projects'
import Certificates from '../Certificates'
import Contact from '../Contact'

import './index.css'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const bgClass = isDarkMode ? 'bg-container dark' : 'bg-container'
          return (
            <div className={bgClass}>
              <Navbar />
              <div className="main-container">
                <div className="home-container" id="Home">
                  <div className="container">
                    <div className="left-container">
                      <h2 className="hello">Hello</h2>
                      <h1 className={isDarkMode ? 'head-dark' : 'head'}>
                        I'm <span className="my-name">Pavan</span>{' '}
                        <img
                          className="wave"
                          src="https://res.cloudinary.com/dujxyjzqn/image/upload/v1746889857/Wave_afcrkl.png"
                          alt="wave"
                        />
                      </h1>
                      <p className="my-des">
                        UI/UX Designer, Front-End Developer & Thinker. Based in
                        India
                      </p>
                      <div className="buttons-container">
                        <a
                          href="https://drive.google.com/file/d/1pRObPLC24OZL82yES1z0R0iJgJVH6f7i/view?usp=drive_link"
                          download
                          className="button b1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download CV
                        </a>

                        <button
                          className="button b2"
                          type="button"
                          onClick={() => {
                            document
                              .getElementById('Contact')
                              .scrollIntoView({behavior: 'smooth'})
                          }}
                        >
                          Get in Touch
                        </button>
                      </div>
                    </div>

                    <div className="right-container">
                      <div className="img-bg">
                        <img
                          className="profile-img"
                          src="https://res.cloudinary.com/dujxyjzqn/image/upload/v1746892038/pavan_img-removebg-preview_teel2w.png"
                          alt="profile"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <About />
                <Skills />
                <Projects />
                <Certificates />
                <Contact />

                <ul className="social-icons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/pavan-kumar-kaniki/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiLinkedinBoxFill
                        size={30}
                        color={isDarkMode ? '#ffffff' : '#000000'}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/pavankumarkaniki/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiGithubFill
                        size={30}
                        color={isDarkMode ? '#ffffff' : '#000000'}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/Pavankumark99"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiTwitterFill
                        size={30}
                        color={isDarkMode ? '#ffffff' : '#000000'}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/k.pavankumar.39108297"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiFacebookCircleFill
                        size={30}
                        color={isDarkMode ? '#ffffff' : '#000000'}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/pavan_kumar__2004/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiInstagramFill
                        size={30}
                        color={isDarkMode ? '#ffffff' : '#000000'}
                      />
                    </a>
                  </li>
                </ul>

                <div className={isDarkMode ? 'mail-dark' : 'mail'}>
                  <a
                    href="mailto:kpavankumar971@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    kpavankumar971@gmail.com
                  </a>
                </div>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
