import { useState } from "react";
// import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import RepoCard from "./components/RepoCard";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  const handleSearch = async (username) => {
  setLoading(true);

  try {
    // User Data
    const response = await fetch(
      `https://api.github.com/users/${username}`
    );

    const data = await response.json();
    setUser(data);

    // Repo Data
  
    const repoResponse = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    const repoData = await repoResponse.json();
    setRepos(repoData);

  } catch (error) {
    console.log(error);
  }

  setLoading(false);
};


  return (
    <div className="relative min-h-screen bg-[#020817] text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-10">
        
        {/* Heading */}
        <h1 className="text-5xl text-center font-bold leading-tight">
          <span className="text-white">GitHub </span>

          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Profile Finder
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-center text-slate-400 mt-4 max-w-2xl mx-auto">
          Search any GitHub user and explore their profile,
          repositories and statistics.
        </p>

        {/* Search Bar */}
        <div className="mt-10 flex justify-center">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center mt-10 text-blue-400 text-lg">
            Loading...
          </p>
        )}

        {/* Main Grid */}
        {user && (
          <div className="grid lg:grid-cols-3 gap-8 mt-14">
            
            {/* Left Side */}
            <div>
              <ProfileCard user = {user} />
            </div>

            {/* Right Side */}
            <div className="lg:col-span-2">
              
              {/* Placeholder Card */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 h-full">
                
                <h2 className="text-2xl font-bold mb-6">
                  Repositories
                </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
  {repos.map((repo) => (
    <RepoCard key={repo.id} repo={repo} />
  ))}
</div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default App;