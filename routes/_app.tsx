import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

export default function App({ Component }: AppProps) {
	return (
		<html>
			<Head>
				<title>ТОКЕНОПОЛИС</title>
			</Head>
			<body>
				<Component />
			</body>
		</html>
	);
}
