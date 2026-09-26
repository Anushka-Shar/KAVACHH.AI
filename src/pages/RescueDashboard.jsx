import React, { useEffect, useState } from "react";

export default function RescueDashboard() {
       const [now, setNow] = useState(new Date());
       useEffect(() => {
              const interval = setInterval(() => setNow(new Date()), 1000);
              return () => clearInterval(interval);
       }, []);

       // Live distance/ETA countdown as the team "approaches" the incident.
       const [etaSeconds, setEtaSeconds] = useState(7 * 60);
       const [distanceKm, setDistanceKm] = useState(2.4);
       useEffect(() => {
              const interval = setInterval(() => {
                     setEtaSeconds((s) => (s > 0 ? s - 5 : 0));
                     setDistanceKm((d) => Math.max(0, +(d - 0.03).toFixed(2)));
              }, 5000);
              return () => clearInterval(interval);
       }, []);
       const etaMinutes = Math.floor(etaSeconds / 60);
       const etaRemSeconds = etaSeconds % 60;

       return (
              <div className="dashboard-container rescue-box">
                     {/* Header */}
                     <header className="dashboard-header">
                            <div className="logo">🛡 KAVACHH‑AI</div>
                            <h2>Welcome, Rescue Team Alpha 🚑</h2>
                            <p>Status: ✅ Available · 🕐 {now.toLocaleTimeString()}</p>
                            <div className="header-icons">
                                   <span>🔔</span>
                                   <span>👤</span>
                            </div>
                     </header>

                     {/* Summary Cards */}
                     <div className="grid-4">
                            <div className="panel">Assigned Incidents: 5</div>
                            <div className="panel">Active Missions: 2</div>
                            <div className="panel">Completed Missions: 12</div>
                            <div className="panel">Nearby Emergencies: 3</div>
                     </div>

                     {/* Active / Assigned Incidents */}
                     <div style={{ marginTop: "40px" }}>
                            <h2>Active / Assigned Incidents</h2>
                            <div className="panel">
                                   <h3>INC-001 — 🔴 Earthquake</h3>
                                   <p>📍 Hazratganj, Lucknow</p>
                                   <p>⚠️ Severity: HIGH</p>
                                   <p>👥 Victims Detected: 5</p>
                                   <p>🕐 Reported: 10 min ago</p>
                                   <a href="/incident-details" className="button">View Details</a>
                            </div>
                     </div>

                     {/* Live Map & Route */}
                     <div style={{ marginTop: "40px" }}>
                            <h2>🗺️ Live Map & Route</h2>
                            <div className="map-box">Map Placeholder</div>
                            <p>Distance: {distanceKm} km | ETA: {etaSeconds > 0 ? `${etaMinutes}m ${etaRemSeconds}s` : "Arrived"}</p>
                            <a href="/navigation" className="button">Start Navigation</a>
                     </div>

                     {/* Mission Status */}
                     <div style={{ marginTop: "40px" }}>
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
                     <div style={{ marginTop: "40px" }}>
                            <h2>Victim Information</h2>
                            <div className="panel">
                                   <p>Estimated Victims: 5</p>
                                   <p>Detection Location: Hazratganj</p>
                                   <p>Priority: High</p>
                                   <p>Rescue Priority: Critical</p>
                            </div>
                     </div>

                     {/* Resources Needed */}
                     <div style={{ marginTop: "40px" }}>
                            <h2>Resources Needed</h2>
                            <div className="panel">
                                   <p>🚑 Ambulance: 2</p>
                                   <p>🛶 Rescue Boat: 1</p>
                                   <p>🧰 Rescue Kit: 5</p>
                                   <p>👥 Volunteers: 10</p>
                                   <a href="/request-resources" className="button">Request Resources</a>
                            </div>
                     </div>

                     {/* Hospital Information */}
                     <div style={{ marginTop: "40px" }}>
                            <h2>Hospital Information</h2>
                            <div className="panel">
                                   <p><strong>City Hospital</strong></p>
                                   <p>📍 3.2 km away</p>
                                   <p>Available Beds: 12</p>
                                   <p>Emergency Beds: 4</p>
                                   <a href="/hospital" className="button">View Hospital</a>
                                   <a href="/share-victims" className="button" style={{ marginLeft: "12px" }}>Share Victim Info</a>
                            </div>
                     </div>

                     {/* Update Mission */}
                     <div style={{ marginTop: "40px" }}>
                            <h2>Update Mission</h2>
                            <div className="panel">
                                   <textarea placeholder="Enter mission update..."></textarea>
                                   <button className="button">Submit Update</button>
                            </div>
                     </div>
              </div>
       );
}






