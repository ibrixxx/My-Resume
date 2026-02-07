import React, { useState, useEffect } from "react";

const TimelineItem = ({ data, isLast }) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  
  return (
    <div
      style={{
        display: "flex",
        gap: isMobile ? "1.5rem" : "3rem",
        position: "relative",
        paddingBottom: isLast ? "0" : "4rem",
      }}
    >
      {/* Timeline Line */}
      {!isLast && (
        <div
          style={{
            position: "absolute",
            left: isMobile ? "24px" : "31px",
            top: isMobile ? "50px" : "64px",
            bottom: "0",
            width: "2px",
            background: "#e0e0e0",
            zIndex: 0,
          }}
        />
      )}

      {/* Icon/Logo Column */}
      <div
        style={{
          flexShrink: 0,
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: isMobile ? "50px" : "64px",
            height: isMobile ? "50px" : "64px",
            borderRadius: "50%",
            background: "#fff",
            border: "4px solid #fff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {data.image ? (
            <img
              src={`images/${data.image}`}
              alt={data.school || data.company}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <div style={{ background: "#eee", width: "100%", height: "100%" }} />
          )}
        </div>
      </div>

      {/* Content Column */}
      <div style={{ flex: 1, paddingTop: "0.5rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-start",
            marginBottom: "0.5rem",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: isMobile ? "1.5rem" : "1.8rem",
                fontWeight: "700",
                color: "#1a1a1a",
                margin: "0 0 0.5rem 0",
              }}
            >
              {data.school || data.company}
            </h3>
            <div
              style={{
                fontSize: "1.2rem",
                color: "#4a4a4a",
                fontWeight: "600",
                marginBottom: "0.5rem",
              }}
            >
              {data.degree || data.title}
            </div>
          </div>
          
          <div
            style={{
              fontSize: "1rem",
              color: "#666",
              background: "#f5f5f5",
              padding: "0.4rem 1rem",
              borderRadius: "20px",
              whiteSpace: "nowrap",
              marginTop: isMobile ? "0.5rem" : "0",
              alignSelf: isMobile ? "flex-start" : "flex-start",
            }}
          >
            {data.graduated || data.years}
          </div>
        </div>

        <p
          style={{
            color: "#555",
            lineHeight: "1.8",
            fontSize: "1.2rem",
            margin: 0,
            maxWidth: "800px",
          }}
        >
          {data.description}
        </p>
      </div>
    </div>
  );
};

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

  if (!data) return null;

  const { education, work } = data;

  return (
    <section
      id="resume"
      style={{
        padding: isMobile ? "6rem 1.5rem" : "8rem 4rem",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Work Experience */}
        <div style={{ marginBottom: "6rem" }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            marginBottom: "3rem",
            borderBottom: "2px solid #f0f0f0",
            paddingBottom: "1rem"
          }}>
            <h2 style={{ 
              fontSize: isMobile ? "2.2rem" : "2.8rem", 
              fontWeight: "800",
              color: "#1a1a1a",
              margin: 0,
              textTransform: "capitalize"
            }}>
              Work Experience
            </h2>
          </div>

          <div>
            {work && work.map((job, index) => (
              <TimelineItem 
                key={job.company} 
                data={job} 
                isLast={index === work.length - 1} 
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
           <div style={{ 
            display: "flex", 
            alignItems: "center", 
            marginBottom: "3rem",
            borderBottom: "2px solid #f0f0f0",
            paddingBottom: "1rem"
          }}>
            <h2 style={{ 
              fontSize: isMobile ? "2.2rem" : "2.8rem", 
              fontWeight: "800",
              color: "#1a1a1a",
              margin: 0,
              textTransform: "capitalize"
            }}>
              Education
            </h2>
          </div>

          <div>
            {education && education.map((school, index) => (
              <TimelineItem 
                key={school.school} 
                data={school} 
                isLast={index === education.length - 1} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;
