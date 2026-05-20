import { useState } from 'react'

function ProfileCard(user){

    return(
        <div className='bg-white shadow-lg rounded-xl p-6 mt-8 w-full max-w-2xl mx-auto'>
            <div className='flex gap-6 items-center'>
                <img
          src={user.avatar_url}
          alt={user.login}
          className="w-28 h-28 rounded-full"
        />
        <div>
            <h2 className="text-2xl font-bold">
            {user.name}
          </h2>
          <p className="text-gray-600">
            @{user.login}
          </p>
          <p className="mt-2">
            {user.bio}
          </p>
          <div className="flex gap-4 mt-4">
              <span>Followers: {user.followers}</span>
            <span>Following: {user.following}</span>
            <span>Repos: {user.public_repos}</span>
          </div>
        </div>
            </div>
        </div>
    )

}

export default ProfileCard;