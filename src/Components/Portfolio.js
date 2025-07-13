import React from "react";

const TechBadge = ({ tech }) => (
  <span
    style={{
      background: "linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%)",
      color: "#333",
      padding: "0.4rem 1rem",
      borderRadius: "25px",
      fontSize: "1.2rem",
      fontWeight: 600,
      boxShadow: "0 4px 15px rgba(232, 232, 232, 0.3)",
      transition: "all 0.3s ease",
      cursor: "default",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = "translateY(-2px)";
      e.target.style.boxShadow = "0 6px 20px rgba(232, 232, 232, 0.4)";
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = "translateY(0)";
      e.target.style.boxShadow = "0 4px 15px rgba(232, 232, 232, 0.3)";
    }}
  >
    {tech}
  </span>
);

const Portfolio = ({ data }) => {
  if (!data?.projects) return null;

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <>
      <style>
        {`
          .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            margin-top: 3rem;
            width: 100%;
          }

          .project-card {
            width: 100%;
            min-width: 0;
          }

          @media (max-width: 1200px) {
            .portfolio-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (max-width: 900px) {
            .portfolio-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            .portfolio-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
          }

          .project-card {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }

          .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }

          .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #e8e8e8 0%, #d0d0d0 100%);
            z-index: 1;
          }

          .project-images {
            position: relative;
            height: 220px;
            overflow: hidden;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          }

          .project-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.4s ease;
            position: absolute;
            top: 0;
            left: 0;
          }

          .project-image.primary {
            opacity: 1;
            z-index: 2;
          }

          .project-image.secondary {
            opacity: 0;
            z-index: 1;
            transform: scale(1.1);
          }

          .project-card:hover .project-image.primary {
            opacity: 0;
            transform: scale(0.95);
          }

          .project-card:hover .project-image.secondary {
            opacity: 1;
            transform: scale(1);
          }

          .project-link {
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .project-link:hover {
            background: linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%) !important;
            color: #333 !important;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(232, 232, 232, 0.3);
          }

          .project-link:hover .fa-link {
            color: #333 !important;
          }

          .section-title {
            position: relative;
            display: block;
            text-align: center;
            width: 100%;
          }

          .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, #e8e8e8 0%, #d0d0d0 100%);
            border-radius: 2px;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .project-card {
            animation: fadeInUp 0.6s ease forwards;
          }

          .project-card:nth-child(1) { animation-delay: 0.1s; }
          .project-card:nth-child(2) { animation-delay: 0.2s; }
          .project-card:nth-child(3) { animation-delay: 0.3s; }
          .project-card:nth-child(4) { animation-delay: 0.4s; }
          .project-card:nth-child(5) { animation-delay: 0.5s; }
          .project-card:nth-child(6) { animation-delay: 0.6s; }
          .project-card:nth-child(7) { animation-delay: 0.7s; }
          .project-card:nth-child(8) { animation-delay: 0.8s; }
        `}
      </style>
      <section
        id="portfolio"
        style={{
          width: "100%",
          boxSizing: "border-box",
          maxWidth: "100vw",
          overflow: "hidden",
          padding: isMobile ? "6rem 1.5rem" : "8rem 6rem",
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"50\" cy=\"50\" r=\"0.5\" fill=\"%23000\" opacity=\"0.02\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>')",
            pointerEvents: "none",
          }}
        />
        
        <div style={{ position: "relative", zIndex: 1 }}>
                    <h1
            className="section-title"
            style={{
              marginBottom: "4rem",
              fontSize: isMobile ? "2.2rem" : "3rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#a0a0a0",
              textShadow: "0 2px 4px rgba(160, 160, 160, 0.1)",
            }}
          >
            Featured Projects
          </h1>
          
          <div className="portfolio-grid">
            {data.projects.map((project, index) => (
              <article
                key={project.title}
                className="project-card"
                style={{
                  background: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                  opacity: 0,
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
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                  }}
                >
                  <h3
                    style={{
                      margin: "0 0 1rem",
                      fontSize: "2.2rem",
                      color: "#2c3e50",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                      lineHeight: 1.2,
                    }}
                  >
                    {project.title}
                  </h3>
                  
                  <p
                    style={{
                      margin: "0 0 1.5rem",
                      color: "#5a6c7d",
                      lineHeight: 1.6,
                      flex: 1,
                      fontSize: "1.3rem",
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
                        gap: "0.6rem",
                        marginBottom: "1.5rem",
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
                      className="project-link"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.6rem",
                        padding: "0.8rem 1.5rem",
                        background: "#f8f9fa",
                        borderRadius: "10px",
                        color: "#2c3e50",
                        textDecoration: "none",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        border: "2px solid #e9ecef",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      <i
                        className="fa fa-link"
                        style={{ 
                          fontSize: "1rem", 
                          color: "#d0d0d0",
                          transition: "color 0.3s ease"
                        }}
                      />
                      View Project
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
