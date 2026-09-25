import {
  Users,
  CalendarDays,
  ClipboardCheck,
  UserPlus,
} from "lucide-react";

import KPICard from "./KPICard";

const KPISection = () => {
  const cards = [
    {
      title: "Present today",
      value: "42 / 48",
      description: "87.5% attendance",
      icon: Users,
      type: "green",
    },
    {
      title: "On leave",
      value: "4",
      description: "2 planned, 2 sick",
      icon: CalendarDays,
      type: "orange",
    },
    {
      title: "Pending approvals",
      value: "3",
      description: "Leave and regularization",
      icon: ClipboardCheck,
      type: "blue",
    },
    {
      title: "Onboarding",
      value: "2",
      description: "Documents to verify",
      icon: UserPlus,
      type: "purple",
    },
  ];

  return (
    <section className="kpi-grid">
      {cards.map((card) => (
        <KPICard key={card.title} {...card} />
      ))}
    </section>
  );
};

export default KPISection;