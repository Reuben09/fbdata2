function EngagementCards({item}){
  const { link, title, content} = item;
    return(
        <>
      <div
        className="column shadow-md"
      >
        <div className="services-text text-black">
          <p>{title}</p>
        </div>
        <div class="skill-set-line">
          <span class="line"></span>
        </div>
        <div className="services-text text-black">
          <p>{content}</p>
        </div>
        <div className="skill-set-header">
          <h1 className="underline">
          <a href={link} className="cursor-pointer">
              Link
            </a>
          </h1>
        </div>
      </div>
        </>
    )

}

export default EngagementCards;