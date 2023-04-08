import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import EngagementCards from "../components/EngagementCards";

function UserEngagements(){
    const [userEngagementData, setUserEngagementData] = useState();
    let { engagementId } = useParams();

  const fetchPages = async () => {
    const response = await fetch(`http://facebookscraper-env.eba-cjxrmque.us-east-1.elasticbeanstalk.com/engagements/${engagementId}?page=1&count=100`);
    const data = await response.json();
    setUserEngagementData(data.results);
  };
  useEffect(() => {
    fetchPages();
  }, []);

          return (
            <>
            {
              userEngagementData? 
              <section className="services">
              <div className="overrall-container">
                <div class="services-text text-black mt-2">
                  <p className='text-center'>Engagements Pages</p>
                </div>
                {userEngagementData.length === 0 ? <p className='text-center'>user has 0 engagements</p> :
                    <div className="text-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-center justify-center">
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
           
            </> 
          
          )
}

export default UserEngagements;
