import { useState, useEffect } from 'react'

const TriggerScroll = () => {
	const [isScroll, setScroll] = useState(false)
	const [scrollTop, setScrollTop] = useState(0)
	useEffect(() => {
		const stickyHandle = () => {
			const scrolled = window.pageYOffset || document.documentElement.scrollTop
			if (scrolled < 0) return
			scrolled > scrollTop ? setScroll(true) : setScroll(false)
			setScrollTop(scrolled)
		}
		window.addEventListener('scroll', stickyHandle)
		return () => {
			window.removeEventListener('scroll', stickyHandle)
		}
	}, [scrollTop])

	// Return isScroll: true / false
	//        scrolTop: variable number pageYOffset
	return [isScroll, scrollTop]
}

export default TriggerScroll
