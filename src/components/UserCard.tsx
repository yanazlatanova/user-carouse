import React from "react";
import type { User } from "../types/user";
import { getUserColor } from "../utils/userColor";

interface Props {
    user: User;
}

export const UserCard: React.FC<Props> = ({ user }) => {
    const accent = getUserColor(user.username)

    return (
        <div className="user-card" style={{ border: "1px solid #ccc", padding: "16px", margin: "8px", borderRadius: "8px" }}>
            <div style={{ backgroundColor: accent, color: "#fff", padding: "8px", borderRadius: "4px" }}>
                <h2>{user.name}</h2>
                <p>{user.username}</p>
            </div>
            <div>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
                <p>{user.company.name} ({user.company.catchPhrase}, {user.company.bs})</p>
                <p>{user.address.city}, {user.address.street}, {user.address.suite}, {user.address.zipcode}, {user.address.geo.lat}, {user.address.geo.lng}</p>
            </div>            
        </div>
    );
};
