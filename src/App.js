import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Components/Containers/Header/Header'
import Menu from './Components/Containers/Menu/Menu'
import MainBoard from './Components/Containers/Boards/MainBoard/MainBoard';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
  }
  html {
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    @media screen and (orientation: landscape) and (min-width: 550px){
        font-size: 9px;
    }
    @media screen and (orientation: landscape) and (min-width: 750px){
        font-size: 11px;
    }
    @media screen and (orientation: portrait) and (min-width: 768px){
        font-size: 14px;
    }
    @media screen and (orientation:landscape) and (min-width: 1024px){
        font-size: 10px;
    }
    @media screen and (min-width: 1200px){
        font-size: 12px;
    }
    @media screen and (min-width: 1600px){
        font-size: 13px;
    }
  }
  body{
    background-color: #2a2c3b;
  }

`

const Row = styled.div`
    flex-grow: 1;
    flex: 20;
    display: flex;
  margin-top:9vh;
`

const FlexContainer = styled.div`
  background-color: #2a2c3b;
  display: flex;
  flex-direction:column;
  width: 100%;
  min-height: 100vh;
`

class App extends Component {
  render() {
    return (

      <div className='App'>
        <GlobalStyle />
        <FlexContainer>
          <Header />
          <Row>
            <Menu></Menu>
            <MainBoard></MainBoard>
          </Row>
        </FlexContainer>
      </div>
    );
  }
}

export default App;
