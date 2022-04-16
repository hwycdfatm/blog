import Head from 'next/head'

export default function Seo({
	title = 'L1RF STORE',
	description = 'Nhãn hàng bán đồ Việt Nam đầu hàng trên thị trường',
	image = '/images/image-logo.png',
}) {
	return (
		<Head>
			<link rel="shortcut icon" href="/images/image-logo.png" />
			<meta name="description" content={description} />
			<meta property="og:description" content={description} />
			<meta name="twitter:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:image:alt" content="Thời trang đầu hàng" />
			<meta property="og:title" content={title} />
			<meta name="author" content="Toàn" />
			<title>{title}</title>
		</Head>
	)
}
