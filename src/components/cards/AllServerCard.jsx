function AllServerCard({ serverResult }){
    const { ip, type, value, running, started_at, finished_at, status} = serverResult;
    return(
        <>
        <div
          className="column shadow-md"
        >
          <div className="services-text text-black">
            <p>IP: {ip}</p>
          </div>
          <div class="skill-set-line">
            <span class="line"></span>
          </div>
          <div className="services-text text-black">
            <p>Type: {type}</p>
          </div>
          <div className="services-text text-black">
            <p>Value: {value}</p>
          </div>
        </div>
          </>
    )
}

export default AllServerCard;