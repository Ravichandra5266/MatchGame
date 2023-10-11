import "./style.css";

const Navbar = (props) => {
  const { timer, score } = props;
  return (
    <div className="container">
      <div className="row">
        <nav className="navbar align-items-center">
          <div className="ms-2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="logo"
              className="nav-logo"
            />
          </div>
          <ul className="mb-0 me-2">
            <li className="me-1">
              <span className="text-light">Score</span>
              <span className="text-light ms-1 me-1">:</span>
              <b className="nav-values">{score}</b>
            </li>
            <li className="me-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
                alt="timer"
                className="timer-icon"
              />
              <span className="text-light ms-1 me-1">:</span>
              <b className="nav-values">{timer}</b>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
