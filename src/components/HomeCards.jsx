import { Link } from "react-router-dom";

function HomeCards({ dataResult}) {
    const { location, name, profile_url, id, score } = dataResult;
  return (
    <div className="column-container mt-4">
      <div
        className="column shadow-md relative" 
      >
        <div className="services-text text-black">
          <p>{name}</p>
        </div>
        <div class="skill-set-line">
          <span class="line"></span>
        </div>
        <div className="skill-set-header">
          <h1 className="underline">
            {" "}
            <a href={profile_url}  className="cursor-pointer">
              Facebook Profile
            </a>
          </h1>
        </div>
        <div className="skill-set-header">
          <h1 className="underline">
          <Link to={`/likes/${id}`} className="cursor-pointer">
              Liked Pages
            </Link>
          </h1>
        </div>
        <div className="skill-set-header">
          <h1 className="underline">
          <Link to={`/engagements/${id}`} className="cursor-pointer">
              User Engagements
            </Link>
          </h1>
        </div>
        <div className="skill-set-header">
          <h1>
            {location}
          </h1>
        </div>
        <div className="score-container absolute top-0
right-0 text-sm">
          <p>{score}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeCards;