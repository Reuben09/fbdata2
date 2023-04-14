import { useEffect, useState } from 'react'
import IdleServerCard from "../../components/cards/IdleServerCard";
import { fetchIdleServer } from "../../services/pages"

const Url = `http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/servers?filter=IDLE`

function IdleServer(){
    const [idleServer, setIdleServer] = useState();
    
const fetchIdleServer = async () => {
    const response = await fetch(Url);
    const data = await response.json();
    setIdleServer(data.servers);
    console.log(data)
  };

  useEffect(() => {
    fetchIdleServer(setIdleServer);
  }, []);


     if(idleServer){
      return (
        <>
        <section class="services flex flex-col justify-center items-center">
        <div class="overrall-container flex justify-center w-full">
          <div className="text-center grid gap-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-center justify-center">
              {idleServer?.map((idleServerResult)=> {
                   return(
                    <>
                    {idleServerResult? <IdleServerCard idleServerResult={idleServerResult}/> : "loading..."}
                    </>
                  )
              } 
              )}
            </div>
       </div>
       </section>
       </>
    )
     } else {
      return(
        <p className="text-center">Loading...</p>
      )
     }
}


export default IdleServer;