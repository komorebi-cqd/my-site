import React from 'react'
import styled from 'styled-components'
import errBg from '../assets/images/error_bg.png'
import errP from '../assets/images/error_people.png'
import goHome from '../assets/images/go_home.png'
import {Link} from 'react-router-dom'


const ErrorContainer = styled.div`
    width: 100%;
    height: 100%;
    background: url(${errBg}) no-repeat;
    background-size: 925px 661px;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    >h3{
        font-size: 63px;
        color: #000;
    }
    >img{
        width: 530px;
        height: 277px;
    }
    >.go_home{
        border-bottom: 2px solid #000;
        display: flex;
        align-items: center;
        padding-bottom: 5px;
        margin-top: 200px;
        cursor: pointer;
        >img{
            width: 35px;
            height: 35px;
        }
        >span{
            font-size: 24px;
            color: #000;
        }
    }

`


export default function Error() {
  return (
    <ErrorContainer>
        <h3>Oops!</h3>
        <img src={errP} alt="" />
        <Link to={'/'} className='go_home'>
            <img src={goHome} alt="" />
            <span>回到首页</span>
        </Link>
    </ErrorContainer>
  )
}
