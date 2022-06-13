import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
const Pagination = ({_totalPage, _currentPage, _pageShowLength = 5}) => {

	const route = useRouter()

	const maxPage = parseInt(_totalPage)  > 0 ? parseInt(_totalPage) : 1
	

	const page = [...Array(maxPage)].map( (_, i) => i + 1)

	const [pageShow, setPageShow] = useState([])

	const currentPage = /^[0-9]*$/.test(_currentPage ?? parseInt(route.query._page))
		? parseInt(route.query._page) < 1
			? 1
			: parseInt(route.query._page) > maxPage
			? maxPage
			: parseInt(route.query._page)
		: 1

	useEffect(() => {
		const prev_nextPage = Math.floor(_pageShowLength / 2)

		if(currentPage > 0 && currentPage <= (_pageShowLength - prev_nextPage)) 
			return setPageShow(page.slice(0, _pageShowLength))
		
		if(currentPage >= (maxPage - prev_nextPage)) 
			return setPageShow(page.slice(maxPage - _pageShowLength, maxPage))

		return setPageShow(page.slice(currentPage - (_pageShowLength - prev_nextPage), currentPage + prev_nextPage))
		
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, _totalPage])

	const goToPage = (currentPage) => {
		const queryObj = {...route.query, _page: (currentPage)}
		return	route.push(`?${new URLSearchParams(queryObj).toString()}`)
	}

	const nextPage = () => {
		if (currentPage < maxPage) {
			goToPage(currentPage + 1)
		}
	}
	const prevPage = () => {
		if (currentPage > 1) {			
			goToPage(currentPage - 1)
		}
	}

	const firstPage = () => {
		if (currentPage === 1) return
		goToPage(1)
	}

	const lastPage = () => {
		if (currentPage === maxPage) return
		goToPage(maxPage)
	}

	return (
		<div className="flex flex-col items-center my-8 justify-center">
			<div className="flex text-gray-600 dark:text-gray-100 space-x-6">
				<div className="flex space-x-3">
					<button
						onClick={firstPage}
						className={`w-6 h-8 rounded ${
							currentPage === 1
								? 'text-gray-300 dark:text-gray-800'
								: 'text-gray-800 dark:text-gray-300'
						}`}
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
							/>
						</svg>
					</button>
					<button
						onClick={prevPage}
						className={`w-6 h-8 rounded ${
							currentPage === 1
								? 'text-gray-300 dark:text-gray-800'
								: 'text-gray-800 dark:text-gray-300'
						}`}
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>
				</div>
				<div className="flex space-x-2 mx-2">
					{pageShow.length && pageShow.map((page) => (
						<button
							key={page}
							onClick={() => {
								goToPage(page)
							}}
							disabled={currentPage === page}
							className={`w-6 h-8 rounded text-center font-bold bg-opacity-70 hover:bg-gray-700 ${
								page === currentPage ? 'bg-gray-800 text-gray-100' : ''
							}`}
						>
							{page}
						</button>
					))}
				</div>
				<div className="flex space-x-3">
					<button
						onClick={nextPage}
						className={`w-6 h-8 rounded ${
							currentPage >= page.length
								? 'text-gray-300 dark:text-gray-800'
								: 'text-gray-800 dark:text-gray-300'
						}`}
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
					<button
						onClick={lastPage}
						className={`w-6 h-8 rounded ${
							currentPage >= page.length
								? 'text-gray-300 dark:text-gray-800'
								: 'text-gray-800 dark:text-gray-300'
						}`}
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 5l7 7-7 7M5 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>

  )
}

export default React.memo(Pagination)
