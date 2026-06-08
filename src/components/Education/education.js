import React from "react";
import "./education.css";

function Education() {
  const education = [
    {
      title: "Bachelor of Engineering",
      subtitle: "Electronics and Communication",
      description: "Stong foundation in engineering",
    },
    {
      title: "Level 4 Artificial Intelligence",
      subtitle: "Artificial Intelligence",
      description:
        "Studied AI, gained practical experience with AI tools and techniques including machine learning.",
    },
    {
      title: "Level 5 Software Development",
      subtitle: "In Progress",
      description:
        "Currently pursuing advanced software development skills and engaging in practical projects to enhance coding proficiency.",
    },
  ];
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="card-container">
        {education.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>
            <h4>{item.subtitle}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
