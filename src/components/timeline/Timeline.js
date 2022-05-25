import React, { useEffect, useState } from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import './timeline.css'
import db from '../../firebase';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import FlipMove from 'react-flip-move'

const Timeline = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const postsData = collection(db, 'posts')
        const q = query(postsData, orderBy('timestamp', 'desc'))
        
        onSnapshot(q, (querySnapshot) => {
            setPosts(querySnapshot.docs.map((doc) => doc.data()))
        })
    },[])
    return (
        <div className='timeline'>
            <div className='timeline__header'>
                <h2>ホーム</h2>
            </div>
            <TweetBox/>
            <FlipMove>
                {posts.map((post) => (
                    <Post key={post.text} displayName={post.displayName} userName={post.userName} verified={post.verified} 
                    text={post.text} avatar={post.avatar} image={post.image}/>
                ))}
            </FlipMove>
        </div>
    )
}

export default Timeline