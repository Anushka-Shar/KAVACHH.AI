

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function CitizenDashboard() {
       const { user } = useContext(AuthContext);
       const citizenName = user?.name || "Anshika"; // Falls back to demo name if not registered with one
       const location = "Kanpur, UP"; // Current location later

       // Live clock — ticks every second to show the dashboard is real-time.
       const [now, setNow] = useState(new Date());
       useEffect(() => {
              const interval = setInterval(() => setNow(new Date()), 1000);
              return () => clearInterval(interval);
       }, []);

       // Live ETA countdown for the assigned rescue team (demo: ticks down every few seconds).
       const [etaSeconds, setEtaSeconds] = useState(15 * 60);
       useEffect(() => {
              const interval = setInterval(() => {
                     setEtaSeconds((s) => (s > 0 ? s - 5 : 0));
              }, 5000);
              return () => clearInterval(interval);
       }, []);
       const etaMinutes = Math.floor(etaSeconds / 60);
       const etaRemSeconds = etaSeconds % 60;

       return (
              <div className="dashboard-container citizen-box">

                     {/* ================= HEADER ================= */}
                     <header className="dashboard-header">
                            <div className="logo">🛡️ KAVACHH-AI</div>

                            <div>
                                   <h2>Welcome, {citizenName}</h2>
                                   <p>📍 {location} · 🕐 {now.toLocaleTimeString()}</p>
                            </div>

                            <div className="header-icons">
                                   <Link to="/live-map" title="Live Map">
                                          🗺️
                                   </Link>

                                   <Link to="/notifications" title="Notifications">
                                          🔔
                                   </Link>

                                   <Link to="/profile" title="Profile">
                                          👤
                                   </Link>
                            </div>
                     </header>


                     {/* ================= EMERGENCY ALERT ================= */}
                     <div className="alert-box">
                            🚨 Emergency Alert in your area — Flood at {location}

                            <Link
                                   to="/incident-details"
                                   className="button"
                                   style={{ marginLeft: "12px" }}
                            >
                                   View Details
                            </Link>
                     </div>


                     {/* ================= REPORT DISASTER ================= */}
                     <div style={{ margin: "20px 0" }}>
                            <Link
                                   to="/report-disaster"
                                   className="big-report-btn"
                            >
                                   🚨 REPORT DISASTER
                            </Link>
                     </div>


                     {/* ================= QUICK ACTIONS ================= */}
                     <div className="grid-4">

                            <Link to="/report-disaster" className="panel">
                                   📢
                                   <br />
                                   Report Disaster
                            </Link>

                            <Link to="/my-reports" className="panel">
                                   📋
                                   <br />
                                   My Reports
                            </Link>

                            <Link to="/nearby-incidents" className="panel">
                                   📍
                                   <br />
                                   Nearby Incidents
                            </Link>

                            <Link to="/emergency-contacts" className="panel">
                                   ☎️
                                   <br />
                                   Emergency Contacts
                            </Link>

                     </div>


                     {/* ================= NEARBY INCIDENTS ================= */}
                     <div style={{ marginTop: "40px" }}>

                            <h2>Nearby Incidents</h2>

                            <div className="map-box">
                                   🗺️
                                   <br />
                                   Map Placeholder
                                   <br />
                                   <small>Google Maps will be connected later</small>
                            </div>

                            <table
                                   className="panel"
                                   style={{ width: "100%", marginTop: "16px" }}
                            >
                                   <thead>
                                          <tr>
                                                 <th>Type</th>
                                                 <th>Severity</th>
                                                 <th>Distance</th>
                                                 <th>Status</th>
                                          </tr>
                                   </thead>

                                   <tbody>

                                          <tr>
                                                 <td>Flood</td>
                                                 <td>High</td>
                                                 <td>2 km</td>
                                                 <td>Active</td>
                                          </tr>

                                          <tr>
                                                 <td>Fire</td>
                                                 <td>Medium</td>
                                                 <td>5 km</td>
                                                 <td>Resolved</td>
                                          </tr>

                                   </tbody>
                            </table>

                     </div>


                     {/* ================= MY REPORTS ================= */}
                     <div style={{ marginTop: "40px" }}>

                            <div
                                   style={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                   }}
                            >
                                   <h2>My Reports</h2>

                                   <Link to="/my-reports" className="button">
                                          View All
                                   </Link>
                            </div>


                            <table
                                   className="panel"
                                   style={{ width: "100%", marginTop: "16px" }}
                            >

                                   <thead>
                                          <tr>
                                                 <th>ID</th>
                                                 <th>Type</th>
                                                 <th>Location</th>
                                                 <th>Date/Time</th>
                                                 <th>Status</th>
                                          </tr>
                                   </thead>

                                   <tbody>

                                          <tr>
                                                 <td>INC-001</td>
                                                 <td>Flood</td>
                                                 <td>Kanpur</td>
                                                 <td>27 Aug 2026, 2:30 PM</td>
                                                 <td>Pending</td>
                                          </tr>

                                          <tr>
                                                 <td>INC-002</td>
                                                 <td>Fire</td>
                                                 <td>Lucknow</td>
                                                 <td>26 Aug 2026, 5:00 PM</td>
                                                 <td>Resolved</td>
                                          </tr>

                                   </tbody>

                            </table>

                     </div>


                     {/* ================= RESCUE STATUS ================= */}
                     <div style={{ marginTop: "40px" }}>

                            <h2>Rescue Status</h2>

                            <div className="panel">

                                   <p>
                                          <strong>Team Assigned:</strong> Rescue Team Alpha
                                   </p>

                                   <p>
                                          <strong>Current Status:</strong> On the Way
                                   </p>

                                   <p>
                                          <strong>ETA:</strong> {etaSeconds > 0 ? `${etaMinutes}m ${etaRemSeconds}s` : "Arrived"}
                                   </p>

                                   <Link
                                          to="/live-tracking"
                                          className="button"
                                   >
                                          View Live Tracking
                                   </Link>

                            </div>

                     </div>


                     {/* ================= NOTIFICATIONS ================= */}
                     <div style={{ marginTop: "40px" }}>

                            <div
                                   style={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                   }}
                            >

                                   <h2>Notifications</h2>

                                   <Link
                                          to="/notifications"
                                          className="button"
                                   >
                                          View All
                                   </Link>

                            </div>


                            <div className="grid-2">

                                   <Link to="/notifications" className="panel">
                                          ✔️ Report Verified
                                   </Link>

                                   <Link to="/notifications" className="panel">
                                          🚑 Rescue Team Assigned
                                   </Link>

                                   <Link to="/notifications" className="panel">
                                          📍 Team Reached Location
                                   </Link>

                                   <Link to="/notifications" className="panel">
                                          ✅ Rescue Completed
                                   </Link>

                            </div>

                     </div>


                     {/* ================= EMERGENCY CONTACTS ================= */}
                     <div style={{ marginTop: "40px" }}>

                            <div
                                   style={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                   }}
                            >

                                   <h2>Emergency Contacts</h2>

                                   <Link
                                          to="/emergency-contacts"
                                          className="button"
                                   >
                                          View All
                                   </Link>

                            </div>


                            <div className="panel">

                                   <p>🚑 Ambulance: 108</p>

                                   <p>🔥 Fire Brigade: 101</p>

                                   <p>👮 Police: 100</p>

                                   <p>📞 Disaster Helpline: 1078</p>

                            </div>

                     </div>


                     {/* ================= PROFILE ================= */}
                     <div style={{ marginTop: "40px" }}>

                            <h2>My Profile</h2>

                            <div className="panel">

                                   <p>
                                          <strong>Name:</strong> {citizenName}
                                   </p>

                                   <p>
                                          <strong>Email:</strong> anshika@example.com
                                   </p>

                                   <p>
                                          <strong>Mobile:</strong> +91-9876543210
                                   </p>

                                   <p>
                                          <strong>Address:</strong> Kanpur, UP
                                   </p>


                                   <Link
                                          to="/edit-profile"
                                          className="button"
                                   >
                                          Edit Profile
                                   </Link>

                                   <Link
                                          to="/logout"
                                          className="button"
                                          style={{ marginLeft: "12px" }}
                                   >
                                          Logout
                                   </Link>

                            </div>

                     </div>

              </div>
       );
}