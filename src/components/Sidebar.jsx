import React from "react";

const Sidebar = ({ setActiveSection }) => {
    return (
        <div className="sidebar">
            <h3>Menu</h3>
            <button onClick={() => setActiveSection("partners")}>Partnyorlar</button>
            <button onClick={() => setActiveSection("buyers")}>Alıcılar</button>
        </div>
    );
};

export default Sidebar;