import { useEffect, useState } from "react";
import HomeCards from "../components/HomeCards";
// import Search from "../components/Search";
import InfiniteScroll from 'react-infinite-scroll-component';


let page = 1;

const fetchData = async ( setLocationData, locationData) => {
  const response = await fetch(`http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/base-search?page=${page}&count=100`);
  const data = await response.json();
  setLocationData([...locationData, ...data.results]);
};

const refresh = setItems => {};

function Home() {
  const [locationData, setLocationData] = useState([]);
 
  useEffect(() => {
    fetchData(setLocationData, locationData);
  }, []);
  return (
    <>
    <section class="services flex flex-col justify-center items-center">
     <div class="overrall-container flex justify-center w-full">
         <InfiniteScroll
      dataLength={locationData.length} //This is important field to render the next data
      next={() => {
        fetchData(setLocationData, locationData);
      }}
      hasMore={true}
      loader={<h4 className="text-center">Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      // below props only if you need pull down functionality
      refreshFunction={refresh}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: "center" }}># 8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: "center" }}># 8593; Release to refresh</h3>
      }
    >
       <div className="text-center grid gap-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-center justify-center">
           {locationData?.map((dataResult)=> {
                return(
                 <>
                 {dataResult? <HomeCards dataResult={dataResult}/> : "loading..."}
                 </>
               )
           } 
           )}
         </div>
    </InfiniteScroll>
    </div>
    </section>
    </>
  );
}

export default Home;