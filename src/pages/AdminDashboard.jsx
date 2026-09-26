import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
       const [now, setNow] = useState(new Date());
       useEffect(() => {
              const interval = setInterval(() => setNow(new Date()), 1000);
              return () => clearInterval(interval);
       }, []);

       // Simulated real-time incident feed — ticks the overview numbers so the
       // dashboard reflects a live system instead of frozen demo data.
       const [stats, setStats] = useState({ total: 128, active: 34, resolved: 94, users: 532 });
       useEffect(() => {
              const interval = setInterval(() => {
                     setStats((s) => {
                            const resolvedThisTick = Math.random() > 0.6 ? 1 : 0;
                            const newThisTick = Math.random() > 0.5 ? 1 : 0;
                            return {
                                   total: s.total + newThisTick,
                                   active: Math.max(0, s.active + newThisTick - resolvedThisTick),
                                   resolved: s.resolved + resolvedThisTick,
                                   users: s.users + (Math.random() > 0.7 ? 1 : 0),
                            };
                     });
              }, 5000);
              return () => clearInterval(interval);
       }, []);

       return (
              <div className="dashboard-container admin-box">
                     {/* Header */}
                     <header className="dashboard-header">
                            <div className="logo">🛡 KAVACHH‑AI</div>
                            <h2>Admin Dashboard</h2>
                            <p style={{ marginBottom: 0 }}>🕐 {now.toLocaleTimeString()}</p>
                            <input type="text" placeholder="Search..." className="search-bar" />
                            <div className="header-icons">
                                   <span>🔔</span>
                                   <span>👤 Admin</span>
                                   <a href="/logout" className="button">Logout</a>
                            </div>
                     </header>

                     {/* Overview Cards */}
                     <div className="grid-4">
                            <div className="panel">Total Incidents: {stats.total}</div>
                            <div className="panel">Active Incidents: {stats.active}</div>
                            <div className="panel">Resolved Incidents: {stats.resolved}</div>
                            <div className="panel">Users: {stats.users}</div>
                     </div>

                     {/* Incident Management */}
                     <div style={{ marginTop: "40px" }}>
                            <h2>Incident Management ⭐</h2>
                            <table className="panel">
                                   <thead>
                                          <tr>
                                                 <th>ID</th><th>Type</th><th>Location</th><th>Severity</th>
                                                 <th>AI Verification</th><th>Status</th><th>Date/Time</th><th>Team</th><th>Actions</th>
                                          </tr>
                                   </thead>
                                   <tbody>
                                          <tr>
                                                 <td>INC-001</td><td>Earthquake</td><td>Lucknow</td><td>High</td>
                                                 <td>✔</td><td>Pending</td><td>27 Aug 2026</td><td>Alpha</td>
                                                 <td>
                                                        <button className="button">View</button>
                                                        <button className="button">Verify</button>
                                                        <button className="button">Assign</button>
                                                        <button className="button">Reject</button>
                                                 </td>
                                          </tr>
                                   </tbody>
                            </table>
                     </div>

                     {/* Live Incident Map */}
                     <div style={{ marginTop: "40px" }}>
                            <h2>🗺️ Live Incident Map</h2>
                            <div className="map-box">Map Placeholder (Active Incidents, Teams, Hospitals, Volunteers)</div>
                     </div>

                     {/* AI Verification Panel */}
                     <div style={{ marginTop: "40px" }}>
                            <h2>🤖 AI Verification</h2>
                            <div className="panel">
                                   <p><strong>Incident:</strong> INC-001</p>
                                   <p><strong>Disaster:</strong> Earthquake</p>
                                   <p><strong>AI Confidence:</strong> 97%</p>
                                   <p><strong>Severity:</strong> HIGH</p>
                                   <p><strong>Victims Detected:</strong> 5</p>
                                   <button className="button">Verify Incident</button>
                            </div>
                     </div>

                     {/* Rescue Team Management */}
                     <div style={{ marginTop: "40px" }}>
                            <h2>🚑 Rescue Team Management</h2>
                            <div className="panel">
                                   <p>Team Alpha — Available</p>
                                   <p>Team Bravo — Busy</p>
                                   <p>INC-001 → Team Alpha</p>
                                   <p>INC-002 → Team Bravo</p>
                            </div>
                     </div>

                     {/* Volunteer Management */}
                     <div style={{ marginTop: "40px" }}>
                            <h2>👥 Volunteer Management</h2>
                            <div className="panel">
                                   <p>Active Volunteers: 25</p>
                                   <p>Nearby Volunteers: 10</p>
                                   <p>Skills: First Aid, Rescue</p>
                                   <p>Assign to Incident: INC-001</p>
                            </div>
                     </div>

                     {/* Hospital Management */}
                     <div style={{ marginTop: "40px" }}>
                            <h2>🏥 Hospital Management</h2>
                            <div className="panel">
                                   <p>City Hospital — 3.2 km</p>
                                   <p>Available Beds: 12</p>
                                   <p>Emergency Beds: 4</p>
                                   <p>Incoming Victims: 5</p>
                            </div>
                     </div>

                     {/* Resource Management */}
                     <div style={{ marginTop: "40px" }}>
                            <h2>📦 Resource Management</h2>
                            <div className="panel">
                                   <p>Ambulances: 10 (Used: 2)</p>
                                   <p>Rescue Boats: 3 (Used: 1)</p>
                                   <p>Rescue Kits: 50 (Used: 12)</p>
                                   <p>Medical Supplies: 200 (Used: 40)</p>
                            </div>
                     </div>

                     {/* Notifications */}
                     <div style={{ marginTop: "40px" }}>
                            <h2>🔔 Notifications & Alerts</h2>
                            <div className="panel">
                                   <p>✔ Team Assigned</p>
                                   <p>🚨 Emergency Alert</p>
                                   <p>🏥 Hospital Alert</p>
                                   <p>📢 Mission Update</p>
                            </div>
                     </div>

                     {/* Analytics */}
                     <div style={{ marginTop: "40px" }}>
                            <h2>📊 Analytics & Reports</h2>
                            <div className="panel">
                                   <p>Total Incidents: 128</p>
                                   <p>Disaster-wise Distribution: Floods 40%, Earthquake 30%, Fire 20%, Others 10%</p>
                                   <p>Average Rescue Time: 45 min</p>
                                   <p>Success Rate: 92%</p>
                                   <p>[Bar Chart] [Pie Chart] [Line Chart]</p>
                            </div>
                     </div>

                     {/* User Management */}
                     <div style={{ marginTop: "40px" }}>
                            <h2>👤 User Management</h2>
                            <div className="panel">
                                   <p>Citizens: 400</p>
                                   <p>Rescue Teams: 20</p>
                                   <p>Volunteers: 80</p>
                                   <p>Hospitals: 15</p>
                                   <p>Admins: 5</p>
                                   <button className="button">Add User</button>
                                   <button className="button">Edit User</button>
                                   <button className="button">Deactivate User</button>
                            </div>
                     </div>
              </div>
       );
}




