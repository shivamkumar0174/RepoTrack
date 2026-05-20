import { Github } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-[#050816]/90 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* Navlogo */}
        <div className="flex items-center gap-2">
          <Github size={22} className="text-white" />
          <h1 className="text-white font-bold text-xl">RepoTrack</h1>
        </div>

        {/* Navlinks */}
        <div className="flex gap-6">
          <a
            href="#"
            className="text-white border-b-2 border-blue-500 pb-1"
          >
            Home
          </a>

          <a
            href="#"
            className="hover:text-white transition duration-300"
          >
            Explore
          </a>
        </div>

        {/* RightSide */}
        <div>
          <button className="w-11 h-11 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-purple-500 transition">
            <Github size={22} className="text-white" />
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;