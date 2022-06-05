import React from 'react'
import Link from 'next/link'
const Post = ({title, description, slug}) => {	
  
  return (
    <div className='border-2 p-5 mb-5 rounded-md hover:border-slate-300'>
      <h2 className='text-lg font-mono first-letter:uppercase'>{title}</h2>
      <p className='my-4 text'>{description}</p>
      <div className='text-right'>
        <Link href={`/post/${slug}`}>
          <a className='inline-flex items-center py-2 pl-2 pr-4 rounded-md font-semibold group'>
            <span className='mr-2'>Đọc tiếp</span>
            <svg className="w-4 h-4 relative transition-all duration-300 group-hover:-right-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default React.memo(Post)