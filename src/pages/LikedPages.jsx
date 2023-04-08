import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LikedCards from '../components/LikedCard';

function LikedPages(){
    const [likedPages, setLikedPages] = useState();
    let { likeId } = useParams();

  const fetchPages = async () => {
    const response = await fetch(`http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/likes/${likeId}?page=1&count=100`);
    const data = await response.json();
    setLikedPages(data.results);
  };
  useEffect(() => {
    fetchPages();
  }, []);

    return(
        <>
    {likedPages? 
     <section class="services">
     <div class="overrall-container">
       <div class="services-text text-black mt-2">
         <p>Liked Pages</p>
       </div>
           <div className="text-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-center justify-center">
           {likedPages?.map((likeResult)=> {
                return(
                 <>
                 {likeResult? <LikedCards likeResult={likeResult}/> : "loading..."}
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
    )
}

export default LikedPages;