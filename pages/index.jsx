import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Presentation/Navbar'
import SelectModal from '../components/Presentation/SelectModal'
import WriterList from '../components/Presentation/WriterList'
import TargetBox from '../components/Presentation/TargetBox'
import GetDB from '../components/Services/GetDB'
import React from 'react'

function Home({ posts, writers }) {
    posts = JSON.parse(posts)
    writers = JSON.parse(writers)
    return (
      <div>
        <Head>
          <title>Blog Writer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        <WriterList writers={writers} title="本日の参加者" />
        <TargetBox writers={writers} title="現在の達筆者"  />
        <SelectModal posts={posts} apiRoot="./api/addWriter" />

        <div  className={styles.container}>
          <main className={styles.main}>
          </main>

          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            </a>
          </footer>
        </div>
      </div>
    );
}

export async function getServerSideProps() {
    const writers = JSON.stringify(await new Promise((resolve, reject) => { GetDB(resolve, reject, 'writer') }))
    const posts = JSON.stringify(await new Promise((resolve, reject) => { GetDB(resolve, reject, 'posts') }))
    return {
        props: {
          posts,
          writers
        },
    }
}

export default Home