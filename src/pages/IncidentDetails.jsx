import React from "react";

export default function IncidentDetails() {
       // Dummy incident data (static for frontend)
       const incident = {
              id: "INC-001",
              type: "Earthquake",
              location: "Hazratganj, Lucknow",
              severity: "High",
              description: "Severe tremors detected, multiple buildings collapsed.",
              victims: 5,
              aiVerification: "Confirmed",
              resources: ["Ambulance", "Rescue Kit"],
              volunteers: 10,
              hospital: "City Hospital",
              datetime: "27 Aug 2026, 2:30 PM",
              image: "https://via.placeholder.com/400x200", // placeholder image
              video: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // placeholder video
       };

       return (
              <div className="dashboard-container citizen-box">
                     <h1>📄 Incident Details</h1>
                     <div className="panel">
                            <p><strong>Incident ID:</strong> {incident.id}</p>
                            <p><strong>Disaster Type:</strong> {incident.type}</p>
                            <p><strong>Location:</strong> {incident.location}</p>
                            <p><strong>Severity:</strong> {incident.severity}</p>
                            <p><strong>Description:</strong> {incident.description}</p>
                            <p><strong>Victims Detected:</strong> {incident.victims}</p>
                            <p><strong>AI Verification:</strong> {incident.aiVerification}</p>
                            <p><strong>Resources Required:</strong> {incident.resources.join(", ")}</p>
                            <p><strong>Assigned Volunteers:</strong> {incident.volunteers}</p>
                            <p><strong>Nearest Hospital:</strong> {incident.hospital}</p>
                            <p><strong>Date/Time:</strong> {incident.datetime}</p>

                            {/* Uploaded Image */}
                            <div style={{ marginTop: "20px" }}>
                                   <h3>Uploaded Image</h3>
                                   <img src={incident.image} alt="Incident" style={{ width: "100%", borderRadius: "8px" }} />
                            </div>

                            {/* Uploaded Video */}
                            <div style={{ marginTop: "20px" }}>
                                   <h3>Uploaded Video</h3>
                                   <video controls width="100%">
                                          <source src={incident.video} type="video/mp4" />
                                          Your browser does not support the video tag.
                                   </video>
                            </div>
                     </div>
              </div>
       );
}

