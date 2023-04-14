import { useEffect, useState } from "react";
import HomeCards from "../components/cards/HomeCards";
import Search from "../components/Search";
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchProfile, fetchLocation, fetchProfileById } from "../services/pages"

function Home() {
  const [locationData, setLocationData] = useState([]);
  const [ selectedLocation, setSelectedLocation] = useState("All")
  const [locationId, setLocationId] = useState("");
  const [locationIdData, setLocationIdData] = useState([]);
  const [locationList, setLocationList] = useState();
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1);

   const refresh = setItems => {};
 
   const onLocationChange = (event)=> {
    let id = event.target.value;
    setLocationId(id);
    console.log(locationId)
    setSelectedLocation(event.target.value)
  }

  useEffect(() => {
    fetchProfile(setLocationData, locationData, setPage, page, setIsLoading);
    fetchLocation(setLocationList)
  }, []);

  useEffect(()=> {
    setIsLoading(true)
    if(locationId){
      setLocationIdData([]);
      fetchProfileById(setLocationIdData, locationId);
      setIsLoading(false)
    }
  },[locationId]);

  return (
    <>
    <section class="services flex flex-col justify-center items-center">
      <div className="flex justify-center flex-col w-full mb-8">
        {
          locationList && <Search locationList = {locationList} selectedLocation={selectedLocation} onLocationChange={onLocationChange}/>
        }
      </div>
     <div class="overrall-container flex justify-center w-full">
         <InfiniteScroll
      dataLength={locationData.length} //This is important field to render the next data
      next={() => {
        fetchProfile(setLocationData, locationData, setPage, page, setIsLoading);
      }}
      hasMore={true}
      loader={isLoading && <h4 className="text-center">Loading...</h4>}
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
           {locationIdData.length > 0 ? locationIdData?.map((dataResult)=> {
                return(
                 <>
                 {dataResult? <HomeCards dataResult={dataResult}/> : "loading..."}
                 </>
               )
           }): 
           locationData?.map((dataResult)=> {
            return(
             <>
             {dataResult? <HomeCards dataResult={dataResult}/> : "loading..."}
             </>
           )
       })
           }
         </div>
    </InfiniteScroll>
    </div>
    </section>
    </>
  );
}

export default Home;
