import { useParams } from "react-router-dom";
import './SearchedVideos.css';
import VideoCards from './VideoCards.jsx';
import useYoutubeAPI from '../hooks/useYoutubeAPI.js';

const SearchedVideos = () => {
  const {query} = useParams();
  
  // 커스텀 훅 사용
  const {videos, loading, error} = useYoutubeAPI('search', query);

  if (loading) return <div className="flex justify-center items-center h-64 text-gray-400">로딩중...</div>;
  if (error) return <div className="flex justify-center items-center h-64 text-red-400">에러가 발생했습니다: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-medium text-white mb-6">'{query}' 검색 결과</h2>
      <VideoCards videos={videos} />
    </div>
  )
}

export default SearchedVideos;