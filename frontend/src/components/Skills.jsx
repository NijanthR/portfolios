import React, { useEffect, useState, useRef } from "react";
import "./Skills.css";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

const slugs = [
  // AI, Machine Learning & Data Science
  "python",
  "tensorflow",
  "pytorch",
  "keras",
  "huggingface",
  "scikitlearn",
  "pandas",
  "numpy",
  "scipy",
  "opencv",
  "jupyter",
  "anaconda",
  "openai",
  "anthropic",
  "ollama",
  "langchain",
  "pydantic",
  "spacy",
  "plotly",
  "weightsandbiases",
  "ray",
  "streamlit",
  "fastapi",
  "flask",
  "kaggle",

  // Languages & Core
  "javascript",
  "typescript",
  "html5",
  "css3",
  "java",
  "cplusplus",

  // Databases & Storage
  "mysql",
  "postgresql",
  "mongodb",
  "sqlite",
  "redis",
  "supabase",
  "firebase",
  "prisma",

  // Web Frameworks & Libraries
  "react",
  "django",
  "nodedotjs",
  "nextdotjs",
  "tailwindcss",
  "vite",
  "graphql",

  // Cloud, DevOps & Tools
  "amazonaws",
  "googlecloud",
  "vercel",
  "docker",
  "kubernetes",
  "terraform",
  "git",
  "github",
  "linux",
  "ubuntu",
  "visualstudiocode",
  "postman",
  "npm",
  "apachespark",
  "apachekafka",
];

const skillCategories = [
  {
    title: "AI/ML",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Transformers", "Generative AI", "Chroma DB", "AI Agents", "LLMs"],
  },
  {
    title: "Languages",
    skills: ["Python", "MySQL", "Java"],
  },
  {
    title: "Frameworks",
    skills: ["Django", "React", "LangChain", "CrewAI"],
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS", "Git"],
  },
];

const Skills = () => {
  const [icons, setIcons] = useState(null);

  // Real pixel size of the sphere container — drives cloudOptions
  const [containerSize, setContainerSize] = useState({ w: 500, h: 500 });
  const containerRef = useRef(null);

  // ── 1. Measure the container after the DOM is painted ──────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width > 0 && height > 0) {
        setContainerSize({ w: Math.floor(width), h: Math.floor(height) });
      }
    };

    // Fire once immediately, then watch for layout changes
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // ── 2. Fetch icons once on mount ───────────────────────────────────────
  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(({ simpleIcons }) => {
      const loadedIcons = Object.values(simpleIcons).map((icon) =>
        renderSimpleIcon({
          icon,
          size: 36,
          // bgHex must match --bg-color so the library picks brand colours
          bgHex: "#050d1a",
          minContrastRatio: 1.5,
          fallbackHex: "#64ffda",
          aProps: {
            onClick: (e) => e.preventDefault(),
            style: { cursor: "pointer", margin: "6px" },
          },
        })
      );
      setIcons(loadedIcons);
    });
  }, []);

  // ── 3. Build options from measured dimensions ──────────────────────────
  // Passing explicit width/height is the key fix for production:
  // without it, TagCloud reads the DOM at mount time (often 0×0)
  // and renders a squashed/invisible sphere.
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
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — icon sphere; ref lets us measure real pixel size */}
        <div className="skills-sphere-container" ref={containerRef}>
          {icons ? (
            // key forces Cloud to remount whenever dimensions change
            <Cloud key={`${containerSize.w}x${containerSize.h}`} options={cloudOptions}>
              {icons}
            </Cloud>
          ) : (
            <div className="skills-loading">
              <div className="skills-spinner"></div>
              <p>Loading icons…</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
