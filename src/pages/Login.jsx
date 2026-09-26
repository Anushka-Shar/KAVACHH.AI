import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function Login() {
       const { login } = useContext(AuthContext);
       const [selectedRole, setSelectedRole] = useState("");
       const navigate = useNavigate();

       const handleLogin = () => {
              if (selectedRole) {
                     login(selectedRole);
                     navigate(`/${selectedRole}/dashboard`);
              }
       };

       return (
              <div className="login-container">
                     <h1>Login</h1>
                     <p>Select your role:</p>
                     <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                            <option value="">-- Choose Role --</option>
                            <option value="citizen">Citizen</option>
                            <option value="admin">Admin</option>
                            <option value="rescue">Rescue</option>
                     </select>
                     <button onClick={handleLogin}>Login</button>
              </div>
       );
}

