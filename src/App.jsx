// import { BrowsRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main.jsx'
import Nav from './components/Nav.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SearchedVideos from './components/SearchedVideos.jsx';
import VideoDetail from './components/VideoDetail.jsx';
import './App.css';

function App() {



  return (
    <div className="min-h-screen bg-gray-900">
      <BrowserRouter basename="/youtube">
        <Nav/>
        {/* 메인 콘텐츠 */}
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/Videos" element={<Main/>}></Route>
            <Route path={`/Videos/:query`} element={<SearchedVideos/>}></Route>
            <Route path={`/Videos/watch/:id`} element={<VideoDetail/>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
