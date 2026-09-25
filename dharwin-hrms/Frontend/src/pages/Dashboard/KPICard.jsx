const KPICard = ({
  icon: Icon,
  title,
  value,
  description,
  type = "default",
}) => {
  return (
    <div className="kpi-card">
      <div className={`kpi-icon ${type}`}>
        <Icon size={19} />
      </div>

      <div className="kpi-content">
        <p>{title}</p>
        <strong>{value}</strong>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default KPICard;