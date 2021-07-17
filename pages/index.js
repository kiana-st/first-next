import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fruit SHop | home</title>
        <meta name="keywords" content="fruits"/>
      </Head>
      <div>
        <h1 className={styles.title}>homepage</h1>
        <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy</p>
        <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy</p>
        <Link href="/fruits"><a className={styles.btn}>fruits list</a></Link>
      </div>
    </>
  )
}
