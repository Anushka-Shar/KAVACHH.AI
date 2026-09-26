export default function Features() {
       return (
              <div className="container" style={{ padding: "70px 24px 40px" }}>
                     <h1>Everything a rescue operation needs, in one system.</h1>

                     <section style={{ marginTop: "40px" }}>
                            <h2>AI Features</h2>
                            <div className="grid-2" style={{ marginTop: "16px" }}>
                                   <div className="panel">
                                          <h3>AI Disaster Detection</h3>
                                          <p>Classifies incoming reports by disaster type — flood, fire, landslide, structural collapse, and more — from images and text.</p>
                                   </div>
                                   <div className="panel">
                                          <h3>Severity Prediction & Confidence Score</h3>
                                          <p>Every report gets a severity rating and a confidence score, so responders know how urgent — and how certain — a report is.</p>
                                   </div>
                                   <div className="panel">
                                          <h3>Priority Level</h3>
                                          <p>Reports are automatically ranked P1–P3 so the most critical incidents reach a rescue team first.</p>
                                   </div>
                                   <div className="panel">
                                          <h3>Image Preview & Evidence</h3>
                                          <p>Every report carries photo evidence straight into the responder's queue — no waiting for a call to describe the scene.</p>
                                   </div>
                            </div>
                     </section>

                     <section style={{ marginTop: "40px" }}>
                            <h2>Dashboard Widgets</h2>
                            <div className="grid-4" style={{ marginTop: "16px" }}>
                                   <div className="panel stat-card">
                                          <div className="stat-label">Total Incidents</div>
                                          <div className="stat-value">1,204</div>
                                   </div>
                                   <div className="panel stat-card">
                                          <div className="stat-label">Active Incidents</div>
                                          <div className="stat-value">86</div>
                                   </div>
                                   <div className="panel stat-card">
                                          <div className="stat-label">Resolved Incidents</div>
                                          <div className="stat-value">1,118</div>
                                   </div>
                                   <div className="panel stat-card">
                                          <div className="stat-label">Rescue Teams Online</div>
                                          <div className="stat-value">54</div>
                                   </div>
                            </div>
                     </section>

                     <section style={{ marginTop: "40px" }}>
                            <h2>Core Features</h2>
                            <div className="grid-3" style={{ marginTop: "16px" }}>
                                   <div className="panel">
                                          <h3>User Authentication</h3>
                                          <p>Secure sign-up and login for citizens, rescue teams, and admins.</p>
                                   </div>
                                   <div className="panel">
                                          <h3>Role-Based Access</h3>
                                          <p>Each role sees only what's relevant to them — citizen, responder, or admin.</p>
                                   </div>
                                   <div className="panel">
                                          <h3>Report Disaster</h3>
                                          <p>A guided form to submit location, images, and description in under a minute.</p>
                                   </div>
                                   <div className="panel">
                                          <h3>Google Maps Integration</h3>
                                          <p>Pin-accurate incident locations and live rescue team positions on the map.</p>
                                   </div>
                                   <div className="panel">
                                          <h3>Rescue Team Assignment</h3>
                                          <p>Automatic matching of the nearest available team to a new incident.</p>
                                   </div>
                                   <div className="panel">
                                          <h3>Analytics Dashboard</h3>
                                          <p>Trends across disaster type, response time, and regional load for admins.</p>
                                   </div>
                            </div>
                     </section>
              </div>
       );
}
