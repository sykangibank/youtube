import {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';


const Nav = () => {

  const [searchQuery, setValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/Videos/${searchQuery}`);
    }
  };

  return(
    <>
        {/* YouTube 스타일 헤더 */}
        <header className="flex items-center justify-between px-6 py-3 bg-gray-900 border-b border-gray-700">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">YT</span>
              </div>
              <span className="text-white text-xl font-medium">YouTube</span>
            </Link>
          </div>
          
          {/* 검색 바 */}
          <div className="flex items-center max-w-2xl flex-1 mx-8">
            <form onSubmit={handleSubmit} className="flex w-full">
              <input 
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500" 
                type="text" 
                value={searchQuery} 
                onChange={(e)=>{setValue(e.target.value)}}
                placeholder="검색"
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-gray-700 border border-gray-600 border-l-0 rounded-r-full hover:bg-gray-600 transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
          
          <div className="w-32"></div>
        </header>

    </>
  )
}

export default Nav;