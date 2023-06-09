import { useEffect, useState } from "react";
import HomeCards from "../components/cards/HomeCards";
import Search from "../components/Search";
import InfiniteScroll from 'react-infinite-scroll-component';


function Home() {
  const [locationData, setLocationData] = useState([]);
  const [page, setPage] = useState(1);

const fetchData = async ( setLocationData, locationData) => {
  const response = await fetch(`http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/base-search?page=${page}&count=100`);
  const data = await response.json();
  setLocationData([...locationData, ...data.results]);
  setPage(page => page + 1);
};

const refresh = setItems => {};
 
  useEffect(() => {
    fetchData(setLocationData, locationData);
  }, []);
  return (
    <>
    <section class="services flex flex-col justify-center items-center">
      <div className="flex justify-center flex-col w-full mb-8">
      <Search />
      </div>
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
