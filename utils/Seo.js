import Head from 'next/head'

export default function Seo({
	title = 'Blog',
	description = 'Trang blog với tất cả các chuyên mục, không chỉ là blog',
	image = '/images/image-logo.png',
}) {
	return (
		<Head>
			<link rel="shortcut icon" href="/images/image-logo.png" />
			<meta name="description" content={description} />
			<meta property="og:description" content={description} />
			<meta name="twitter:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:image:alt" content="Blog đầu hàng" />
			<meta property="og:title" content={title} />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="theme-color" content="#000000" />
			<meta name="author" content="Toàn" />
			<title>{title}</title>
		</Head>
	)
}
