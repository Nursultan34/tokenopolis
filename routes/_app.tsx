import { Head }     from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

// Dark mode by default
export default function App({Component}: AppProps) {
    return (
        <html class="dark">
            <Head>
                <title>ТОКЕНОПОЛИС</title>
            </Head>
            <body>
                <Component/>
            </body>
        </html>
    )
}
