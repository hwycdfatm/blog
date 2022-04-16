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

	return [colorTheme, setTheme]
}
