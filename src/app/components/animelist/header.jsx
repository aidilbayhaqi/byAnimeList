import Link from "next/link"

const Header= ({title, linkHref, linkTitle})=>{
    return(
       <div className="flex justify-between p-4 items-center mt-5">
      <h1 className="text-2xl font-bold">{title}</h1>
      {linkHref && linkTitle ?  <Link href={linkHref} className="md:text-xl-text-md">{linkTitle}</Link>
      :null  
    }
     
    </div> 
    )
}

export default Header