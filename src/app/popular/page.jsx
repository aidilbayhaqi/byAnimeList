"use client"
import React, { useEffect, useState } from 'react'
import HeaderMenu from '../utilities/headerMenu'
import Pagination from '../utilities/pagination'
import AnimeList from "@/app/components/animelist";
import { getAnimeResponse } from '../libs/library';


const popular = () => {

  const [page, setPage] = useState(1)
  const [data,setData] = useState([])

  const fetchData = async()=>{
    const topAnime = await getAnimeResponse("top/anime", `page${page}`)
    setData(topAnime)
  }

  useEffect(()=>{
    fetchData()
  }, [page])
  

  return (
    <>
      <HeaderMenu title={`ANIME POPULAR #${page}`} />
      <AnimeList api={data} />
      <Pagination page={page} lastPage={data.pagination?.last_visible_page } setPage={setPage}/>
    </>
  );
}

export default popular