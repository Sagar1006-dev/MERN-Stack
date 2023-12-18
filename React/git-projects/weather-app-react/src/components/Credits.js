import React from 'react'
import "../styles/Credits.css"
const Credits = () => {
  return (
    <div>
         <div className="Credits">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6 className="credits-section">
                {" "}
                Coded by Sagar Muneshwar,{" "}
                <a
                  className="link-github"
                  href="https://github.com/Sagar1006-dev/MERN-Stack/tree/main/React/git-projects/weather-app-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  open sourced on Github.
                </a>
                Hosted on Netlify
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Credits