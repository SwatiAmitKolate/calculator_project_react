import React,{useState} from "react";
import { Container, Screen, Previous, Current, Button } from '../Styles/Main';

const Calculator = () => {
  const [current, setCurrent] = useState('');
  const [Prevoius,setPrevoius] =useState('');
  const [operations,setOprations] = useState('');

  const appendValueHandler = (el) =>{
    const value = el.target.getAttribute("data");
    if(value === '.' && current.includes('.')) return
    setCurrent(current + value);
  };
  return (
    <>
      <Container>
        <Screen>
          <Previous>{Prevoius} {operations}</Previous>
          <Current>{current}</Current>
        </Screen>
        <Button gridSpan={2} control>AC</Button> 
        <Button>DEL</Button>    
        <Button operation>÷</Button>    
        <Button data={7} onClick={appendValueHandler}>7</Button>    
        <Button data={8} onClick={appendValueHandler}>8</Button>    
        <Button data={9} onClick={appendValueHandler}>9</Button>    
        <Button operation>×</Button>    
        <Button data={4} onClick={appendValueHandler}>4</Button>    
        <Button data={5} onClick={appendValueHandler}>5</Button>    
        <Button data={6} onClick={appendValueHandler}>6</Button>    
        <Button operation>+</Button>    
        <Button data={1} onClick={appendValueHandler}>1</Button>    
        <Button data={2} onClick={appendValueHandler}>2</Button>       
        <Button data={3} onClick={appendValueHandler}>3</Button>    
        <Button operation>-</Button>    
        <Button data={'.'} onClick={appendValueHandler} decimal>.</Button>    
        <Button data={0} onClick={appendValueHandler}>0</Button>    
        <Button gridSpan={2} equals>=</Button>       
      </Container>
    </>
  );
};

export default Calculator;

//50 min//