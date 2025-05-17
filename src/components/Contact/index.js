import React, {Component} from 'react'
import emailjs from 'emailjs-com'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()

    const serviceID = 'service_bwxe06f'
    const templateID = 'template_sgjw8mx'
    const userID = 'rm1Uh12nLPkkaZzUu'

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      result => {
        console.log(result.text)
        alert('✅ Your message has been sent!')
        this.setState({name: '', email: '', message: ''})
      },
      error => {
        console.error(error.text)
        alert('❌ Failed to send. Try again.')
      },
    )
  }

  render() {
    const {name, email, message} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <div
              className={`contact-section ${isDarkMode ? 'dark-mode' : ''}`}
              id="Contact"
            >
              <h2 className="contact-heading">Contact Me</h2>
              <p className="contact-para">Let’s get in touch!</p>
              <form className="contact-form" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                />
                <button type="submit">Send Message</button>
              </form>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Contact
