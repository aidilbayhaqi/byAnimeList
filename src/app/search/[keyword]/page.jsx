import AnimeList from "@/app/components/animelist";
import Link from "next/link";
import Header from "@/app/components/animelist/header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decode = decodeURI(keyword)
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decode}`
  );
  const searchAnime = await response.json();

  return (
    // populer anime
    <>
      {" "}
      <div>
        <Header title={`Search For ${decode}`}></Header>
        <AnimeList api={searchAnime} />
      </div>
    </>
  );
};

export default Page;
