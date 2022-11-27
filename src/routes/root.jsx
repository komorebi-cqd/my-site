import React from 'react'
import styled from 'styled-components'
import homeBg from '../assets/images/bg_top2.png'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

const HomeTop = styled.div`
    width: 100%;
    height: ${props => props.drawBack ? '117px' : '431px'};
    background:url(${homeBg}) no-repeat;
    background-size: cover;
    background-position: top center;
    transition: all 0.2s;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;

`

// 顶部文字
const Sentence = styled.div`
    position: absolute;
    top: 34px;
    right: 60px;
    font-weight: bold;
    color: #fff;
    font-size: 16px;
    padding: 12px 30px;
    z-index: 2;
    cursor: pointer;
    &::before{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #fff;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
        filter: blur(4px);
        border-radius: 16px;
        opacity: 0.4;
        z-index: 0;
    }
`

const MainDiv = styled.div`
    display: flex;
`

const MainDivL = styled.div`
    flex: 0 0 240px;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: ${props => props.drawBack ? '80px' : '240px'};
    margin-top: 32px;
`

const MainDivR = styled.div`
    flex: auto;
    margin-top: ${props => props.drawBack ? '34px' : '150px'};
`

export default function Root() {
    const [draw, setDraw] = useState(false);
    const changeDraw = (id) => {
        console.log('====================================');
        console.log('设置',id);
        console.log('====================================');
        setDraw(!draw);
    }
    return (
        <Container>
            <HomeTop>
                <Sentence onClick={() => changeDraw('111')}>Don't Cry</Sentence>
            </HomeTop>
            <MainDiv>
                <MainDivL drawBack={draw}>
                    <Sidebar />
                </MainDivL>
                <MainDivR drawBack={draw}></MainDivR>
            </MainDiv>
        </Container>
    )
}
