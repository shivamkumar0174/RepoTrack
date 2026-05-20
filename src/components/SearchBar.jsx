import { useState } from 'react'

function SearchBar({onSearch}){
    const [username, setUsername] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!username.trim()) return;

        onSearch(username);

        setUsername("");
    }

    return(
        <>
        <form
        onSubmit={handleSubmit}
        className='flex gap-2 justify-center'
        >
            <input
            type='text'
            placeholder='enter your github username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='text-white border px-4 py-1 mt-2 rounded-lg w-80 '
            />

        <button
        type='submit'
        className="bg-black text-white border cursor-pointer px-5 py-2 ml- mt-2 rounded-lg">search</button>
        </form>
        
        </>
    )
}

export default SearchBar;