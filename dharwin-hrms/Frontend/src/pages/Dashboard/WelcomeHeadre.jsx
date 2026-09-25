const WelcomeHeader = () => {
  return (
    <div className="welcome-header">
      <div>
        <p className="welcome-label">Thursday, September 25, 2026</p>

        <h1>Good afternoon, Khushi 👋</h1>

        <p className="welcome-description">
          Here's what's happening across your organization today.
        </p>
      </div>

      <button className="primary-button">
        + Add employee
      </button>
    </div>
  );
};

export default WelcomeHeader;