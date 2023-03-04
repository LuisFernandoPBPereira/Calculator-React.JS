import * as S from "./styled"
import { Input } from "./Components/Input/Input"
import { Button } from "./Components/Button/Button"
import { useState } from "react"

function App() {
  const [ currentNumber, setCurrentNumber ] = useState("0")
  const [firstNumber, setFirstNumber] = useState("0")
  const [operation, setOperation] = useState("")


  const handleOnClear = () => {
    setCurrentNumber("0")
    setFirstNumber("0")
    setOperation("")
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === "0" ? "" : prev}${number}`)
  }

  const handleSumNumbers = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber))
      setCurrentNumber("0")
      setOperation("+")
    }
    else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation("")
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber))
      setCurrentNumber("0")
      setOperation("-")
    }
    else{
      const rem = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(rem))
      setOperation("")
    }
  }

  const handleMultNumbers = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber))
      setCurrentNumber("0")
      setOperation("*")
    }
    else{
      const mult = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mult))
      setOperation("")
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber))
      setCurrentNumber("0")
      setOperation("/")
    }
    else{
      const div = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(div))
      setOperation("")
    }
  }

  const handleEquals = () => {
    if(firstNumber !== "0" && operation !== "" && currentNumber !== "0"){
      switch(operation){
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "*":
          handleMultNumbers();
          break;
        case "/":
        handleDivNumbers();
        break;
        default: break;
      }
    }
  }

  return (
    <S.Container>
      <h1>Calculadora</h1>
      <S.Content>
        <Input value={currentNumber}/>
        <S.Row>
          <Button value={"C"} onClick={() => {handleOnClear()}}/>
          <Button value={"."} onClick={() => {handleAddNumber(".")}}/>
          <Button value={"/"} onClick={() => {handleDivNumbers()}}/>
          <Button value={"X"} onClick={() => {handleMultNumbers()}}/>
        </S.Row>
        <S.Row>
          <Button value={ 7 } onClick={() => {handleAddNumber("7")}}/>
          <Button value={ 8 } onClick={() => {handleAddNumber("8")}}/>
          <Button value={ 9 } onClick={() => {handleAddNumber("9")}}/>
          <Button value={"-"} onClick={() => {handleMinusNumbers()}}/>
        </S.Row>
        <S.Row>
          <Button value={ 4 } onClick={() => {handleAddNumber("4")}}/>
          <Button value={ 5 } onClick={() => {handleAddNumber("5")}}/>
          <Button value={ 6 } onClick={() => {handleAddNumber("6")}}/>
          <Button value={"+"} onClick={() => {handleSumNumbers()}}/>
        </S.Row>
        <S.Row>
          <Button value={ 1 }onClick={() => {handleAddNumber("1")}}/>
          <Button value={ 2 }onClick={() => {handleAddNumber("2")}}/>
          <Button value={ 3 }onClick={() => {handleAddNumber("3")}}/>
          <Button value={"="}onClick={() => {handleEquals()}}/>
        </S.Row>
      </S.Content>
    </S.Container>
  )
}

export default App
