import React, { Component } from 'react';


class Certifications extends Component {
  constructor(props) {
    super(props);

    this.certifications = props.certifications;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="certifications">
        <div className="w-100">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
          {
            this.certifications.map((data, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{data.name}</h3>
                  <p>{data.about}</p>
                </div>
              </div>
            ))
          }
          </ul>
        </div>
      </section>
    );
  }
}

export default Certifications;
