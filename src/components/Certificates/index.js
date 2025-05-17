import React, {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Certificates extends Component {
  render() {
    const certificates = [
      {
        id: 1,
        certificateLink:
          'https://certificates.ccbp.in/academy/static-website?id=UIEWOFFHRW',
        imageUrl:
          'https://res.cloudinary.com/dujxyjzqn/image/upload/v1747473121/g-1_byumzt.png',
      },
      {
        id: 2,
        certificateLink:
          'https://certificates.ccbp.in/academy/programming-foundations-with-python?id=JBVRHGEEZQ',
        imageUrl:
          'https://res.cloudinary.com/dujxyjzqn/image/upload/v1747473118/g-2_eq5rwc.png',
      },
      {
        id: 3,
        certificateLink:
          'https://certificates.ccbp.in/academy/introduction-to-databases?id=AHSHGLHIMC',
        imageUrl:
          'https://res.cloudinary.com/dujxyjzqn/image/upload/v1747473125/g-3_y8uers.png',
      },
      {
        id: 4,
        certificateLink:
          'https://certificates.ccbp.in/academy/react-js?id=SKFYLYKCFF',
        imageUrl:
          'https://res.cloudinary.com/dujxyjzqn/image/upload/v1747475889/w-1_diup1s.jpg',
      },
      {
        id: 5,
        certificateLink:
          'https://certificates.ccbp.in/academy/responsive-web-design-using-flexbox?id=FHZAQMEZAN',
        imageUrl:
          'https://res.cloudinary.com/dujxyjzqn/image/upload/v1747473137/g-4_uwrpx7.png',
      },
      {
        id: 6,
        certificateLink:
          'https://certificates.ccbp.in/academy/developer-foundations?id=ESCSURKBUA',
        imageUrl:
          'https://res.cloudinary.com/dujxyjzqn/image/upload/v1747473131/g-5_q5g7ow.png',
      },
      {
        id: 7,
        certificateLink:
          'https://certificates.ccbp.in/academy/javascript-essentials?id=PUDVLHOQOH',
        imageUrl:
          'https://res.cloudinary.com/dujxyjzqn/image/upload/v1747475889/w-2_haxdzd.jpg',
      },
      {
        id: 8,
        certificateLink:
          'https://certificates.ccbp.in/academy/node-js?id=CBRXQJBIZI',
        imageUrl:
          'https://res.cloudinary.com/dujxyjzqn/image/upload/v1747475889/w-3_qddirb.jpg',
      },
    ]

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <div
              className={`certificates-section ${
                isDarkMode ? 'dark-mode' : ''
              }`}
              id="Certificates"
            >
              <h2 className="certificates-heading">My Certificates</h2>
              <p className="certificates-para">
                Here are some of the certifications I’ve earned
              </p>
              <div className="certificates-list">
                {certificates.map(certificate => (
                  <div
                    key={certificate.id}
                    className={
                      isDarkMode ? 'certificate-card-dark' : 'certificate-card'
                    }
                  >
                    {certificate.imageUrl && (
                      <a
                        href={certificate.certificateLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={certificate.imageUrl}
                          alt="nxtwave"
                          className="certificate-image"
                        />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Certificates
