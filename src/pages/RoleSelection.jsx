import { Link } from "react-router-dom";

export default function RoleSelection() {
       return (
              <div className="role-selection">
                     <h1>Choose Your Role</h1>
                     <div className="grid-3">
                            <Link to="/login/citizen" className="role-card">Citizen</Link>
                            <Link to="/login/rescue" className="role-card">Rescue Team</Link>
                            <Link to="/login/admin" className="role-card">Admin</Link>
                     </div>
              </div>
       );
}

