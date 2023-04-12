import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import EngagementCards from "../components/EngagementCards";
import InfiniteScroll from 'react-infinite-scroll-component';

function UserEngagements(){
    const [userEngagementData, setUserEngagementData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    let { engagementId } = useParams();

  const fetchPages = async (setUserEngagementData, userEngagementData) => {
    const response = await fetch(`http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/engagements/${engagementId}?page=${page}&count=100`);
    const data = await response.json();
    setUserEngagementData([...userEngagementData, ...data.results]);
      setIsLoading(false)
      setPage(page => page + 1);
      console.log(page);
  };

  const refresh = setUserEngagementData => {};
  useEffect(() => {
    fetchPages(setUserEngagementData, userEngagementData);
  }, []);

          return (
            <>
             <section className="services flex flex-col justify-center items-center">
      <div className="services-text text-black mb-8">
         <p>Engagement Page</p>
       </div>
       <div className="overrall-container flex justify-center w-full mt-8">
       <InfiniteScroll
      dataLength={userEngagementData.length} //This is important field to render the next data
      next={() => {
        fetchPages(setUserEngagementData, userEngagementData);
      }}
      hasMore={true}
      loader={isLoading?<h4 className="text-center">Loading...</h4> : userEngagementData.length === 0 && <h4 className="text-center">User has 0 engagements</h4>}
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
       {userEngagementData.map((item)=> {
                         return(
                          <>
                          {userEngagementData? <EngagementCards item={item}/> : "loading..."}
                          </>
                        )
                    } 
                    )}
         </div>
    </InfiniteScroll>
           </div>
       </section>
            {/* {
              userEngagementData? 
              <section className="services flex flex-col justify-center items-center">
                <div class="services-text text-black mt-2">
                  <p className='text-center'>Engagements Pages</p>
                </div>
              <div className="overrall-container flex justify-center w-full mt-8">
                {userEngagementData.length === 0 ? <p className='text-center'>user has 0 engagements</p> :
                    <div className="text-center grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-center justify-center">
                    {userEngagementData?.map((item)=> {
                         return(
                          <>
                          {userEngagementData.length? <EngagementCards item={item}/> : "loading..."}
                          </>
                        )
                    } 
                    )}
                  </div>
}
              </div>
            </section> :
            <p>loading...</p>
            }
            */}
            </> 
          
          )
}

export default UserEngagements;
