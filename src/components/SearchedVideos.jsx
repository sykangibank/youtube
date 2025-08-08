import { useParams } from "react-router-dom";
import './SearchedVideos.css';
import VideoCard from './VideoCards.jsx';
import useYoutubeAPI from '../hooks/useYoutubeAPI.js';

const SearchedVideos = () => {
  const {keyword} = useParams();
  
  // 커스텀 훅 사용
  const {videos, loading, error} = useYoutubeAPI('search', keyword);

  if (loading) return <div className="flex justify-center items-center h-64 text-gray-400">로딩중...</div>;
  if (error) return <div className="flex justify-center items-center h-64 text-red-400">에러가 발생했습니다: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-medium text-white mb-6">'{keyword}' 검색 결과</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <VideoCard items={videos} />
      </div>
    </div>
  )
}

export default SearchedVideos;