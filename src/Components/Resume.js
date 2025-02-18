import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Resume = ({ data }) => {
  const {
    skillmessage = "",
    work = [],
    projects = [],
    skills = [],
    education = [],
    achievements = [],
    strengths = [],
    interests = [],
  } = data || {};

  const workItems = work.map((workItem) => (
    <div className="work" key={workItem.company}>
      <div className={workItem.logo ? "logoHeading" : ""}>
        {workItem.logo && (
          <img
            src={workItem.logo}
            alt={`${workItem.company} logo`}
            className="company-logo"
          />
        )}
        <h3 className="coy">{workItem.company}</h3>
      </div>
      <p className="info">
        {workItem.title}
        <span>&bull;</span> <em className="date">{workItem.years}</em>
      </p>
      <p>{workItem.description}</p>
    </div>
  ));

  const projectItems = projects.map((project) => (
    <div className="work" key={project.name}>
      <h3 className="coy">{project.name}</h3>
      {(project.company || project.link) && (
        <p className="info coy">
          {project.company && <span>{project.company}</span>}
          {project.company && project.link && <span> | </span>}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          )}
        </p>
      )}
      <p>{project.description}</p>
    </div>
  ));

  const skillItems = skills.map((skill) => (
    <div className="skillsList" key={skill.name}>
      <li>
        {/* <span style={{ width: skill.level }} className={className}></span> */}
        <em>{skill.name}</em>
      </li>
    </div>
  ));

  const educationItems = education.map((edu) => (
    <div className="edu" key={edu.school}>
      <h3 className="edu">{edu.school}</h3>
      <h4 className="edu">{edu.university || edu.board}</h4>
      <p className="info">
        {edu.degree} <span>&bull;</span> {edu.major}
        {/* <span>&bull;</span> */}
        {/* <em className="date">{edu.graduated}</em> */}
      </p>
      <p className="edu-description">{edu.description}</p>
    </div>
  ));

  const achievementItems = achievements.map((achievement) => (
    <div className="achievements" key={achievement.title}>
      <h3 className="achievements">{achievement.title}</h3>
      <p className=" achievements achievementsLocation">
        {achievement.location && <span>{achievement.location}</span>}
      </p>
      <p className="achievements-description">{achievement.description}</p>
    </div>
  ));

  const strengthItems = strengths.map((strength, index) => (
    <li key={index}>
      <i className={strength.icon}></i> <em>{strength.name}</em>
    </li>
  ));

  const interestItems = interests.map((interest, index) => (
    <li key={index}>
      <i className={interest.icon}></i> <em>{interest.name}</em>
    </li>
  ));

  return (
    <section id="resume">
      <div className="row work">
        <div className="three columns header-col">
          <h1 className="workHero">
            <span>Work</span>
          </h1>
        </div>
        <div className="nine columns main-col">{workItems}</div>
      </div>

      {/* Projects under are same as work above */}
      <div className="row work">
        <div className="three columns header-col">
          <h1 className="workHero">
            <span>Projects</span>
          </h1>
        </div>
        <div className="nine columns main-col">{projectItems}</div>
      </div>

      <div
        style={{
          marginBottom: "48px",
          paddingBottom: "24px",
          borderBottom: "1px solid #e8e8e8",
        }}
        className="row skill"
      >
        <div className="three columns header-col">
          <h1 className="skillsHero">
            <span>Skills And Tools</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skillItems}</ul>
          </div>
        </div>
      </div>

      <div className="row education">
        <div className="three columns header-col">
          <h1 className="eduHero">
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{educationItems}</div>
          </div>
        </div>
      </div>

      <div className="row education">
        <div className="three columns header-col">
          <h1 className=" achievementsHero">
            <span>Achievements</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{achievementItems}</div>
          </div>
        </div>
      </div>

      <div className="row strengths-interests">
        <div className="three columns header-col">
          <h1 className="strengthsHero">
            <span className="strengthsInterests">My Edge</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="strengths">
            <h3>Strengths</h3>
            <ul>{strengthItems}</ul>
          </div>
          <div className="interests">
            <h3>Interests</h3>
            <ul>{interestItems}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
