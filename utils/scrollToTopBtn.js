import triggerScroll from './triggerScroll'

export const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}
const ScrollToTopBtn = () => {
	const [isScroll, scrollTop] = triggerScroll()
	return (
		<button
			onClick={scrollToTop}
			className={`fixed duration-300 right-8 ${
				!isScroll && scrollTop > 200 ? 'bottom-8' : '-bottom-8'
			} z-50`}
		>
			<svg
				className="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M5 11l7-7 7 7M5 19l7-7 7 7"
				/>
			</svg>
		</button>
	)
}

export default ScrollToTopBtn
