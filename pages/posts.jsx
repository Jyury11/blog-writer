import { db } from '../lib/db'
import React from 'react'
import Navbar from '../components/Presentation/Navbar'
import PostTable from '../components/Presentation/PostTable'
import AddPostModal from '../components/Presentation/AddPostModal'
import GetDB from '../components/Services/GetDB'
import Head from 'next/head'

export default class Posts extends React.Component {
    static async getInitialProps() {
        const posts = await new Promise((resolve, reject) => { GetDB(resolve, reject, 'posts') })
        return {posts: posts}
    }

    render() {
        const posts = this.props.posts
        return (
            <div>
                <Head>
                    <title>Setting</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Navbar />
                <PostTable posts={posts} title="CoderDojooメンバー" />
                <AddPostModal apiRoot="./api/addPost" />
            </div>
        );
    }
}