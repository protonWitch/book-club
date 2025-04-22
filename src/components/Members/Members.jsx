import { MemberCard } from "./MemberCard";

export function Members({ members }) {
  return (
    <aside className="member-list">
      <h2 className="members-title">Members</h2>
      <ul className="list-of-members">
        {members.map((member) => (
          <MemberCard member={member} key={member.id} />
        ))}
      </ul>
    </aside>
  );
}
