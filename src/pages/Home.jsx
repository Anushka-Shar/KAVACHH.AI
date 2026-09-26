import { useEffect, useState } from "react";
import StarCard from "../components/starcard";

export default function Home() {
       // Live-updating demo stats — simulates a real-time feed ticking in the background.
       const [incidents, setIncidents] = useState(18402);
       const [teams, setTeams] = useState(312);

       useEffect(() => {
              const interval = setInterval(() => {
                     setIncidents((n) => n + Math.floor(Math.random() * 3));
                     setTeams((n) => Math.max(280, n + (Math.random() > 0.5 ? 1 : -1)));
              }, 4000);
              return () => clearInterval(interval);
       }, []);

       return (
              <div className="container">
                     <header style={{ padding: "90px 24px 60px" }}>
                            <h1>When disaster strikes, seconds decide outcomes.</h1>
                            <p>
                                   KAVACHH-AI detects, verifies, and routes disaster reports to the nearest rescue team in real time.
                            </p>
                            <a href="/report-disaster" className="button">Report an Incident</a>
                            <a href="/how-it-works" className="button" style={{ background: "transparent", boxShadow: "none", border: "1px solid var(--panel-border)" }}>
                                   See how it works
                            </a>
                     </header>

                     <section className="grid-4">
                            <StarCard label="Incidents processed" value={incidents.toLocaleString()} trend="▲ Live, updating now" />
                            <StarCard label="Avg. AI response time" value="47s" trend="▲ Report to triage" />
                            <StarCard label="Active rescue teams" value={teams} trend="▲ Across 26 districts" />
                            <StarCard label="Lives assisted" value="6,150+" trend="▲ And counting" />
                     </section>
              </div>
       );
}
