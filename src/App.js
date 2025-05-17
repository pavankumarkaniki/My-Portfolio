import {Component} from 'react'
import Home from './components/Home'
import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {
    isDarkMode: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    return (
      <ThemeContext.Provider
        value={{isDarkMode, toggleTheme: this.toggleTheme}}
      >
        <Home />
      </ThemeContext.Provider>
    )
  }
}

export default App
