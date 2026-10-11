import { TeamMember } from "../app/(WithComonLayout)/team-members/components/TeamMemberCard";

export const TEAM_LEAD_ORDER = [
  "6971f1c09bf3269a4c43457d", // Anichur Rahman
  "6971f2039bf3269a4c43458b", // Abul Ala Moududi
  "697345ba9bf3269a4c434af8", // Md Tanjum An Tashrif
  "697345e09bf3269a4c434b00", // Shahariar Hossain Mahir
  "6a3779b6fb8ac5182ec2c1a6", // MD. RAIHAN ALI
  "6973459c9bf3269a4c434aee", // Mohammad Abdul Ahad
  "6973457c9bf3269a4c434ae4", // Airin Afroj Aishi
];

export const sortTeamLeadMembers = (members: TeamMember[]) => {
  const orderMap = new Map(
    TEAM_LEAD_ORDER.map((id, index) => [id, index])
  );

  return [...members].sort((a, b) => {
    const aOrder = orderMap.get(a.id);
    const bOrder = orderMap.get(b.id);

    if (aOrder === undefined && bOrder === undefined) return 0;
    if (aOrder === undefined) return 1;
    if (bOrder === undefined) return -1;

    return aOrder - bOrder;
  });
};
