import HomePage from "./HomePage";
import Head from "next/head";

export default function index() {
    return (
        <>
            <main>
                <Head>
                    <link href="https://cdn.jsdelivr.net/npm/daisyui@2.24.0/dist/full.css" rel="stylesheet" type="text/css" />
                    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css" rel="stylesheet" type="text/css" />
                </Head>
                <HomePage/>
            </main>
        </>
    )
}
