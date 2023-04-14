import { useEffect, useState } from 'react'
import AllServerCard from "../../components/cards/AllServerCard";
import { fetchAllServer } from "../../services/pages"

function AllServer(){
    const [allServer, setAllServer] = useState();
    

  useEffect(() => {
    fetchAllServer(setAllServer); 
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