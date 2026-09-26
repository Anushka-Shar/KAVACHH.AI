import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function RescueLogin() {
       const { login } = useContext(AuthContext);
       const [teamId, setTeamId] = useState("");
       const [password, setPassword] = useState("");
       const [remember, setRemember] = useState(false);
       const navigate = useNavigate();

       const handleLogin = (e) => {
              e.preventDefault();
              if (teamId) {
                     login("rescue", { name: `Team ${teamId}` });
                     navigate("/rescue/dashboard");
              }
       };

       return (
              <div className="login-container">
                     <h1>Rescue Team Login</h1>
                     <form onSubmit={handleLogin}>
                            <label>Team ID</label>
                            <input type="text" placeholder="Enter Team ID" value={teamId} onChange={(e) => setTeamId(e.target.value)} required />

                            <label>Password</label>
                            <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                                   <label style={{ display: "flex", alignItems: "center", gap: "6px", margin: 0, fontWeight: 400 }}>
                                          <input type="checkbox" style={{ width: "auto", margin: 0 }} checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                                          Remember me
                                   </label>
                                   <a href="/forgot-password" style={{ color: "var(--red)", fontSize: "12px" }}>Forgot password?</a>
                            </div>

                            <button type="submit">Login as Rescue</button>
                     </form>
                     <p>
                            Not on a rescue team? <a href="/login/citizen">Citizen login</a> · <a href="/login/admin">Admin login</a>
                     </p>
              </div>
       );
}


