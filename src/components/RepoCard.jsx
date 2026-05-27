import {
  Star,
  GitFork,
  ExternalLink,
} from "lucide-react";

function RepoCard({ repo }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:border-blue-500/40 transition duration-300 hover:translate-y-[-4px]">
      
      {/* Top Section */}
      <div className="flex items-start justify-between gap-4">
        
        <div>
          {/* Repo Name */}
          <h2 className="text-2xl font-bold text-white">
            {repo.name}
          </h2>

          {/* Description */}
          <p className="text-slate-400 mt-3 leading-7">
            {repo.description || "No description available."}
          </p>
        </div>

        {/* External Link */}
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-purple-500 transition"
        >
          <ExternalLink size={18} />
        </a>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-wrap items-center gap-6 mt-8">
        
        {/* Language */}
        <div className="flex items-center gap-2">
          
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>

          <span className="text-slate-300">
            {repo.language || "Unknown"}
          </span>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-2 text-slate-300">
          <Star size={18} className="text-yellow-400" />
          <span>{repo.stargazers_count}</span>
        </div>

        {/* Forks */}
        <div className="flex items-center gap-2 text-slate-300">
          <GitFork size={18} className="text-purple-400" />
          <span>{repo.forks_count}</span>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;