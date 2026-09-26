export default function HowItWorks() {
       const steps = [
              ["Report the disaster", "A citizen submits a report with a photo, short description, and location — via the app or a quick web form."],
              ["AI analyzes the report", "Our model classifies disaster type, predicts severity, and assigns a confidence score and priority level — all within seconds."],
              ["Nearest team is matched", "Based on location, severity, and team availability, KAVACHH-AI assigns the best-positioned rescue team automatically."],
              ["Mission is tracked live", "The citizen sees status updates in real time — assigned, en route, on-site, resolved — on a live map."],
              ["Data feeds back into the system", "Every resolved incident improves regional analytics — response times, hotspots, and resource planning for admins."],
       ];

       return (
              <div className="container" style={{ padding: "70px 24px 40px" }}>
                     <h1>How KAVACHH-AI Works</h1>
                     <p>From a photo to a dispatched team, step by step.</p>

                     <div style={{ marginTop: "24px" }}>
                            {steps.map(([title, desc], i) => (
                                   <div className="panel" key={title} style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                                          <div style={{ fontFamily: "var(--font-display)", color: "var(--red)", fontWeight: 700, minWidth: "28px" }}>
                                                 {String(i + 1).padStart(2, "0")}
                                          </div>
                                          <div>
                                                 <h3>{title}</h3>
                                                 <p style={{ marginBottom: 0 }}>{desc}</p>
                                          </div>
                                   </div>
                            ))}
                     </div>
              </div>
       );
}
