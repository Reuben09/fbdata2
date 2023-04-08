import { useEffect, useState } from "react";
import HomeCards from "../components/HomeCards";
import Search from "../components/Search";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from "axios";

const Url ="http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/base-search?page=1&count=100";

function Home() {
  const [locationData, setLocationData] = useState();
  const fetchData = async () => {
    const response = await fetch(Url);
    const data = await response.json();
    setLocationData(data.results);
    console.log(data.results);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    {locationData? 
     <section class="services">
     <div class="overrall-container">
       <div class="services-text text-black mt-2">
         <p>FB Data</p>
       </div>
       {/* <div className="mt-2">
         <Search />
       </div> */}
           <div className="text-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-center justify-center">
           {locationData?.map((dataResult)=> {
                return(
                 <>
                 {dataResult? <HomeCards dataResult={dataResult}/> : "loading..."}
                 </>
               )
           } 
           )}
         </div>
     </div>
   </section>
    : <p className="text-center">
      loading...
      </p>}
    </>
  );
}

export default Home;