import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function SocialMedias() {
  return (
    <div className="row">
      <div className="col social">
        <ul className="social-icons list-inline">
          <li className="list-inline-item">
            <div className="social-icon-container github">
              <a href="https://github.com/amverni">
                <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
              </a>
            </div>
          </li>
          <li className="list-inline-item">
            <div className="social-icon-container linkedin">
              <a href="https://www.linkedin.com/in/andrew-vernier/">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="white" />
              </a>
            </div>
          </li>
          <li className="list-inline-item">
            <div className="social-icon-container facebook">
              <a href="https://www.facebook.com/profile.php?id=100009483842716">
                <FontAwesomeIcon icon={faFacebookF} size="2x" color="white" />
              </a>
            </div>
          </li>
          <li className="list-inline-item">
            <div className="social-icon-container twitter">
              <a href="https://twitter.com/amvernier">
                <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
              </a>
            </div>
          </li>
          <li className="list-inline-item">
            <div className="social-icon-container instagram">
              <a href="https://www.instagram.com/avernier14/">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
