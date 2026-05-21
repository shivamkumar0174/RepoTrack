import { MapPin, Link as LinkIcon, Users, Calendar } from "lucide-react";

function ProfileCard( {user} ) {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">
      
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/30"
        />
        {/* Name */}
        <h2 className="mt-6 text-3xl font-bold text-white">
          {user.name || user.login}
        </h2>

        {/* Username */}
        <p className="text-slate-400 text-lg mt-1">@{user.login}</p>

        {/* Bio */}
        <p className="text-center text-slate-300 mt-5 leading-7 max-w-sm">{user.bio}</p>
      </div>

      {/* Info */}
      <div className="mt-8 space-y-4 text-slate-300">
        
        <div className="flex items-center gap-3">
          <MapPin size={18} className="text-blue-400" />
          <span>{user.location || "no location"}</span>
        </div>

        <div className="flex items-center gap-3">
          <Calendar size={18} className="text-pink-400" />
           <span>
          {" "}
          {new Date(user.created_at).toLocaleDateString()}
        </span>
        </div>
      </div>

      {/* Followers Section */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        
        <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-4 text-center">
          <h3 className="text-2xl font-bold text-white"> </h3>
          <p className="text-slate-400 mt-1 flex items-center justify-center gap-2">
            <Users size={16} />
            Followers: <span className="text-white">{user.followers}</span>
          </p>
        </div>

        <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-4 text-center">
          <h3 className="text-2xl font-bold text-white"> </h3>
          <p className="text-slate-400 mt-1 flex items-center justify-center gap-2">
            <Users size={16} />
            Following: <span className="text-white">{user.following}</span>
          </p>
        </div>
      </div>

      {/* Button */}
      <button onClick={() => window.open(user.html_url, "_blank")}
      className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 
      font-semibold text-white hover:scale-[1.02] transition duration-300 cursor-pointer
      shadow-lg shadow-blue-500/20">
        View GitHub Profile
      </button>
    </div>
  );
}

export default ProfileCard;