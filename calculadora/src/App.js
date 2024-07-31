import { Container, Content, Row, Div } from "./styles";
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

  const handleRemNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const rem = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(rem))
      setOperation('')
    }
  }

  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const div = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(div))
      setOperation('')
    }
  }

  const handleMulNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const mul = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mul))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleRemNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case '*':
          handleMulNumbers();
          break;
        default:
          break;
      }
    }
  }
  return (
    <div className="App" class="app">
      <Container>
        <Content>

          <Div>
            <Input value={currentNumber} />
            <Row>
              <Button label="1" onClick={() => handleAddNumber('1')} />
              <Button label="2" onClick={() => handleAddNumber('2')} />
              <Button label="3" onClick={() => handleAddNumber('3')} />
              <Button label="+" onClick={handleSumNumbers} />
            </Row>
            <Row>
              <Button label="4" onClick={() => handleAddNumber('4')} />
              <Button label="5" onClick={() => handleAddNumber('5')} />
              <Button label="6" onClick={() => handleAddNumber('6')} />
              <Button label="x" onClick={handleMulNumbers} />
            </Row>
            <Row>
              <Button label="7" onClick={() => handleAddNumber('7')} />
              <Button label="8" onClick={() => handleAddNumber('8')} />
              <Button label="9" onClick={() => handleAddNumber('9')} />
              <Button label="-" onClick={handleRemNumbers} />
            </Row>
            <Row>
              <Button label="0" onClick={() => handleAddNumber('0')} />
              <Button label="/" onClick={handleDivNumbers} />
              <Button label="C" onClick={() => handleOnClear()} />
              <Button label="." onClick={() => handleAddNumber('.')} />
            </Row>
            <Row>
              <Button label="=" onClick={handleEquals} />
            </Row>
          </Div>

        </Content>
      </Container>
    </div>
  );
}

export default App;
