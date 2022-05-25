import { Search } from '@mui/icons-material'
import React from 'react'
import './widgets.css'

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <Search className='widgets__search'/>
                <input placeholder='キーワード検索' type='text'/>
            </div>
            <div className='widgets__widgetContainer'>
                <h2>最近の私</h2>
                <TwitterTweetEmbed tweetId={'1524636900853940224'}/>
                <TwitterTimelineEmbed sourceType='profile' screenName='ryo06052' options={{height: 400}}/>
                <TwitterShareButton url={'https://twitter.com/ryo06052'} options={ {text: '焼肉食べよう', via:'ryo06052'} }/>
            </div>
        </div>
    )
}

export default Widgets