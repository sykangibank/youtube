import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useYoutubeAPI from '../hooks/useYoutubeAPI.js';
import VideoCards from './VideoCards.jsx';

const VideoDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const videoData = location.state?.videoData;
  
  // 관련 동영상 API 호출
  const { videos: relatedVideos, loading: relatedLoading, error: relatedError } = useYoutubeAPI('related', videoData?.snippet?.channelId);

  console.log('Video ID:', id);
  console.log('Video Data:', videoData);
  console.log('Related Videos:', relatedVideos);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 메인 비디오 영역 */}
        <div className="lg:col-span-2">
          {/* 비디오 플레이어 영역 - YouTube iframe */}
          <div className="aspect-video bg-black rounded-lg mb-4 overflow-hidden">
            <iframe 
              src={`https://www.youtube.com/embed/${id}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          
          {/* 비디오 정보 */}
          {videoData && (
            <div className="space-y-4">
              <h1 className="text-xl font-medium text-white">
                {videoData.snippet.title}
              </h1>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {videoData.snippet.channelTitle.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{videoData.snippet.channelTitle}</h3>
                    <p className="text-gray-400 text-sm">{new Date(videoData.snippet.publishedAt).toLocaleDateString()}</p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors">
                    👍 좋아요
                  </button>
                  <button className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors">
                    공유
                  </button>
                </div>
              </div>
              
              {/* 설명 */}
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-300 text-sm whitespace-pre-wrap">
                  {videoData.snippet.description || '설명이 없습니다.'}
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* 사이드바 (관련 동영상) */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-white">관련 동영상</h2>
          
          {relatedLoading && (
            <div className="text-gray-400 text-sm">관련 동영상을 불러오는 중...</div>
          )}
          
          {relatedError && (
            <div className="text-red-400 text-sm">관련 동영상을 불러올 수 없습니다.</div>
          )}
          
          {!relatedLoading && !relatedError && relatedVideos.length > 0 && (
            <div className="space-y-3">
              <RelatedVideoCards items={relatedVideos} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// 관련 동영상용 카드 컴포넌트 (사이드바 스타일)
const RelatedVideoCards = ({ items }) => {
  const getVideoId = (item) => {
    if(item.id && typeof item.id === 'object' && item.id.videoId){
      return item.id.videoId;
    } else if(item.id && typeof item.id === 'string'){
      return item.id;
    }
    return 'unknown';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return '오늘';
    if (diffDays === 1) return '1일 전';
    if (diffDays < 7) return `${diffDays}일 전`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)}주 전`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)}개월 전`;
    return `${Math.floor(diffDays / 365)}년 전`;
  };

  return (
    <>
      {items.slice(0, 20).map((item, index) => (
        <Link
          key={index}
          to={`/Videos/watch/${getVideoId(item)}`}
          state={{ videoData: item }}
          className="block"
        >
          <div className="flex space-x-3 hover:bg-gray-800 p-2 rounded-lg transition-colors cursor-pointer">
            {/* 썸네일 */}
            <div className="flex-shrink-0">
              <img 
                src={item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.high.url} 
                alt={item.snippet.title}
                className="w-40 h-24 object-cover rounded-lg"
              />
            </div>
            
            {/* 비디오 정보 */}
            <div className="flex-1 min-w-0">
              <h3 className="text-white text-sm font-medium line-clamp-2 mb-1">
                {item.snippet.title}
              </h3>
              
              <p className="text-gray-400 text-xs mb-1">
                {item.snippet.channelTitle}
              </p>
              
              <p className="text-gray-400 text-xs">
                {formatDate(item.snippet.publishedAt)}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default VideoDetail;