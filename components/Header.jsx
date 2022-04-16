import React from 'react'
import Link from 'next/link'
import useDarkMode from '../utils/useDarkmode'
import triggerScroll from '../utils/triggerScroll'
const Header = () => {
    const [isScroll, scrollTop] = triggerScroll()
    const [theme, setTheme] = useDarkMode()
    const darkMode = () => {
        setTheme(theme)
    }
    return (
        <header className={`${isScroll ? '-mt-20': 'mt-0'} ${scrollTop != 0 ? 'h-16' :'h-24'} dark:bg-primary transition-all duration-300 fixed inset-0`}>
            <div className='max-w-screen-xl mx-auto flex h-full items-center justify-between'>
                <Link href='/'>
                    <a className='text-3xl dark:text-white'>
                        L1RF <span className='text-sm'>blog</span>
                    </a>
                </Link>
                <div className="h-10">
                    <button
                        onClick={darkMode}
                        className="w-8 relative h-10 overflow-hidden outline-none focus:outline-none focus:shadow-outline border-none"
                    >
                        <div
                            className={`h-16 flex flex-col items-center justify-around ${
                                theme === 'dark' ? 'translate-y-1' : '-translate-y-7'
                            } transition-all`}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>

                            <svg
                                className="w-6 h-6 text-yellow-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
    </header>
    )
}

export default Header