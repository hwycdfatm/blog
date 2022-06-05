import React from 'react'
import Link from 'next/link'
const Header = () => {
    
    return (
        <header className='pt-10 pb-3 md:pt-20 md:pb-5 transition-all duration-300 w-full text-center'>    
            <Link href='/'>
                <a className='tlt text-6xl md:text-9xl bg-light dark:bg-dark font-hammer font-bold tracking-wide hover:tracking-[1.2rem]'>Toann</a>
            </Link>   
            <div className='flex justify-center space-x-10 pt-5'>
                <Link href='/post'>
                    <a className='text-xl font-medium relative after:inset-x-0 after:-bottom-2 after:h-1 after:bg-purple-500 after:scale-0 after:hover:scale-100 after:absolute after:transition-all after:duration-300'>Bài viết</a>
                </Link>
                <Link href='/post-crow'>
                    <a className='text-xl font-medium relative after:inset-x-0 after:-bottom-2 after:h-1 after:bg-purple-500 after:scale-0 after:hover:scale-100 after:absolute after:transition-all after:duration-300'>Văn gáy</a>
                </Link> 
                <Link href='/about-me'>
                    <a className='text-xl font-medium relative after:inset-x-0 after:-bottom-2 after:h-1 after:bg-purple-500 after:scale-0 after:hover:scale-100 after:absolute after:transition-all after:duration-300'>Về tao</a>
                </Link>
            </div>     
        </header>
    )
}

export default Header