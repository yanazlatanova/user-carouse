import React from "react";
import type { User } from "../types/user";
import { getUserColor } from "../utils/userColor";
import "../styles/UserCard.css"; // Assuming you have some basic styles for the card

interface Props {
  user: User;
}

const Field = ({ label, value, href }: { label: string; value: string; href?: string }) => (
  <div className="field">
    <div className="field-label">{label}</div>
    <div className="field-value">
      {href
        ? <a href={href} target="_blank" rel="noopener noreferrer">{value}</a>
        : value
        }
    </div>
  </div>
);

export const UserCard: React.FC<Props> = ({ user }) => {
  const accent = getUserColor(user.username);
  const initials = user.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
  const mapsUrl = `https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`;

  return (
    <div className="card">
      <div className="card-header" style={{ background: accent }}>
        <div className="card-avatar">{initials}</div>
        <div>
          <div className="card-name">{user.name}</div>
          <div className="card-username">@{user.username}</div>
        </div>
      </div>

      <div className="card-body">
        <Field label="Email"      value={user.email}   href={`mailto:${user.email}`} />
        <Field label="Phone"      value={user.phone}   href={`tel:${user.phone}`} />
        <Field label="Website"    value={user.website} href={`https://${user.website}`} />
        <Field label="Street"     value={`${user.address.street}, ${user.address.suite}`} />
        <Field label="City / ZIP" value={`${user.address.city}, ${user.address.zipcode}`} />
        <Field label="Coordinates" value={`${user.address.geo.lat}, ${user.address.geo.lng}`} href={mapsUrl} />
        <Field label="Company"    value={user.company.name} />
        <Field label="Catchphrase" value={user.company.catchPhrase} />
        <Field label="Business"   value={user.company.bs} />
      </div>
    </div>
  );
};
