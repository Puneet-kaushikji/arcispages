import React, { useState } from "react";
import "./Rename.css";

const RenameModal = ({ isOpen, onClose }) => {
  const [deviceName, setDeviceName] = useState("");

  if (!isOpen) return null;

  const handleRename = (e) => {
    e.preventDefault();
    // Logic to rename the device (e.g., API call)
    console.log(`Device renamed to: ${deviceName}`);
    onClose(); // Close modal after renaming
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Rename Device</h2>
        <form onSubmit={handleRename}>
          <label  htmlFor="deviceName">Enter camera new name:</label>
          <input
            type="text"
            id="deviceName"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            required 
            placeholder="XYZ"
          />
          <div className="line"></div>
          <div className="button-group">
            <button type="button" className="cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="apply">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Rename = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button className="filter-button" onClick={() => setIsModalOpen(true)}>
        Rename Device
      </button>
      <RenameModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Rename;
