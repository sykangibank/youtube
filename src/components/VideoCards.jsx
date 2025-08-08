
import { Link } from 'react-router-dom';

const VideoCard = ({items}) => {
  const getVideoId = (item) => {
    if(item.id && typeof item.id === 'object' && item.id.videoId){
      return item.id.videoId;
    } else if(item.id && typeof item.id === 'string'){
      return item.id;
    }
    return 'unknown';
  }

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

  return(
    <>
      {items.map((item,index) => (
        <Link 
          key={index}
          to={`/Videos/watch/${getVideoId(item)}`} 
          state={{ videoData: item }}
          className="block group cursor-pointer"
        >
          <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors">
            {/* 썸네일 */}
            <div className="relative aspect-video bg-gray-800">
              <img 
                src={item.snippet.thumbnails.high.url} 
                alt={item.snippet.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* 비디오 정보 */}
            <div className="p-3">
              {/* 제목 */}
              <h3 className="text-white text-sm font-medium line-clamp-2 mb-1 group-hover:text-gray-200">
                {item.snippet.title}
              </h3>
              
              {/* 채널명 */}
              <p className="text-gray-400 text-sm mb-1 hover:text-white">
                {item.snippet.channelTitle}
              </p>
              
              {/* 게시일 */}
              <p className="text-gray-400 text-sm">
                {formatDate(item.snippet.publishedAt)}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default VideoCard;