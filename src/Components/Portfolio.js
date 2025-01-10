import React from "react";

const TechBadge = ({ tech }) => (
  <span
    style={{
      background: "#f0f0f0",
      color: "#333",
      padding: "0.05rem 1.25rem",
      borderRadius: "20px",
      fontSize: "1.4rem",
      fontWeight: 600,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s ease",
    }}
  >
    {tech}
  </span>
);

const Portfolio = ({ data }) => {
  if (!data?.projects) return null;

  return (
    <section
      id="portfolio"
      style={{
        width: "100%",
        boxSizing: "border-box",
        maxWidth: "100vw",
        overflow: "hidden",
        padding: window.matchMedia("(max-width: 768px)").matches
          ? "8rem 2rem"
          : "8rem 8rem",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          fontSize: "2.5rem",
          fontWeight: 700,
          color: "#333",
          textTransform: "uppercase",
          letterSpacing: "1px",
          "@media (max-width: 768px)": {
            fontSize: "2.5rem",
          },
        }}
      >
        My Recent Projects
      </h1>
      <div className="portfolio-grid">
        {data.projects.map((project) => (
          <article
            key={project.title}
            className="project-card"
            style={{
              background: "white",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <div className="project-images">
              <img
                className="project-image primary"
                src={`images/portfolio/${project.image}`}
                alt={project.title}
              />
              <img
                className="project-image secondary"
                src={`images/portfolio/${
                  project.secondaryImage || project.image
                }`}
                alt={`${project.title} secondary view`}
              />
            </div>

            <div
              style={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <h3
                style={{
                  margin: "0 0 1rem",
                  fontSize: "1.8rem",
                  color: "#333",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  margin: "0 0 1.5rem",
                  color: "#666",
                  lineHeight: 1.5,
                  flex: 1,
                }}
              >
                {project.description ||
                  "A fascinating project showcasing modern development techniques."}
              </p>

              <div style={{ marginTop: "auto" }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  {(project.technologies || ["React", "JavaScript"]).map(
                    (tech) => (
                      <TechBadge key={tech} tech={tech} />
                    )
                  )}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.05rem 1rem",
                    background: "#f8f9fa",
                    borderRadius: "6px",
                    color: "black",
                    textDecoration: "none",
                    fontSize: "1rem",
                    fontWeight: "normal",
                    transition: "all 0.3s ease",
                    border: "1px solid #eee",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    "@media (max-width: 768px)": {
                      fontSize: "0.75rem",
                    },
                  }}
                >
                  <i
                    className="fa fa-link"
                    style={{ fontSize: "1rem", color: "dodgerblue" }}
                  />
                  {project.url.replace(/^https?:\/\//, "")}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
