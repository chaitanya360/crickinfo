import { CSSTransitionGroup } from "react-transition-group";

function MainBlock({
  playerId,
  overview: {
    player_img,
    first_name,
    last_name,
    role,
    batting_style,
    nationality,
    dob,
  },
  onPrevPressed,
  onNextPressed,
}) {
  return (
    <div id="main_block">
      <div id="top">
        <div id="left_arrow" className="arrow">
          <img
            src={process.env.PUBLIC_URL + "assets/left_arrow.svg"}
            height="100%"
            width="100%"
            alt="left_arrow"
            onClick={onPrevPressed}
          />
        </div>

        <div id="player_img" key={playerId + 1}>
          <img
            src={process.env.PUBLIC_URL + "assets/" + player_img + ".png"}
            height="100%"
            width="100%"
            alt="player"
          />
        </div>
        <div id="player_name" key={playerId}>
          <div id="fname">{first_name}</div>
          <div id="idlname">{last_name}</div>
        </div>

        <div id="right_arrow" className="arrow">
          <img
            src={process.env.PUBLIC_URL + "assets/right_arrow.svg"}
            height="100%"
            width="100%"
            alt="right_arrow"
            onClick={onNextPressed}
          />
        </div>
      </div>
      <div id="overview_block">
        <div id="overview_title">OVERVIEW</div>
        <ul id="overview_list">
          <li>
            <span className="key">Role</span>
            <span className="value">{role}</span>
          </li>
          <li>
            <span className="key">Batting Style</span>
            <span className="value">{batting_style}</span>
          </li>
          <li>
            <span className="key">Nationality</span>
            <span className="value">{nationality}</span>
          </li>
          <li>
            <span className="key">Date of Birth</span>
            <span className="value">{dob}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainBlock;
