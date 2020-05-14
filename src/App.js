import React from 'react';
import styled from 'styled-components'

import { Book } from './components'


import './App.css';

const App = () => {

  return (
    <Wrapper>
      <Book />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #eaeaea;

  display: flex;
  align-items: center;
  justify-content: center;
`

export default App;
