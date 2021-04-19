import { CSSTransitionGroup } from "react-transition-group";

function StatsBlock({
  playerId,
  stats: {
    matches,
    innings,
    not_outs,
    runs,
    high_score,
    average,
    strike_rate,
    fifties,
    hundreds,
  },
}) {
  console.log(playerId);
  return (
    <div id="stats_block">
      <div id="stats_title">STATS</div>
      <ul id="stats_list">
        <li>
          <span className="key">Matches</span>
          <span className="value" key={playerId}>
            {matches}
          </span>
        </li>
        <li>
          <span className="key">Innings</span>
          <span className="value" key={playerId}>
            {innings}
          </span>
        </li>
        <li>
          <span className="key">Not Outs</span>
          <span className="value" key={playerId}>
            {not_outs}
          </span>
        </li>
        <li>
          <span className="key">Runs</span>
          <span className="value" key={playerId}>
            {runs}
          </span>
        </li>
        <li>
          <span className="key">High Score</span>
          <span className="value" key={playerId}>
            {high_score}
          </span>
        </li>
        <li>
          <span className="key">Average</span>
          <span className="value" key={playerId}>
            {average}
          </span>
        </li>
        <li>
          <span className="key">Strike Rate</span>
          <span className="value" key={playerId}>
            {strike_rate}
          </span>
        </li>
        <li>
          <span className="key">50s</span>
          <span className="value" key={playerId}>
            {fifties}
          </span>
        </li>
        <li>
          <span className="key">100s</span>
          <span className="value" key={playerId}>
            {hundreds}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default StatsBlock;
