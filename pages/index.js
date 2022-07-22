//imports is for front ends
//ensa hal jemle
//backend js is a little different than frontend JS

import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
// import ManualHeader from "../components/ManualHeader"
import { Header } from "../components/Header"
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our Smart Sontract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            Hello!!
        </div>
    )
}
