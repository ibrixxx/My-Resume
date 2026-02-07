import React from "react";

const TechBadge = ({ tech }) => (
  <span
    style={{
      background: "rgba(0, 0, 0, 0.05)",
      color: "#444",
      padding: "0.5rem 1rem",
      borderRadius: "50px",
      fontSize: "0.9rem",
      fontWeight: 600,
      transition: "all 0.3s ease",
      cursor: "default",
      border: "1px solid rgba(0, 0, 0, 0.05)",
      display: "inline-block",
    }}
    onMouseEnter={(e) => {
      e.target.style.background = "rgba(0, 0, 0, 0.1)";
      e.target.style.transform = "translateY(-1px)";
    }}
    onMouseLeave={(e) => {
      e.target.style.background = "rgba(0, 0, 0, 0.05)";
      e.target.style.transform = "translateY(0)";
    }}
  >
    {tech}
  </span>
);

const Portfolio = ({ data }) => {
  if (!data?.projects) return null;

  const [isMobile, setIsMobile] = React.useState(window.matchMedia("(max-width: 768px)").matches);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = (e) => setIsMobile(e.matches);
    
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <>
      <style>
        {`
          .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
            gap: 2.8rem;
            margin-top: 3.5rem;
            width: 100%;
            max-width: 1400px;
            margin-left: auto;
            margin-right: auto;
          }

          @media (max-width: 768px) {
            .portfolio-grid {
              grid-template-columns: 1fr;
              gap: 2.2rem;
            }
          }

          .project-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            position: relative;
            overflow: hidden;
            background: rgba(255, 255, 255, 0.85);
            border-radius: 24px;
            border: 1px solid rgba(255, 255, 255, 0.6);
            box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.25);
            height: 100%;
            display: flex;
            flex-direction: column;
            backdrop-filter: blur(8px);
          }

          .project-card::before {
            content: "";
            position: absolute;
            inset: 0;
            padding: 1px;
            border-radius: 24px;
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
            opacity: 0.6;
          }

          .project-card::after {
            content: "";
            position: absolute;
            top: -40%;
            right: -40%;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(0, 0, 0, 0.08), transparent 60%);
            opacity: 0;
            transition: opacity 0.4s ease;
          }

          .project-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 30px 60px -25px rgba(0, 0, 0, 0.35);
          }

          .project-card:hover::after {
            opacity: 1;
          }

          .project-images {
            position: relative;
            height: 250px;
            overflow: hidden;
            background: #f0f2f5;
          }

          .project-images::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.35));
            z-index: 3;
            pointer-events: none;
          }

          .project-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.6s ease;
            position: absolute;
            top: 0;
            left: 0;
          }

          .project-image.primary {
            opacity: 1;
            z-index: 2;
            transform: scale(1.02);
          }

          .project-image.secondary {
            opacity: 0;
            z-index: 1;
            transform: scale(1.12);
          }

          .project-card:hover .project-image.primary {
            opacity: 0;
            transform: scale(1.08);
          }

          .project-card:hover .project-image.secondary {
            opacity: 1;
            transform: scale(1.02);
          }

          .project-content {
            padding: 2.2rem;
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .project-title {
            margin: 0 0 0.6rem;
            font-size: 1.8rem;
            color: #111;
            font-weight: 800;
            line-height: 1.25;
          }

          .project-url {
            font-size: 1rem;
            color: #555;
            margin-bottom: 1.2rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            word-break: break-all;
          }

          .project-url i {
            font-size: 1rem;
            color: #111;
          }

          .project-description {
            margin: 0 0 1.6rem;
            color: #555;
            line-height: 1.7;
            font-size: 1.15rem;
            flex: 1;
          }

          .project-footer {
            margin-top: auto;
          }

          .project-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.9rem 1.5rem;
            background: linear-gradient(135deg, #111, #2d2d2d);
            border-radius: 14px;
            color: #fff !important;
            text-decoration: none;
            font-size: 1rem;
            font-weight: 700;
            transition: all 0.3s ease;
            width: 100%;
            box-sizing: border-box;
            box-shadow: 0 10px 25px -15px rgba(0, 0, 0, 0.6);
          }

          .project-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 16px 30px -20px rgba(0, 0, 0, 0.7);
          }

          .section-title {
            font-size: 0.9rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 4px;
            color: #8a8a8a;
            text-align: center;
            margin-bottom: 1rem;
            display: block;
          }

          .section-heading {
            font-size: 3.8rem;
            font-weight: 900;
            color: #111;
            text-align: center;
            margin-bottom: 4.5rem;
            line-height: 1.05;
            letter-spacing: -0.5px;
          }

          .portfolio-glow {
            position: absolute;
            width: 420px;
            height: 420px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0, 0, 0, 0.08), transparent 65%);
            filter: blur(40px);
            top: -120px;
            right: -120px;
            pointer-events: none;
            opacity: 0.6;
          }
          
          @media (max-width: 768px) {
            .section-heading {
              font-size: 2.6rem;
            }
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
            opacity: 0; 
          }

          ${data.projects.map((_, i) => `
            .project-card:nth-child(${i + 1}) { animation-delay: ${0.1 * (i + 1)}s; }
          `).join('')}
        `}
      </style>
      <section
        id="portfolio"
        style={{
          width: "100%",
          padding: isMobile ? "6rem 1.5rem" : "8rem 4rem",
          background: "radial-gradient(circle at top, #ffffff 0%, #f3f4f6 45%, #eceff3 100%)",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        <div className="portfolio-glow" />
        <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span className="section-title">Portfolio</span>
          <h2 className="section-heading">Featured Projects</h2>
          
          <div className="portfolio-grid">
            {data.projects.map((project) => (
              <article key={project.title} className="project-card">
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

                <div className="project-content">
                  <h3 className="project-title">
                    {project.title}
                  </h3>

                  {project.url && (
                    <div className="project-url">
                      <i className="fa fa-link" />
                      {project.url.replace(/(^\w+:|^)\/\//, "")}
                    </div>
                  )}
                  
                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-footer">
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {(project.technologies || []).map((tech) => (
                        <TechBadge key={tech} tech={tech} />
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View Project <i className="fa fa-arrow-right" style={{ fontSize: "0.9em" }} />
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
