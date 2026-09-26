import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";

const SAMPLE_FEED = [
       { id: "KVH-40217", type: "Flash Flood", location: "Riverside Colony", priority: "P1" },
       { id: "KVH-40201", type: "Building Collapse", location: "Market Street", priority: "P2" },
       { id: "KVH-40195", type: "Fire", location: "North Bridge", priority: "P2" },
       { id: "KVH-40188", type: "Landslide", location: "Hilltop Road", priority: "P1" },
];

export default function LiveMap() {
       const { role } = useContext(AuthContext);
       const [feed, setFeed] = useState(SAMPLE_FEED.slice(0, 2));
       const [lastUpdated, setLastUpdated] = useState(new Date());

       // Simulates new incidents streaming in — a stand-in for a real WebSocket/polling feed.
       useEffect(() => {
              const interval = setInterval(() => {
                     setFeed((current) => {
                            if (current.length >= SAMPLE_FEED.length) return current;
                            return [...current, SAMPLE_FEED[current.length]];
                     });
                     setLastUpdated(new Date());
              }, 6000);
              return () => clearInterval(interval);
       }, []);

       return (
              <div className="dashboard-container">
                     <h1>🗺️ Live Map</h1>
                     <p>Real-time incidents, rescue teams, and shelters{role ? ` — viewing as ${role}` : ""}.</p>

                     <div className="grid-2" style={{ marginTop: "16px" }}>
                            <div className="map-box" style={{ minHeight: "420px" }}>
                                   🗺️
                                   <br />
                                   Map Placeholder
                                   <br />
                                   <small>Google Maps will be connected later — last updated {lastUpdated.toLocaleTimeString()}</small>
                            </div>

                            <div className="panel">
                                   <h2>Nearby Incidents</h2>
                                   {feed.map((incident) => (
                                          <div key={incident.id} style={{ borderBottom: "1px solid var(--panel-border)", padding: "10px 0" }}>
                                                 <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <span>{incident.id}</span>
                                                        <span style={{ color: "var(--red)", fontWeight: 600 }}>{incident.priority}</span>
                                                 </div>
                                                 <small>{incident.type} · {incident.location}</small>
                                          </div>
                                   ))}
                                   {feed.length < SAMPLE_FEED.length && (
                                          <p style={{ marginTop: "10px" }}>Listening for new reports…</p>
                                   )}
                            </div>
                     </div>
              </div>
       );
}
