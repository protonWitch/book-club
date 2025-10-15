export function MemberCard({ member }) {
  return (
    <div className="member-card">
      <div className="member-line">
        <p className={member.isNext ? "upNext" : ""}>{member.name}</p>
        {member.isNext ? <span className="up-next-indicator">NEXT</span> : ""}
      </div>
    </div>
  );
}
