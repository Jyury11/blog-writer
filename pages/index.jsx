import Head from 'next/head'
import Footer from '../components/Presentation/Footer'
import Navbar from '../components/Presentation/Navbar'
import SelectModal from '../components/Presentation/SelectModal'
import WriterList from '../components/Presentation/WriterList'
import TargetBox from '../components/Presentation/TargetBox'
import GetDB from '../components/Services/GetDB'
import CheckWriters from '../components/Services/CheckWriters'
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
        <SelectModal posts={posts} />
        <Footer />
      </div>
    );
}

export async function getServerSideProps() {
    const writers = JSON.stringify(await new Promise((resolve, reject) => { CheckWriters(resolve, reject, 'writer', 'posts') }))
    const posts = JSON.stringify(await new Promise((resolve, reject) => { GetDB(resolve, reject, 'posts') }))
    return {
        props: {
          posts,
          writers
        },
    }
}

export default Home