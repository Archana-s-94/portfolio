import React from "react";
import "./experiences.css";

function Experiences() {
  const experiences = [
    {
      title: "Junior Full-Stack Developer",
      company: "Zhahi Info Tech",
      duration: "November 2022 - July 2024",
      description:
        "Developed and maintained e-commerce web applications and CRM(Customer Relationship Management) using React.js, Node.js, Express.js, and MongoDB.",
      points: [
        "Built responsive user interfaces and reusable React components.",
        "Implemented secure user authentication and authorization using JWT.",
        "Created RESTful APIs for product management, user accounts, and order processing.",
        "Created dashboards and reports to help track customer interactions and sales activities.",
        "Optimized database queries and improved application performance.",
        "Collaborated with team members to fix bugs, improve performance,deliver new features and ensure data accuracy.",
      ],
    },
    {
      title: "Junior Software Tester",
      company: "Digital to Design",
      duration: "June 2020 - May 2022",
      description:
        "Performed manual and automation testing for Hotel Management and E-commerce applications, ensuring software quality, functionality, and reliability.",
      points: [
        "Designed and executed test cases for web applications and business workflows.",
        "Developed and maintained automated test scripts using Selenium and TestNG.",
        "Tested hotel booking, reservation, payment, and customer management modules.",
        "Validated e-commerce features including registration, shopping cart, checkout, and order management.",
        "Performed API, regression, cross-browser, and functional testing.",
        "Collaborated with developers to identify, track, and resolve software defects.",
      ],
    },
  ];
  return (
    <section id="experiences">
      <h2>Experiences</h2>
      <div className="experience-container">
        {experiences.map((item, index) => (
          <div className="experience-card" key={index}>
            <h3>{item.title}</h3>
            <br />
            <h4>{item.company}</h4>
            <br />
            <h1>{item.duration}</h1>
            <br />
            <p>{item.description}</p>
            <br />

            <ul>
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
