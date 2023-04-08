

function LikedCards({ likeResult }) {
    const { link, title} = likeResult;
  return (
    <div className="column-container mt-4">
      <div
        className="column shadow-md"
      >
        <div className="services-text text-black">
          <p>{title}</p>
        </div>
        <div class="skill-set-line">
          <span class="line"></span>
        </div>
        <div className="skill-set-header">
          <h1 className="underline">
          <a href={link} className="cursor-pointer">
              Link to Page
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default LikedCards;