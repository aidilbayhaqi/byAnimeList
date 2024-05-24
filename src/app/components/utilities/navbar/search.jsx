'use client'
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const Search = ()=>{
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event)=>{
      const keyword = searchRef.current.value;
        if(!keyword || keyword.trim()=="")return
        if(event.key === 'Enter'|| event.type ==='click'){
          event.preventDefault();
          router.push(`/search/${keyword}`);
        }
    }

    return (
      <div className="relative">
        <input
          placeholder="Search Anime..."
          className="p-3 rounded w-full inputSearch"
          ref={searchRef}
          onKeyDown={handleSearch}
        ></input>
        <button className="absolute top-3 end-3" onClick={handleSearch}>
          <MagnifyingGlass size={25} />
        </button>
      </div>
    );
}

export default Search