import React, {Component} from 'react'
import './index.css'

class ProjectCard extends Component {
  render() {
    const {title, description, imageUrl, demoLink, isDarkMode} = this.props
    return (
      <div className={`project-card ${isDarkMode ? 'dark-mode' : ''}`}>
        <img src={imageUrl} alt={title} className="project-img" />
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="project-links">
            <a
              className="demo"
              href={demoLink}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectCard
