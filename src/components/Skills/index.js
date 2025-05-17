import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const skillsList = [
  {
    name: 'HTML',
    logo:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    logo:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    logo:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Bootstrap',
    logo:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  },
  {
    name: 'SQL',
    logo:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Node.js',
    logo:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express.js',
    logo:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'React.js',
    logo:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Python',
    logo:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
]

class Skills extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const containerClass = isDarkMode
            ? 'skills-container dark'
            : 'skills-container'
          return (
            <div className={containerClass} id="Skills">
              <h2 className="skills-heading">
                Technical <span className="skills">Skills</span>
              </h2>
              <ul className="skills-list">
                {skillsList.map(skill => (
                  <li key={skill.name} className="skill-item">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="skill-logo"
                    />
                    <span className="skill-name">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Skills
