import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function AdminLogin() {
       const { login } = useContext(AuthContext);
       const [email, setEmail] = useState("");
       const [adminKey, setAdminKey] = useState("");
       const [remember, setRemember] = useState(false);
       const navigate = useNavigate();

       const handleLogin = (e) => {
              e.preventDefault();
              if (adminKey === "admin123") {
                     login("admin", { email });
                     navigate("/admin/dashboard");
              } else {
                     alert("Invalid Admin Key!");
              }
       };

       return (
              <div className="login-container">
                     <h1>Admin Login</h1>
                     <form onSubmit={handleLogin}>
                            <label>Admin Email</label>
                            <input type="email" placeholder="admin@kavach-ai.org" value={email} onChange={(e) => setEmail(e.target.value)} />

                            <label>Admin Key</label>
                            <input type="password" placeholder="Enter Admin Key" value={adminKey} onChange={(e) => setAdminKey(e.target.value)} required />

                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                                   <label style={{ display: "flex", alignItems: "center", gap: "6px", margin: 0, fontWeight: 400 }}>
                                          <input type="checkbox" style={{ width: "auto", margin: 0 }} checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                                          Remember me
                                   </label>
                                   <a href="/forgot-password" style={{ color: "var(--red)", fontSize: "12px" }}>Forgot password?</a>
                            </div>

                            <button type="submit">Login as Admin</button>
                     </form>
                     <p>
                            Not an admin? <a href="/login/citizen">Citizen login</a> · <a href="/login/rescue">Rescue Team login</a>
                     </p>
              </div>
       );
}


