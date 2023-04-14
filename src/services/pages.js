import { request } from "../utils/axios";

export const fetchProfile = async ( setLocationData, locationData, setPage, page) => {
    try {
      const res = await request.get(`base-search?page=${page}&count=100`);
       setLocationData([...locationData, ...res.data.results]);
       setPage(page => page + 1);

    } catch (err) {
      throw err;
    }
  };

  export const fetchUserEngagements = async (setUserEngagementData, userEngagementData, engagementId, setPage, page, setIsLoading) => {
    try {
      const res = await request.get(`engagements/${engagementId}?page=${page}&count=100`);
      setUserEngagementData([...userEngagementData, ...res.data.results]);
       setPage(page => page + 1);
       setIsLoading(false)
    } catch (err) {
      throw err;
    }
  };

  export const fetchLikedPages = async (setLikedPages, likedPages, likeId, setPage, page, setIsLoading) => {
    try {
      const res = await request.get(`likes/${likeId}?page=${page}&count=100`);
      setLikedPages([...likedPages, ...res.data.results]);
       setPage(page => page + 1);
       setIsLoading(false)
    } catch (err) {
      throw err;
    }
  };

  export const fetchLocation = async (setLocationList) => {
    try {
      const res = await request.get('locations');
      setLocationList(res.data.locations);
    } catch (err) {
      throw err;
    }
  };

  export const fetchAllServer = async (setAllServers) => {
    try {
      const res = await request.get('servers?filter=ALL');
      setAllServers(res.data.servers);
    } catch (err) {
      throw err;
    }
  };

  export const IdleServer = async (setIdleServer) => {
    try {
      const res = await request.get('servers?filter=IDLE');
      setIdleServer(res.data.servers);
    } catch (err) {
      throw err;
    }
  };

  export const ActiveServer = async (setActiveServer) => {
    try {
      const res = await request.get('servers?filter=ACTIVE');
      setActiveServer(res.data.servers);
    } catch (err) {
      throw err;
    }
  };
