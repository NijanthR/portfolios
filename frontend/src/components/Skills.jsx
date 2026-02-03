import React, { useEffect, useState } from "react";
import "./Skills.css";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

const slugs = [
  "javascript",
  "typescript",
  "python",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "postgresql",
  "firebase",
  "git",
  "github",
  "figma",
  "tailwindcss",
  "amazonaws",
  "docker",
  "tensorflow",
  "pytorch",
  "visualstudiocode",
  "windows",
  "mongodb",
  "mysql",
  "linux",
];

const Skills = () => {
  const [icons, setIcons] = useState(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(({ simpleIcons }) => {
      const loadedIcons = Object.values(simpleIcons).map((icon) =>
        renderSimpleIcon({
          icon,
          size: 32,
          aProps: {
            onClick: (e) => e.preventDefault(),
            style: {
              cursor: "pointer",
              margin: "6px",
            },
          },
        })
      );
      setIcons(loadedIcons);
    });
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "JavaScript"],
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "HTML", "CSS"],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Prompt Engineering",
        "TensorFlow",
        "PyTorch",
      ],
    },
  ];

  const cloudOptions = {
    zoom: 1,
    initial: [0.1, -0.1],
    wheelZoom: false,
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="numbered-heading">02. Technical Skills</h2>

      <div className="skills-content-wrapper">
        {/* LEFT */}
        <div className="skills-text-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="category-grid">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="skills-sphere-container">
          {icons ? (
            <Cloud options={cloudOptions}>{icons}</Cloud>
          ) : (
            <p>Loading Icons...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
