import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LikedCard from "../components/cards/LikedCard";
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchLikedPages } from "../services/pages"


function LikedPages(){
  const [likedPages, setLikedPages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { likeId } = useParams();
  const [page, setPage] = useState(1);

// const fetchPages = async (setLikedPages, likedPages) => {
//   const response = await fetch(`http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/likes/${likeId}?page=${page}&count=100`);
//   const data = await response.json();
//   setLikedPages([...likedPages, ...data.results]);
//   setIsLoading(false)
//   setPage(page => page + 1);
// };
const refresh = setLikedPages => {};

  useEffect(() => {
    fetchLikedPages(setLikedPages, likedPages, likeId, setPage, page, setIsLoading);
  }, []);

    return(
        <>
        <section className="services flex flex-col justify-center items-center">
      <div className="services-text text-black mb-8">
         <p>Liked Pages</p>
       </div>
       <div className="overrall-container flex justify-center w-full mt-8">
       <InfiniteScroll
      dataLength={likedPages.length} //This is important field to render the next data
      next={() => {
        fetchLikedPages(setLikedPages, likedPages, likeId, setPage, page, setIsLoading);
      }}
      hasMore={true}
      loader={isLoading?<h4 className="text-center">Loading...</h4> : likedPages.length === 0 && <h4 className="text-center">User has 0 liked pages</h4>}
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
       {likedPages?.map((likeResult)=> {
                return(
                 <>
                 {likeResult? <LikedCard likeResult={likeResult}/> : "loading..."}
                 </>
               )
           } 
           )}
         </div>
    </InfiniteScroll>
           </div>
       </section>
    </>
    )
}

export default LikedPages;
