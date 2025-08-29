import VideoCards from "../components/VideoCards.jsx";
import useYoutubeAPI from "../hooks/useYoutubeAPI.js";

const Main = () => {
  // 인기 동영상 가져오기 (테스트 데이터 사용)
  const { videos, loading, error } = useYoutubeAPI('popular');

  if (loading) return <div className="flex justify-center items-center h-64 text-gray-400">로딩중...</div>;
  if (error) return <div className="flex justify-center items-center h-64 text-red-400">에러가 발생했습니다: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-medium text-white mb-6">추천 동영상</h1>
      <VideoCards videos={videos} />
    </div>
  )
}

export default Main;