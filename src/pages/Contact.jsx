import { useState } from "react";

export default function Contact() {
       const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
       const [sent, setSent] = useState(false);

       const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

       const handleSubmit = (e) => {
              e.preventDefault();
              setSent(true);
       };

       return (
              <div className="container" style={{ padding: "70px 24px 40px" }}>
                     <h1>Contact Us</h1>
                     <p>Get in touch — or report an emergency now.</p>

                     <section className="grid-2" style={{ marginTop: "24px" }}>
                            <div className="panel">
                                   <h2>Send a message</h2>
                                   <p>For partnerships, media, or general questions — not for active emergencies.</p>
                                   {sent ? (
                                          <p style={{ color: "var(--green)" }}>Message sent. Our team will respond within 24 hours.</p>
                                   ) : (
                                          <form onSubmit={handleSubmit}>
                                                 <label>Full name</label>
                                                 <input type="text" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} required />

                                                 <label>Email</label>
                                                 <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />

                                                 <label>Subject</label>
                                                 <input type="text" name="subject" placeholder="What's this about?" value={form.subject} onChange={handleChange} required />

                                                 <label>Message</label>
                                                 <textarea name="message" placeholder="Write your message..." value={form.message} onChange={handleChange} required></textarea>

                                                 <button type="submit" className="button">Send Message</button>
                                          </form>
                                   )}
                            </div>

                            <div>
                                   <div className="panel">
                                          <h2>In immediate danger?</h2>
                                          <p>Don't wait for a reply here — report directly through the platform or call emergency services.</p>
                                          <a href="/report-disaster" className="button">Report an Incident</a>
                                   </div>

                                   <div className="panel">
                                          <h2>Helplines</h2>
                                          <p>Email: support@kavach-ai.org</p>
                                          <p>Phone: +91-9876543210</p>
                                          <p>Address: Disaster Response HQ, Kanpur</p>
                                          <p>National Emergency: 108</p>
                                          <p>Disaster Helpline: 1078</p>
                                   </div>
                            </div>
                     </section>
              </div>
       );
}
