"use client"
import React, { useEffect, useState } from 'react'
import { getAnimeResponse } from '../libs/library'
import HeaderMenu from '../utilities/headerMenu'
import Pagination from '../utilities/pagination'
import AnimeList from '../components/animelist'

const upcoming = () => {
  const [page,setPage] = useState(1)
  const [data,setData] = useState([])

  const fetchData = async()=>{
    const newAnime = await getAnimeResponse("seasons/upcoming", `page${page}`)
    setData(newAnime)
  }

  useEffect(()=>{
    fetchData()
  }, [page])

  return (
    <>
      <HeaderMenu title={`UPCOMING ANIME #${page}`} />
      <AnimeList api={data} />
      <Pagination
        page={page}
        lastPage={data.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
}

export default upcoming