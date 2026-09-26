export default function About() {
       return (
              <div className="container" style={{ padding: "70px 24px 40px" }}>
                     <h1>A rescue network that never sleeps.</h1>
                     <p>
                            KAVACHH-AI was built on a simple premise: in a disaster, the gap between "someone noticed" and
                            "help arrived" is where lives are lost. We close that gap with AI.
                     </p>

                     <section className="grid-2" style={{ marginTop: "40px" }}>
                            <div className="panel">
                                   <h2>Our mission</h2>
                                   <p>
                                          We give every citizen a direct, AI-assisted line to rescue coordination — and give every rescue
                                          team the context they need before they even arrive on site: disaster type, severity, image
                                          evidence, and a live location pin.
                                   </p>
                                   <p>
                                          KAVACHH-AI isn't a replacement for emergency services — it's the fastest possible bridge to them.
                                   </p>
                            </div>

                            <div className="panel">
                                   <h2>By the numbers</h2>
                                   <p>Districts covered: 26</p>
                                   <p>Registered responders: 1,240</p>
                                   <p>Avg. dispatch time: 2m 40s</p>
                                   <p>Uptime (last 12 months): 99.94%</p>
                            </div>
                     </section>

                     <section style={{ marginTop: "40px" }}>
                            <h2>What we stand for</h2>
                            <div className="grid-3" style={{ marginTop: "16px" }}>
                                   <div className="panel">
                                          <h3>Speed</h3>
                                          <p>Every second of triage delay is a second rescue teams lose. Our AI pipeline is built for milliseconds, not minutes.</p>
                                   </div>
                                   <div className="panel">
                                          <h3>Accuracy</h3>
                                          <p>False alarms waste rescue capacity. Confidence scoring keeps teams focused on verified, high-priority incidents.</p>
                                   </div>
                                   <div className="panel">
                                          <h3>Transparency</h3>
                                          <p>Citizens can track their report from submission to resolution — no black box, no silence.</p>
                                   </div>
                            </div>
                     </section>
              </div>
       );
}
