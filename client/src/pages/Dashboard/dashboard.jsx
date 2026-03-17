import React from "react";
import navbar from "../../components/Navbar/navbar";
import studyCard from "../../components/StudyCard/studyCard";
import progressBar from "../../components/ProgressBar/progressBar";
import "./dashboard.css";

const dashboard = () => {
  const todayPlan = [
    { subject: "DSA", time: 2, status: "done" },
    { subject: "DBMS", time: 1.5, status: "pending" },
    { subject: "OS", time: 1, status: "missed" },
  ];

  return (
    <div className="dashboard">
      <navBar />

      <div className="dashboardContainer">
        
        {/* LEFT */}
        <div className="leftSection">
          <h2>Today's Plan</h2>

          {todayPlan.map((item, index) => (
            <studyCard key={index} data={item} />
          ))}
        </div>

        {/* RIGHT */}
        <div className="rightSection">
          <h2>Progress</h2>
          <progressBar progress={65} />

          <div className="weakArea">
            <h3>Weak Area ⚠️</h3>
            <p>DSA - Needs Improvement</p>
          </div>

          <div className="suggestions">
            <h3>AI Suggestion 🤖</h3>
            <p>Focus more on DSA tomorrow</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default dashboard;