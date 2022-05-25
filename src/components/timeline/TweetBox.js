import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import './tweetBox.css'
import { collection, addDoc, serverTimestamp, timestamp } from "firebase/firestore";
import db from '../../firebase';

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')

    const onChangeTweetMessage = (e) => {
        setTweetMessage(e.target.value)
    }
    const onChangeTweetImage = (e) => {
        setTweetImage(e.target.value)
    }
    const onClickSendTweet = (e) => {
        e.preventDefault();
        addDoc(collection(db, 'posts'), {
            displayName: 'Reactちゃん',
            userName:' Ryo-Engineer',
            verified: true, 
            text: tweetMessage, 
            avatar: 'http://shincode.info//wp-content/uploads/2021/12/icon.png',
            image: tweetImage,
            timestamp: serverTimestamp()
        })
        setTweetMessage('')
        setTweetImage('')
    };

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar/>
                    <input onChange={onChangeTweetMessage} placeholder='今何してる〜？' value={tweetMessage} type='text'/>
                </div>
                <input onChange={onChangeTweetImage} placeholder='画像のURL' value={tweetImage} className='tweetBox__imageInput' type='text'/>
                <Button onClick={onClickSendTweet} className='tweetBox__tweetBtn' type='submit'>ツイートする</Button>
            </form>
        </div>
    )
}

export default TweetBox