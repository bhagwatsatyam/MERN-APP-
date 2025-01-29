const WelcomeMessage = ({ onStart, styles = {} }) => {
  return (
    <div className="welcome-container">
      <h1>QUIZ GAME</h1>
      <button onClick={onStart}>
        Start
      </button>
    </div>
  );
};

export default WelcomeMessage;