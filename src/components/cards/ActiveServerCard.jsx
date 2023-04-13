
function ActiveServerCard({ activeServerResult }){
    const { ip, type, value, running, started_at, finished_at, status} = activeServerResult;
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
          <p>Type: {type === null? "-": type}</p>
          </div>
          <div className="services-text text-black">
            <p>Value: {value === null? "-": value}</p>
          </div>
          <div className="services-text text-black">
          <p>Running: {running === true? "Yes": "No"}</p>
          </div>
          <div className="services-text text-black">
            <p>Started: {started_at === null? "-": started_at}</p>
          </div>
          <div className="services-text text-black">
            <p>Finshed: {finished_at === null? "-": finished_at}</p>
          </div>
          <div className="services-text text-black mt-4 whitespace-nowrap font-semibold">
            <p style={{fontSize: "12px", color:" rgb(249, 72, 84)"}}>{status === null? "": status}</p>
          </div>
        </div>
          </>
    )
}

export default ActiveServerCard;