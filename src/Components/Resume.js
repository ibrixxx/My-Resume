import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var education = data.education.map(function (education) {
      return (
        <div key={education.school} style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
            {education.image && (
              <img
                src={`images/${education.image}`}
                alt={education.school}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  objectFit: "cover",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  border: "2px solid #f0f0f0"
                }}
              />
            )}
            <div>
              <h3 style={{ margin: "0", fontSize: "2.6rem", color: "#2c3e50", fontWeight: "700", lineHeight: "1.2" }}>
                {education.school}
              </h3>
              <p className="info" style={{ margin: "0.5rem 0", color: "#444", fontSize: "1.6rem", fontWeight: "500" }}>
                {education.degree} <span>&bull;</span>
                <em className="date">{education.graduated}</em>
              </p>
            </div>
          </div>
          <p style={{ margin: "0.8rem 0 0 0", color: "#555", lineHeight: "1.6", fontSize: "1.5rem", fontWeight: "400" }}>
            {education.description}
          </p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company} style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
            {work.image && (
              <img
                src={`images/${work.image}`}
                alt={work.company}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  objectFit: "cover",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  border: "2px solid #f0f0f0"
                }}
              />
            )}
            <div>
              <h3 style={{ margin: "0", fontSize: "2.6rem", color: "#2c3e50", fontWeight: "700", lineHeight: "1.2" }}>
                {work.company}
              </h3>
              <p className="info" style={{ margin: "0.5rem 0", color: "#444", fontSize: "1.6rem", fontWeight: "500" }}>
                {work.title}
                <span>&bull;</span> <em className="date">{work.years}</em>
              </p>
            </div>
          </div>
          <p style={{ margin: "0.8rem 0 0 0", color: "#555", lineHeight: "1.6", fontSize: "1.5rem", fontWeight: "400" }}>
            {work.description}
          </p>
        </div>
      );
    });
  }

  return (
    <section id="resume" style={{ padding: "6rem 0", background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}>
      <div className="row education" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div className="three columns header-col">
          <h1 style={{ 
            fontSize: "3rem", 
            fontWeight: "800", 
            color: "#2c3e50", 
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "3rem",
            textAlign: "left"
          }}>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", marginTop: "4rem" }}>
        <div className="three columns header-col">
          <h1 style={{ 
            fontSize: "3rem", 
            fontWeight: "800", 
            color: "#2c3e50", 
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "3rem",
            textAlign: "left"
          }}>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>
    </section>
  );
};

export default Resume;
