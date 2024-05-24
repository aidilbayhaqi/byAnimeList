import Video from '@/app/components/utilities/videoTrailer'
import { getAnimeResponse } from '@/app/libs/library'
import Image from 'next/image'
import React from 'react'
import ReactPlayer from 'react-player'

const page = async({params: {id}}) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    console.log (anime)
 return (
   <>
     <div className="jumbotron grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3 p-4 md:text-xl-text-md">
       <div className="m-auto mt-0">
         <Image
           src={anime.data.images.webp.image_url}
           width={300}
           height={300}
         ></Image>
       </div>
       <div>
         <h3 className="font-bold text-4xl pb-4 pt-3">{anime.data.title}</h3>
         <p className="pr-7 text-justify">{anime.data.type}</p>
         <p className="pr-7 text-justify">Episodes : {anime.data.episodes}</p>
         <p className="pr-7 text-justify">Rank : {anime.data.rank}</p>
         <p className="pr-7 text-justify">Score : {anime.data.score}</p>
         <p className="pr-7 text-justify">Rating : {anime.data.rating}</p>
         <p className="pr-7 text-justify">Season : {anime.data.season}</p>
         <p className="pr-7 pt-3 text-justify">{anime.data.background}</p>
         <p className="pr-7 pt-3 pb-5 text-justify">{anime.data.synopsis}</p>
         <Video
           className="flex justify-center items-center"
           videoId={anime.data.trailer.youtube_id}
         />
       </div>
     </div>
   </>
 );
}

export default page