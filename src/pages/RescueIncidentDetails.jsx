import React from "react";

export default function RescueIncidentDetails() {
       const incident = {
              id: "INC-001",
              type: "Earthquake",
              location: "Hazratganj, Lucknow",
              severity: "High",
              victims: 5,
              datetime: "27 Aug 2026, 2:30 PM",
              hospital: "City Hospital",
              distance: "2.4 km",
              eta: "7 min",
       };

       return (
              <div className="dashboard-container rescue-box">
                     <h1>🚑 Rescue Incident Details</h1>
                     <div className="panel">
                            <p><strong>Incident ID:</strong> {incident.id}</p>
                            <p><strong>Disaster Type:</strong> {incident.type}</p>
                            <p><strong>Location:</strong> {incident.location}</p>
                            <p><strong>Severity:</strong> {incident.severity}</p>
                            <p><strong>Victims Detected:</strong> {incident.victims}</p>
                            <p><strong>Date/Time:</strong> {incident.datetime}</p>
                            <p><strong>Nearest Hospital:</strong> {incident.hospital}</p>
                     </div>

                     {/* Live Map */}
                     <div style={{ marginTop: "30px" }}>
                            <h2>🗺️ Live Map & Route</h2>
                            <div className="map-box">Map Placeholder</div>
                            <p>Distance: {incident.distance} | ETA: {incident.eta}</p>
                            <button className="button">Start Navigation</button>
                     </div>

                     {/* Mission Status */}
                     <div style={{ marginTop: "30px" }}>
                            <h2>Mission Status</h2>
                            <div className="grid-5">
                                   <button className="button">Accept Mission</button>
                                   <button className="button">On The Way</button>
                                   <button className="button">Reached Location</button>
                                   <button className="button">Rescue In Progress</button>
                                   <button className="button">Mission Completed</button>
                            </div>
                     </div>

                     {/* Victim Information */}
                     <div style={{ marginTop: "30px" }}>
                            <h2>Victim Information</h2>
                            <div className="panel">
                                   <p>Estimated Victims: {incident.victims}</p>
                                   <p>Priority: High</p>
                                   <p>Rescue Priority: Critical</p>
                            </div>
                     </div>

                     {/* Resources Needed */}
                     <div style={{ marginTop: "30px" }}>
                            <h2>Resources Needed</h2>
                            <div className="panel">
                                   <p>🚑 Ambulance: 2</p>
                                   <p>🛶 Rescue Boat: 1</p>
                                   <p>🧰 Rescue Kit: 5</p>
                                   <p>👥 Volunteers: 10</p>
                                   <button className="button">Request Resources</button>
                            </div>
                     </div>
              </div>
       );
}
