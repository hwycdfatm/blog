import { useEffect, useState } from 'react'

export default function useDarkMode() {
	const [theme, setTheme] = useState(null)
	const colorTheme = theme === 'dark' ? 'light' : 'dark'

	useEffect(() => {
		setTheme(localStorage.getItem('theme') || 'light')
	}, [])

	useEffect(() => {
		if (theme) {
			const root = window.document.documentElement
			root.classList.remove(colorTheme)
			root.classList.add(theme)
			localStorage.setItem('theme', theme)
		}
	}, [theme, colorTheme])

	return (
		<div className="fixed bottom-5 left-5 bg-white shadow-md w-20 h-10 flex items-center justify-between rounded-full">
			<div
				onClick={() => setTheme('dark')}
				className="w-1/2 flex items-center justify-center cursor-pointer"
			>
				<svg
					className="w-7 h-7"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
			</div>
			<div
				onClick={() => setTheme('light')}
				className="w-1/2 flex items-center justify-center cursor-pointer"
			>
				<svg
					className="w-7 h-7"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			</div>
		</div>
	)
}
