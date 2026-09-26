import React from "react";

export default function Profile() {
       const user = {
              name: "Anshika",
              role: "Citizen",
              email: "anshika@example.com",
              location: "Kanpur, UP",
       };

       return (
              <div className="dashboard-container citizen-box">
                     <h1>My Profile</h1>
                     <div className="panel">
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Role:</strong> {user.role}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Location:</strong> {user.location}</p>
                     </div>
              </div>
       );
}
