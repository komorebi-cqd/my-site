import React from 'react'
import styled from 'styled-components'
import homeBg from '../assets/images/bg_top2.png'
import Sidebar from '../components/Sidebar'

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
    z-index: -1;

`

// 顶部文字
const Sentence =styled.div`
    position: absolute;
    top: 34px;
    right: 60px;
    font-weight: bold;
    color: #fff;
    font-size: 16px;
    padding: 12px 30px;
    z-index: 2;
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
  return (
    <Container>
        <HomeTop>
            <Sentence>Don't Cry</Sentence>
        </HomeTop>
        <MainDiv>
            <MainDivL>
                <Sidebar />
            </MainDivL>
            <MainDivR></MainDivR>
        </MainDiv>
    </Container>
  )
}
