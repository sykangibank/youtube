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
    console.log(`Getting test data for type: ${type}`);
    switch(type){
      case 'search':
        console.log(`Search test data length: ${searchData.items ? searchData.items.length : 0}`);
        return searchData.items || [];
      case 'popular':
        console.log(`Popular test data length: ${popularData.items ? popularData.items.length : 0}`);
        return popularData.items || [];
      case 'related':
        console.log(`Related test data length: ${relatedData.items ? relatedData.items.length : 0}`);
        return relatedData.items || [];
      case 'channel':
        console.log(`Channel test data length: ${channelData.items ? channelData.items.length : 0}`);
        return channelData.items || [];
      default:
        console.log(`Unknown type: ${type}, returning empty array`);
        return [];
    }
  }

  useEffect(()=>{
    const fetchVideos = async() => {
      try{
        setLoading(true);
        setError(null);

        if(!API_KEY){
          console.log(`No API key found, using ${searchType} test data`);
          const testData = getTestData(searchType);
          console.log(`Test data loaded:`, testData);
          console.log(`Setting videos with ${testData.length} items`);
          setVideos(testData);
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
          console.log(`API Error ${response.status}: ${response.statusText}`);
          throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(`Successfully fetched ${searchType} data:`, data);
        setVideos(data.items || []);

      } catch(err){
        console.log('API 호출 오류:', err);
        console.log(`Fallback to ${searchType} test data due to error`);
        const fallbackData = getTestData(searchType);
        console.log(`Fallback data received:`, fallbackData);
        console.log(`Setting videos with ${fallbackData.length} items`);
        setVideos(fallbackData);
        setError(null); // 테스트 데이터를 사용하므로 에러 상태 해제
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