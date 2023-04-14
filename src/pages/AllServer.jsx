import { useEffect, useState } from 'react'
import AllServerCard from "../components/cards/AllServerCard";


const Url = `http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/servers?filter=ALL`

function AllServer(){
    const [allServer, setAllServer] = useState();
    
const fetchAllServer = async () => {
    const response = await fetch(Url);
    const data = await response.json();
    setAllServer(data.servers);
    console.log(data)
  };

  useEffect(() => {
    fetchAllServer();
  }, []);


     if(allServer){
      return (
        <>
        <section class="services flex flex-col justify-center items-center">
        <div class="overrall-container flex justify-center w-full">
          <div className="text-center grid gap-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-center justify-center">
              {allServer?.map((serverResult)=> {
                   return(
                    <>
                    {serverResult? <AllServerCard serverResult={serverResult}/> : "loading..."}
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


export default AllServer;