import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Components/Containers/Header/Header'
import Menu from './Components/Containers/Menu/Menu'
import MainBoard from './Components/Containers/Boards/MainBoard/MainBoard';
import Fullscreen from 'react-full-screen'

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
  }
  body{
    background-color: #2a2c3b;
  }

  @media all and (display-mode: Fullscreen) {
  body {
    /* margin: 0;
    border: 5px solid black; */
  }
}

`

const Row = styled.div`
    flex-grow: 1;
    flex: 20;
    display: flex;

`

const FlexContainer = styled.div`
  background-color: #2a2c3b;
  display: flex;
  flex-direction:column;
  width: 100%;
  height: 100vh;
  overflow: scroll;
`

class App extends Component {
  render() {
    return (

      <div className='App'>
        <GlobalStyle />
        {/* <Fullscreen enabled={true}> */}
        <FlexContainer className='full-screenable-node'>
          <Header />
          <Row>
            <Menu></Menu>
            <MainBoard></MainBoard>
          </Row>
        </FlexContainer>
        {/* </Fullscreen> */}
      </div>
    );
  }
}

export default App;
