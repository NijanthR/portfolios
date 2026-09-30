import React, { useEffect, useState, useRef } from "react";
import "./Skills.css";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

const slugs = [
  // AI, Machine Learning & Data Science
  "python", "tensorflow", "pytorch", "keras", "huggingface",
  "scikitlearn", "pandas", "numpy", "scipy", "opencv",
  "jupyter", "anaconda", "openai", "anthropic", "ollama",
  "langchain", "pydantic", "spacy", "plotly", "weightsandbiases",
  "ray", "streamlit", "fastapi", "flask", "kaggle",
  // Languages & Core
  "javascript", "typescript", "html5", "css3", "java", "cplusplus",
  // Databases & Storage
  "mysql", "postgresql", "mongodb", "sqlite", "redis",
  "supabase", "firebase", "prisma",
  // Web Frameworks & Libraries
  "react", "django", "nodedotjs", "nextdotjs", "tailwindcss", "vite", "graphql",
  // Cloud, DevOps & Tools
  "amazonaws", "googlecloud", "vercel", "docker", "kubernetes",
  "terraform", "git", "github", "linux", "ubuntu",
  "visualstudiocode", "postman", "npm", "apachespark", "apachekafka",
];

const skillCategories = [
  {
    title: "AI/ML",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Transformers", "Generative AI", "Chroma DB", "AI Agents", "LLMs"],
  },
  { title: "Languages",  skills: ["Python", "MySQL", "Java"] },
  { title: "Frameworks", skills: ["Django", "React", "LangChain", "CrewAI"] },
  { title: "Cloud & Tools", skills: ["AWS", "Git"] },
];

// ── Immediate placeholder tags shown before icons are fetched ────────────
// Renders right away so the globe spins the moment the page opens.
const placeholderTags = slugs.map((slug) => (
  <a
    key={slug}
    href="#"
    onClick={(e) => e.preventDefault()}
    style={{ cursor: "default", fontFamily: "monospace", fontSize: "13px" }}
  >
    {slug}
  </a>
));

const Skills = () => {
  // Start with text tags so globe is visible immediately on load
  const [cloudContent, setCloudContent] = useState(placeholderTags);
  const [containerSize, setContainerSize] = useState({ w: 500, h: 500 });
  const containerRef = useRef(null);

  // ── Measure container after paint so canvas gets correct pixel size ────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width > 0 && height > 0)
        setContainerSize({ w: Math.floor(width), h: Math.floor(height) });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // ── Fetch real colored icons and replace placeholders ─────────────────
  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(({ simpleIcons }) => {
      const loadedIcons = Object.values(simpleIcons).map((icon) =>
        renderSimpleIcon({
          icon,
          size: 36,
          // bgHex tells the library the background colour for contrast math
          bgHex: "#050d1a",
          // minContrastRatio: 1 means "always use the brand hex, no exceptions"
          // Higher values cause icons to fall back to fallbackHex, making them
          // all look the same colour in production.
          minContrastRatio: 1,
          aProps: {
            onClick: (e) => e.preventDefault(),
            style: { cursor: "pointer", margin: "6px" },
          },
        })
      );
      setCloudContent(loadedIcons);
    });
  }, []);

  // Dimensions come from the measured container — fixes the 0×0 production bug
  const cloudOptions = {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    width: containerSize.w,
    height: containerSize.h,
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="numbered-heading">02. Technical Skills</h2>

      <div className="skills-content-wrapper">
        {/* LEFT — skill pills */}
        <div className="skills-text-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="category-grid">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — globe; ref measures real pixel size for the canvas */}
        <div className="skills-sphere-container" ref={containerRef}>
          {/* key remounts Cloud when dimensions change (e.g. window resize) */}
          <Cloud
            key={`${containerSize.w}x${containerSize.h}`}
            options={cloudOptions}
          >
            {cloudContent}
          </Cloud>
        </div>
      </div>
    </section>
  );
};

export default Skills;
