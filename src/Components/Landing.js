import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faDownload} from "@fortawesome/free-solid-svg-icons";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">{this.landingData.firstName}
            <span className="text-primary">{this.landingData.lastName}</span>
          </h1>
          <div className="subheading mb-5">{this.landingData.phoneNumber} ·
            <a target="_blank" href="mailto:name@email.com">{this.landingData.email}</a> ·
			<a target="_blank" href="mailto:name@email.com">{this.landingData.email2}</a>
          </div>
          <p className="lead mb-5">{this.landingData.bio}</p>
          <div className="social-icons">
		  <a target="_blank" href={this.landingData.Resume}>
              <FontAwesomeIcon icon={faDownload} />
            </a>
            <a target="_blank" href={this.landingData.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a target="_blank" href={this.landingData.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
			<a target="_blank" href={this.landingData.facebook}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
			<a target="_blank" href={this.landingData.instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
			<a target="_blank" href={this.landingData.twitter}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
