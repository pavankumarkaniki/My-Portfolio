import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Navbar extends Component {
  state = {
    showMenu: false,
  }

  handleToggleTheme = toggleTheme => {
    toggleTheme()
  }

  toggleMenu = () => {
    this.setState(prevState => ({showMenu: !prevState.showMenu}))
  }

  render() {
    const {showMenu} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {toggleTheme, isDarkMode} = value
          const nameClass = isDarkMode ? 'name-dark' : 'name'
          const logoClass = isDarkMode ? 'nav-logo-dark' : 'nav-logo'
          const navLinkClass = isDarkMode ? 'nav-link-dark' : 'nav-link'

          return (
            <div className="nav-container">
              <a className="left-con" href="#Home">
                <img
                  className={logoClass}
                  src={
                    isDarkMode
                      ? 'https://res.cloudinary.com/dujxyjzqn/image/upload/v1747458134/Group_15_cbrcw1.png'
                      : 'https://res.cloudinary.com/dujxyjzqn/image/upload/v1746885298/Logo_lbav7x.svg'
                  }
                  alt="Website Logo"
                />
                <h1 className={nameClass}>K Pavan Kumar</h1>
              </a>
              <button
                type="button"
                className="menu-icon"
                onClick={this.toggleMenu}
              >
                ☰
              </button>
              <ul
                className={`nav-items-container ${
                  showMenu ? 'show-menu' : 'hide-menu'
                }`}
              >
                {[
                  'Home',
                  'About',
                  'Skills',
                  'Certificates',
                  'Projects',
                  'Contact',
                ].map(item => (
                  <li key={item}>
                    <a href={`#${item}`} className={navLinkClass}>
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    className="toggleBtn"
                    onClick={() => this.handleToggleTheme(toggleTheme)}
                  >
                    <img
                      className="moon"
                      src={
                        isDarkMode
                          ? 'https://res.cloudinary.com/dujxyjzqn/image/upload/v1747457876/Group_21_vdg2zn.png'
                          : 'https://res.cloudinary.com/dujxyjzqn/image/upload/v1746885960/Moon_mrhgqw.png'
                      }
                      alt="Moon Icon"
                    />
                  </button>
                </li>
              </ul>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
