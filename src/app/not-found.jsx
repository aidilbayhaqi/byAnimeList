import Image from 'next/image';
import React from 'react'
import errorImg from '@/app/assets/error.png'
import Link from 'next/link';

const notFound = () => {
  return (
    <div className="max-w-xl min-h-screen mx-auto grid justify-center items-center">
      <div className="grid flex-col-1 justify-center items-center">
        <Image
          src={errorImg}
          width={200}
          height={200}
          alt="Error Images"
          className=''
        ></Image>
        <h3 className="font-bold text-3xl text-center"> 404 | NOT FOUND</h3>
        <Link href={'/'} className='text-center hover:uderline transition-all'>Back to home</Link>
      </div>
    </div>
  );
}
export default notFound