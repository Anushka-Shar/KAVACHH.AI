import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function CitizenLogin() {
       const { login } = useContext(AuthContext);
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");
       const [remember, setRemember] = useState(false);
       const navigate = useNavigate();

       const handleLogin = (e) => {
              e.preventDefault();
              if (email && password) {
                     login("citizen", { email });
                     navigate("/citizen/dashboard");
              } else {
                     alert("Please enter email and password!");
              }
       };

       return (
              <div className="login-container">
                     <h1>Citizen Login</h1>
                     <form onSubmit={handleLogin}>
                            <label>Email or Mobile</label>
                            <input
                                   type="email"
                                   placeholder="Enter Email or Mobile"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   required
                            />

                            <label>Password</label>
                            <input
                                   type="password"
                                   placeholder="Enter Password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   required
                            />

                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                                   <label style={{ display: "flex", alignItems: "center", gap: "6px", margin: 0, fontWeight: 400 }}>
                                          <input type="checkbox" style={{ width: "auto", margin: 0 }} checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                                          Remember me
                                   </label>
                                   <a href="/forgot-password" style={{ color: "var(--red)", fontSize: "12px" }}>Forgot password?</a>
                            </div>

                            <button type="submit">Login</button>
                     </form>
                     <p>
                            Don't have an account? <a href="/register">Register</a>
                     </p>
                     <p>
                            Not a citizen? <a href="/login/rescue">Rescue Team login</a> · <a href="/login/admin">Admin login</a>
                     </p>
              </div>
       );
}


