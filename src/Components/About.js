import React, { useState } from "react";
import ResumeModal from "./ResumeModal";

const About = ({ data }) => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    // var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    // var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Yogesh's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {/* {street} */}
                  {/* <br /> */}
                  {city}, {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="button"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <i className="fa fa-download"></i>Download Resume
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        resumePath="/resume.pdf"
      />
    </section>
  );
};

export default About;
