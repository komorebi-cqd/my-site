import React,{useState} from 'react'
import styled from 'styled-components'
import classNames from 'classnames';
import NavCloud from '../assets/images/nav_cloud.png'
import inImg from '../assets/images/menu_in_icon.png';
import outImg from '../assets/images/menu_out_icon.png';
import sidebar_0 from '../assets/images/sidebar_0.png'
import sidebar_1 from '../assets/images/sidebar_1.png'
import sidebar_2 from '../assets/images/sidebar_2.png'
import sidebar_3 from '../assets/images/sidebar_3.png'
import { Link } from 'react-router-dom';


const SidebarDiv = styled.div`
    width: 100%;
    min-height: 710px;
    border-radius: 12px;
    background:url(${NavCloud}) no-repeat center bottom / contain, linear-gradient(141.08deg, rgba(10, 105, 218, 1) 0%, rgba(8, 86, 200, 1) 63.09%, rgba(2, 49, 165, 1) 100%);
    position: relative;
    padding: 16px 46px 0 24px;
    display: flex;
    flex-direction: column;
    z-index: 999;
    /* justify-content: space-between; */
    >.sidebar_toggle{
        position: absolute;
        top: 16px;
        right: 20px;
        img{
            cursor: pointer;
            width: 18px;
            height: 18px;
        }
    }
    >.title{
        flex: 0 0 108px;
    }
    >.sidebar_list{
        flex: auto;
    }
    >.record{
        flex: 0 0 50px;
        a{
            color: #fff;
            font-size: 12px;
        }
    }
`

const SidebarItem = styled.div`
    width: 100%;
    height: 38px;
    margin: 8px 0;
    >a{
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        transition: all 0.2s linear;
        &.active{
            border-radius: 180px;
            background: rgba(0, 118, 255, 1);
        }
        >img{
            height: 18px;
            padding: 0 20px;
        }
        >span{
            font-size: 15px;
            color: #fff;
        }
    }

`

export default function Sidebar() {
    const [activeIndex,setActiveIndex] = useState(0);

    const sidebarListData = [
        {
            img: sidebar_0,
            url: '/',
            text: '首页',
            id: 0
        },
        {
            img: sidebar_1,
            url: '/',
            text: '日记',
            id: 1
        },
        {
            img: sidebar_2,
            url: '/',
            text: '旅游',
            id: 2
        },
        {
            img: sidebar_3,
            url: '/',
            text: '经历',
            id: 3
        },
    ]

    const switchSidebar = (id) => {
        setActiveIndex(id);
    }

    const sidebarList = sidebarListData.map((it) => {
        return <SidebarItem key={it.id}>
            <Link to={it.url} onClick={() => switchSidebar(it.id)} className={classNames({ active: it.id === activeIndex })}>
                <img src={it.img} alt="" />
                <span>{it.text}</span>
            </Link>
        </SidebarItem>
    })

    

    return (
        <SidebarDiv>
            <div className='sidebar_toggle'>
                <img src={inImg} alt="" />
            </div>
            <div className='title'>陈桥达</div>
            <div className='sidebar_list'>
                {sidebarList}
            </div>
            <div className='record'><a href="https://beian.miit.gov.cn/" target={'_blank'}>湘ICP备2022019095号-1</a></div>
        </SidebarDiv>
    )
}
