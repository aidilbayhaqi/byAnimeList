import AnimeList from "@/app/components/animelist";
import Link from "next/link";
import Header from "@/app/components/animelist/header"
import SectionPage from "./Jumbotron/page";
import { getAnimeRecommend, getAnimeResponse, reproduce } from "./libs/library";
import ReactPlayer from "react-player";



const  Page = async ()=> {

 const topAnime = await getAnimeResponse("top/anime", "limit=8")
 const newAnime = await getAnimeResponse("seasons/upcoming", "limit=8")
 let reqAnime = await getAnimeRecommend("recommendations/anime", "entry")
reqAnime = reproduce(reqAnime, 8)


  return (
    // populer anime
    <>
      <div>
        <SectionPage />
      </div>
      <div>
        <Header
          title="MOST POPULAR"
          linkTitle="See all"
          linkHref="/popular"
        ></Header>
        <AnimeList api={topAnime} />
      </div>

      {/* new anime */}
      <div>
        <Header title="UPCOMING ANIME" linkHref="/upcoming" linkTitle="See all"></Header>
        <AnimeList api={newAnime} />
      </div>
      <div>
        <Header title="RECOMMENDED ANIME"></Header>
        <AnimeList api={reqAnime} />
      </div>
    </>
  );
}

export default Page
