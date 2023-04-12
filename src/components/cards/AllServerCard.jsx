
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
          <p>Type: {type === null? "null": type}</p>
          </div>
          <div className="services-text text-black">
            <p>Value: {value === null? "null": value}</p>
          </div>
          <div className="services-text text-black">
          <p>Running: {running === true? "true": "false"}</p>
          </div>
          <div className="services-text text-black">
            <p>Started: {started_at === null? "null": started_at}</p>
          </div>
          <div className="services-text text-black">
            <p>Finshed: {finished_at === null? "null": finished_at}</p>
          </div>
          <div className="services-text text-black">
            <p>Status: {status === null? "null": status}</p>
          </div>
        </div>
          </>
    )
}

export default AllServerCard;