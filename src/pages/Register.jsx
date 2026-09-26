import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function Register() {
       const { login } = useContext(AuthContext);
       const navigate = useNavigate();

       const [firstName, setFirstName] = useState("");
       const [lastName, setLastName] = useState("");
       const [role, setRole] = useState("citizen");
       const [email, setEmail] = useState("");
       const [phone, setPhone] = useState("");
       const [password, setPassword] = useState("");
       const [confirmPassword, setConfirmPassword] = useState("");
       const [error, setError] = useState("");

       const handleRegister = (e) => {
              e.preventDefault();
              setError("");

              if (!firstName || !lastName || !email || !password) {
                     setError("Please fill in all required fields.");
                     return;
              }
              if (password.length < 8) {
                     setError("Password must be at least 8 characters.");
                     return;
              }
              if (password !== confirmPassword) {
                     setError("Passwords do not match.");
                     return;
              }

              login(role, { name: `${firstName} ${lastName}`, email, phone });
              navigate(`/${role}/dashboard`);
       };

       return (
              <div className="register-container">
                     <h1>Register</h1>
                     <p>Create your account to access live incident feeds, rescue coordination, and AI-assisted alerts.</p>

                     {error && <p style={{ color: "#ff8a80" }}>{error}</p>}

                     <form onSubmit={handleRegister}>
                            <label>First Name</label>
                            <input type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

                            <label>Last Name</label>
                            <input type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

                            <label>Register As</label>
                            <select value={role} onChange={(e) => setRole(e.target.value)}>
                                   <option value="citizen">Citizen</option>
                                   <option value="rescue">Rescue Team</option>
                                   <option value="admin">Admin</option>
                            </select>

                            <label>Email</label>
                            <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />

                            <label>Phone Number</label>
                            <input type="tel" placeholder="+91 00000 00000" value={phone} onChange={(e) => setPhone(e.target.value)} />

                            <label>Password</label>
                            <input type="password" placeholder="Create a strong password (min 8 characters)" value={password} onChange={(e) => setPassword(e.target.value)} required />

                            <label>Confirm Password</label>
                            <input type="password" placeholder="Re-enter password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

                            <button type="submit">Register Now</button>
                     </form>

                     <p>
                            Already registered? <a href="/login/citizen">Log in</a>
                     </p>
              </div>
       );
}


