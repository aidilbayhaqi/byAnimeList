import Image from "next/image";
import Link from "next/link";

const animelist = ({api}) =>{
    return (
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-4 md:text-xl-text-md card pt-5">
        {api.data?.map((anime)=>{
          return (
            <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer card-populer">
              <Image src={anime.images.webp.image_url} alt="img1" width={350} height={350}></Image>
              <h3 className="font-bold text-xl">{anime.title}</h3>
            </Link>
          );
        })}
        
      </div>
    );
}

export default animelist