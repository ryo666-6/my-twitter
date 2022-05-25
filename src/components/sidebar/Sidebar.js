import React from 'react'
import SidebarOption from './SidebarOption'
import { Twitter } from '@mui/icons-material'
import Home from "@mui/icons-material/Home";
import Search from "@mui/icons-material/Search";
import MailOutline from "@mui/icons-material/MailOutline";
import { NotificationsNone } from '@mui/icons-material';
import { BookmarkBorder } from '@mui/icons-material';
import { ListAlt } from '@mui/icons-material';
import { PermIdentity } from '@mui/icons-material';
import { MoreHoriz } from '@mui/icons-material';
import { Button } from '@mui/material';

import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Twitter className='sidebar__twitterIcon'/>
            <SidebarOption text='ホーム' Icon={Home} active/>
            <SidebarOption text='話題を検索' Icon={Search}/>
            <SidebarOption text='通知' Icon={NotificationsNone} />
            <SidebarOption text='メッセージ' Icon={MailOutline}/>
            <SidebarOption text='ブックマーク' Icon={BookmarkBorder}/>
            <SidebarOption text='リスト' Icon={ListAlt}/>
            <SidebarOption text='プロフィール' Icon={PermIdentity}/>
            <SidebarOption text='もっとみる' Icon={MoreHoriz}/>
            <Button className='sidebar__tweet' variant='outlined' fullWidth>ツイートする</Button>
        </div>
        
    )
}

export default Sidebar