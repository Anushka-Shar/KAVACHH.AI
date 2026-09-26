import React, { useState } from "react";

export default function ReportDisaster() {
       const [type, setType] = useState("Flood");
       const [location, setLocation] = useState("");
       const [description, setDescription] = useState("");
       const [image, setImage] = useState(null);
       const [video, setVideo] = useState(null);

       const handleSubmit = (e) => {
              e.preventDefault();
              alert(`Disaster Reported: ${type} at ${location}`);
       };

       return (
              <div className="dashboard-container citizen-box">
                     <h1>🚨 Report Disaster</h1>
                     <form onSubmit={handleSubmit} className="panel">
                            {/* Disaster Type */}
                            <label>Disaster Type</label>
                            <select value={type} onChange={(e) => setType(e.target.value)}>
                                   <option value="Flood">Flood</option>
                                   <option value="Earthquake">Earthquake</option>
                                   <option value="Fire">Fire</option>
                                   <option value="Landslide">Landslide</option>
                            </select>

                            {/* Upload Image */}
                            <label>Upload Image</label>
                            <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />

                            {/* Upload Video */}
                            <label>Upload Video (optional)</label>
                            <input type="file" accept="video/*" onChange={(e) => setVideo(e.target.files[0])} />

                            {/* Description */}
                            <label>Description</label>
                            <textarea
                                   placeholder="Enter details about the disaster..."
                                   value={description}
                                   onChange={(e) => setDescription(e.target.value)}
                            />

                            {/* Location */}
                            <label>Current Location / GPS</label>
                            <input
                                   type="text"
                                   placeholder="Enter location or allow GPS"
                                   value={location}
                                   onChange={(e) => setLocation(e.target.value)}
                            />

                            {/* Submit */}
                            <button type="submit" className="button">Submit Report</button>
                     </form>
              </div>
       );
}

