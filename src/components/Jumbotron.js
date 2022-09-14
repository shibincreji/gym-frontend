import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import res2 from '../components/layout/assests/food1.jpg'
//import NavigationBar from './layout/NavigationBar';

const Styles = styled.div`
  .jumbo {
    background: url(${res2}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;


export default function Jumbotron (){
  return(
    <div>
    

    <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>GET READY TO BURN</h1>
        <p>LETS GET YOU IN SHAPE</p>
      </Container>
    </Jumbo>
  </Styles>
  </div>
  )
}
