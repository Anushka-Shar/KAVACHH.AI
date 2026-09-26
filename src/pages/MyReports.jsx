import React from "react";

export default function MyReports() {
       // Dummy data (static for frontend)
       const reports = [
              {
                     id: "INC-001",
                     type: "Flood",
                     location: "Kanpur",
                     datetime: "27 Aug 2026, 2:30 PM",
                     status: "Pending",
              },
              {
                     id: "INC-002",
                     type: "Fire",
                     location: "Lucknow",
                     datetime: "26 Aug 2026, 5:00 PM",
                     status: "Resolved",
              },
              {
                     id: "INC-003",
                     type: "Earthquake",
                     location: "Delhi",
                     datetime: "25 Aug 2026, 11:00 AM",
                     status: "Verified",
              },
       ];

       return (
              <div className="dashboard-container citizen-box">
                     <h1>📋 My Reports</h1>
                     <table className="panel">
                            <thead>
                                   <tr>
                                          <th>Incident ID</th>
                                          <th>Disaster Type</th>
                                          <th>Location</th>
                                          <th>Date/Time</th>
                                          <th>Status</th>
                                   </tr>
                            </thead>
                            <tbody>
                                   {reports.map((report) => (
                                          <tr key={report.id}>
                                                 <td>{report.id}</td>
                                                 <td>{report.type}</td>
                                                 <td>{report.location}</td>
                                                 <td>{report.datetime}</td>
                                                 <td>{report.status}</td>
                                          </tr>
                                   ))}
                            </tbody>
                     </table>
              </div>
       );
}

