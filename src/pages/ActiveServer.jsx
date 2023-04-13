import { useEffect, useState } from 'react'
import ActiveServerCard from "../components/cards/ActiveServerCard";


const Url = `http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/servers?filter=ACTIVE`

function ActiveServer(){
    const [activeServer, setActiveServer] = useState();
    
const fetchActiveServer = async () => {
    const response = await fetch(Url);
    const data = await response.json();
    setActiveServer(data.servers);
    console.log(data)
  };

  useEffect(() => {
    fetchActiveServer();
  }, []);


     if(activeServer){
      return (
        <>
        <section class="services flex flex-col justify-center items-center">
        <div class="overrall-container flex justify-center w-full">
          <div className="text-center grid gap-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-center justify-center">
              {activeServer?.map((activeServerResult)=> {
                   return(
                    <>
                    {activeServerResult? <ActiveServerCard activeServerResult={activeServerResult}/> : "loading..."}
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


export default ActiveServer;