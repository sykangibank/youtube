import { useState, useEffect } from "react";
import searchData from '../data/search.json';
import popularData from '../data/popular.json';
import relatedData from '../data/related.json';
import channelData from '../data/channel.json';

const useYoutubeAPI = (searchType='search', query='') => {
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  const getTestData = (type) => {
    switch(type){
      case 'search':
        return searchData.items || [];
      case 'popular':
        return popularData.items || [];
      case 'related':
        return relatedData.items || [];
      case 'channel':
        return channelData.items || [];
      default:
        return [];
    }
  }

  useEffect(()=>{
    const fetchVideos = async() => {
      try{
        setLoading(true);
        setError(null);

        if(!API_KEY){
          console.log(`Using ${searchType} test data`);
          setVideos(getTestData(searchType));
          setLoading(false);
          return;
        }

        let apiUrl = '';

        switch(searchType){
          case 'search':
            // 검색 API
            apiUrl =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=${API_KEY}`;
            break;
          case 'popular': 
            // 인기 동영상 API
            apiUrl =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=${API_KEY}`;
            break;
          case 'related':
            // 관련 동영상 API (특정 비디오 ID 필요)
            apiUrl =`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${query}&type=video&order=relevance&maxResults=10&key=${API_KEY}`;
            break;
          case 'channel':
            // 채널의 동영상 API
            apiUrl =`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${query}&key=${API_KEY}`;
            break;
          default:
            throw new Error(`Invalid search type: ${searchType}`);
        }

        const response = await fetch(apiUrl);

        if(!response.ok){
          throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        setVideos(data.items || []);

      } catch(err){
        console.log('API 호출 오류:', err);
        console.log(`Fallback to ${searchType} test data dut to error`);
        setVideos(getTestData(searchType));
      } finally {
        setLoading(false);
      }
    };

    if (searchType === 'search' && !query) {
      // 검색어가 없으면 로딩 종료
      setLoading(false);
      return;
    }

    if (searchType === 'channel' && !query) {
      // 채널 ID가 없으면 로딩 종료
      setLoading(false);
      return;
    }

    if (searchType === 'related' && !query) {
      // 관련 비디오 ID가 없으면 로딩 종료
      setLoading(false);
      return;
    }

    fetchVideos();

  }, [searchType, query, API_KEY]);

  return {videos, loading, error};
}

export default useYoutubeAPI;