import React, {Component} from 'react'
import ProjectCard from '../ProjectCard'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

class Projects extends Component {
  render() {
    const projects = [
      {
        id: 1,
        title: 'Nxt Trendz',
        description:
          'A responsive e-commerce website built using React, JSX, and MySQL, offering seamless user experience for browsing and purchasing products. username: rahul, password: rahul@2021',
        imageUrl:
          'https://res.cloudinary.com/dujxyjzqn/image/upload/v1747471632/p-1_px9fam.png',
        demoLink: 'https://nxttrendzkpk.ccbp.tech/login',
      },
      {
        id: 2,
        title: 'Jobby App',
        description:
          'A job search web application built with React and REST APIs, enabling users to explore, filter, and apply for jobs efficiently. username: rahul, password: rahul@2021',
        imageUrl:
          'https://res.cloudinary.com/dujxyjzqn/image/upload/v1747471632/p-3_bvgrr3.png',
        demoLink: 'https://jobbykpk.ccbp.tech/login',
      },
      {
        id: 3,
        title: 'Todo app',
        description:
          'A simple and responsive Todo application built with React and Node.js, allowing users to manage daily tasks with CRUD operations.',
        imageUrl:
          'https://res.cloudinary.com/dujxyjzqn/image/upload/v1747471632/p-6_jf5lii.jpg',
        demoLink: 'https://todokpk.ccbp.tech/',
      },
      {
        id: 4,
        title: 'Portfolio Website',
        description:
          'A personal portfolio website to showcase my projects and skills.',
        imageUrl:
          'https://res.cloudinary.com/dujxyjzqn/image/upload/v1747472251/Home_-_Light_1_zqfiap.png',
        demoLink: 'https://myportfoliokpk.ccbp.tech/',
      },
      {
        id: 5,
        title: 'Generative AI',
        description:
          'A Generative AI web app that uses advanced language models to create human-like text responses, built with React and OpenAI’s API integration.',
        imageUrl:
          'https://res.cloudinary.com/dujxyjzqn/image/upload/v1747471632/p-5_dezod5.png',
        demoLink: 'https://genaikpk.ccbp.tech/',
      },
      {
        id: 6,
        title: 'Tic Tac Toe',
        description:
          'A simple and interactive Tic Tac Toe game built using React, featuring real-time state updates and responsive UI for two-player gameplay.',
        imageUrl:
          'https://res.cloudinary.com/dujxyjzqn/image/upload/v1747471632/p-4_bur9k2.png',
        demoLink: 'https://tictactoekpk.ccbp.tech/',
      },
      {
        id: 7,
        title: 'Food Munch',
        description:
          'A responsive food ordering website showcasing a variety of dishes, built using HTML, CSS, and Bootstrap for smooth navigation and modern design.',
        imageUrl:
          'https://res.cloudinary.com/dujxyjzqn/image/upload/v1747471632/p-2_xgjqu8.jpg',
        demoLink: 'https://foodmunchkpk.ccbp.tech/',
      },
      {
        id: 8,
        title: 'Rock Paper Scissors',
        description:
          'An engaging Rock Paper Scissors game built with React, offering intuitive gameplay, instant result display, and dynamic UI interactions.',
        imageUrl:
          'https://res.cloudinary.com/dujxyjzqn/image/upload/v1747471632/p-7_n9dbtk.jpg',
        demoLink: 'https://rpskpk.ccbp.tech/',
      },
    ]

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <div
              className={`projects-section ${isDarkMode ? 'dark-mode' : ''}`}
              id="Projects"
            >
              <h2 className="projects-heading">My Projects</h2>
              <p className="projects-para">
                Here are some of the Projects I Have Worked on
              </p>
              <div className="projects-list">
                {projects.map(project => (
                  <ProjectCard
                    key={project.id}
                    {...project}
                    isDarkMode={isDarkMode}
                  />
                ))}
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Projects
