import React from 'react'
import Footer from '../components/Presentation/Footer'
import Navbar from '../components/Presentation/Navbar'
import PostTable from '../components/Presentation/PostTable'
import AddPostModal from '../components/Presentation/AddPostModal'
import GetDB from '../components/Services/GetDB'
import Head from 'next/head'

function Posts({ posts }) {
    posts = JSON.parse(posts)
    return (
        <div>
            <Head>
                <title>Setting</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <PostTable posts={posts} title="CoderDojoメンバー" />
            <AddPostModal />
            <Footer />
        </div>
    )
}

export async function getServerSideProps() {
    const posts = JSON.stringify(await new Promise((resolve, reject) => { GetDB(resolve, reject, 'posts') }))
    return {
        props: {
          posts
        },
    }
}

export default Posts