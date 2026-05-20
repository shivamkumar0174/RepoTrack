import { useState } from 'react'
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
// import ProfileCard from "./components/ProfileCard";


function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);


  return (
    <div className='bg-black'>
    <Navbar></Navbar>
    <div className="min-h-screen bg-[#020817]  p-8" >
      <h1 className="text-4xl text-center font-bold bg-gradient-to-r from-blue-500 to-purple-500 
      bg-clip-text text-transparent">
        <span className='text-white'>GitHub </span>Profile Finder
      </h1>
        <p className="text-xl text-center text-white ">Search any GitHub user 
          and explore their profile, repositories and statistics</p>
      <div className="mt-8">
  <SearchBar onSearch={handleSearch} />
</div>
    </div>
    </div>
  )
}

export default App
