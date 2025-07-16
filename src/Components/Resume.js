import React, { useState, useEffect } from "react";

const Resume = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data) {
    return null;
  }

  const { education, work } = data;

  return (
    <section id="resume" style={{ padding: "6rem 0", background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}>
      <div className="row education" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div className="three columns header-col">
          <h1 style={{
            fontSize: isMobile ? "2rem" : "2.2rem",
            fontWeight: "700",
            color: "#2c3e50",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            marginBottom: "2.5rem",
            textAlign: isMobile ? "center" : "left",
          }}>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {education && education.map((item) => (
                <div key={item.school} style={{ marginBottom: isMobile ? "2.5rem" : "4rem", textAlign: isMobile ? "center" : "left" }}>
                  <div style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "0.5rem",
                    justifyContent: isMobile ? "center" : "flex-start",
                  }}>
                    {item.image && (
                      <img
                        src={`images/${item.image}`}
                        alt={item.school}
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "12px",
                          objectFit: "cover",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                          border: "2px solid #f0f0f0",
                          marginBottom: isMobile ? "1rem" : 0,
                        }}
                      />
                    )}
                    <div style={{ textAlign: isMobile ? "center" : "left", width: isMobile ? '100%' : 'auto' }}>
                      <h3 style={{
                        margin: 0,
                        fontSize: isMobile ? "1.8rem" : "2.2rem",
                        color: "#2c3e50",
                        fontWeight: "700",
                        lineHeight: 1.2,
                      }}>
                        {item.school}
                      </h3>
                      <p className="info" style={{
                        margin: "0.5rem 0",
                        color: "#444",
                        fontSize: isMobile ? "1.2rem" : "1.4rem",
                        fontWeight: "500",
                      }}>
                        {item.degree} <span>&bull;</span>
                        <em className="date">{item.graduated}</em>
                      </p>
                    </div>
                  </div>
                  <p style={{
                    margin: "0.8rem 0 0 0",
                    color: "#555",
                    lineHeight: 1.6,
                    fontSize: isMobile ? "1.1rem" : "1.3rem",
                    fontWeight: "400",
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row work" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", marginTop: "4rem" }}>
        <div className="three columns header-col">
          <h1 style={{
            fontSize: isMobile ? "2rem" : "2.2rem",
            fontWeight: "700",
            color: "#2c3e50",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            marginBottom: "2.5rem",
            textAlign: isMobile ? "center" : "left",
          }}>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {work && work.map((job) => (
            <div key={job.company} style={{ marginBottom: isMobile ? "2.5rem" : "4rem", textAlign: isMobile ? "center" : "left" }}>
              <div style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "0.5rem",
                justifyContent: isMobile ? "center" : "flex-start",
              }}>
                {job.image && (
                  <img
                    src={`images/${job.image}`}
                    alt={job.company}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "12px",
                      objectFit: "cover",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      border: "2px solid #f0f0f0",
                      marginBottom: isMobile ? "1rem" : 0,
                    }}
                  />
                )}
                <div style={{ textAlign: isMobile ? "center" : "left", width: isMobile ? '100%' : 'auto' }}>
                  <h3 style={{
                    margin: 0,
                    fontSize: isMobile ? "1.8rem" : "2.2rem",
                    color: "#2c3e50",
                    fontWeight: "700",
                    lineHeight: 1.2,
                  }}>
                    {job.company}
                  </h3>
                  <p className="info" style={{
                    margin: "0.5rem 0",
                    color: "#444",
                    fontSize: isMobile ? "1.2rem" : "1.4rem",
                    fontWeight: "500",
                  }}>
                    {job.title}
                    <span>&bull;</span> <em className="date">{job.years}</em>
                  </p>
                </div>
              </div>
              <p style={{
                margin: "0.8rem 0 0 0",
                color: "#555",
                lineHeight: 1.6,
                fontSize: isMobile ? "1.1rem" : "1.3rem",
                fontWeight: "400",
              }}>
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
