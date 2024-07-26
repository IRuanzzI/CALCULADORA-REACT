import { Container, Content, Row } from "./styles";
import Input from './components/Input'
import Button from './components/Button'
import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('0')

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`) //aqui verifica se o 0 está m exibição se caso sim, ao ativar a função o 0 é substituido pelo numero.
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
  
   //TODO: CRIAR A PARTE DE SUBTRAÇÃO

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation){
        case '+':
        handleSumNumbers();
        break;
        default:
        break;
      }
    }
  }
  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={currentNumber} />
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')} />
            <Button label="2" onClick={() => handleAddNumber('2')} />
            <Button label="3" onClick={() => handleAddNumber('3')} />
            <Button label="=" onClick={handleEquals} />
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')} />
            <Button label="5" onClick={() => handleAddNumber('5')} />
            <Button label="6" onClick={() => handleAddNumber('6')} />
            <Button label="+" onClick={handleSumNumbers} />
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')} />
            <Button label="8" onClick={() => handleAddNumber('8')} />
            <Button label="9" onClick={() => handleAddNumber('9')} />
            <Button label="-" />
          </Row>
          <Row>
            <Button label="x" />
            <Button label="/" />
            <Button label="C" onClick={() => handleOnClear()} />
            <Button label="." />
          </Row>

        </Content>
      </Container>
    </div>
  );
}

export default App;
