import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "../AdminPage/adminpage.css";
import Partners from "../../components/Partners";
import Buyers from "../../components/Buyers";



const AdminPage = () => {
  const [activeSection, setActiveSection] = useState("partners");

  const renderContent = () => {
    switch (activeSection) {
      case "partners":
        return <Partners />;
      case "buyers":
        return <Buyers />;
      default:
        return <h2>Xoş gəlmisiniz</h2>;
    }
  };

  return (
    <div className="container">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default AdminPage;