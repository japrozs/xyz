import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="theme-color" content="#000" />
				<meta property="og:title" content="jp" />
				<meta property="og:url" content="https://xyz.japroz.me/" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/og-image-2400x1266.png" />
				<meta property="og:image:width" content="2400" />
				<meta property="og:image:height" content="1266" />

				<meta name="twitter:image" content="/og-image.png" />
				<meta name="twitter:image:width" content="1200" />
				<meta name="twitter:image:height" content="630" />
				<meta name="twitter:image:type" content="image/png" />

				<title>jp</title>
			</Head>
			<body className="antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
