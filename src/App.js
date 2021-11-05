import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native'
import { globals, calculator } from './styles/exports'

const App = () => {
  const [exp, setExp] = useState('')
  const [result, setResult] = useState('')

  const resolveSymbols = (unresolved) => {
    const chars = { '÷': '/', '✕': '*' }
    return unresolved.replace(/[÷✕]/g, (ur) => chars[ur])
  }

  const factorial = (num) => {
    if (num <= 1) return 1
    else return num * factorial(num - 1)
  }

  const handleClear = () => {
    setExp('')
    setResult('')
  }

  const handleBack = () => {
    if (exp.length) {
      const newExp = exp.substr(0, exp.length - 1)
      setExp(newExp.replace(/(\d+)!/g, (m, n) => factorial(+n)))
      try {
        setResult(eval(resolveSymbols(newExp)))
      } catch (error) {}
    }
  }

  const handleEquals = () => {
    setExp(result)
    setResult('')
  }

  const handleClick = (text) => {
    const newExp = exp + text
    setExp(newExp)
    try {
      setResult(
        eval(resolveSymbols(newExp.replace(/(\d+)!/g, (m, n) => factorial(+n))))
      )
    } catch (error) {}
  }

  return (
    <SafeAreaView style={globals.safeArea}>
      <View style={calculator.textContainer}>
        <ScrollView horizontal style={calculator.scrollContainer}>
          <Text style={calculator.inputText}>{exp}</Text>
        </ScrollView>
        <ScrollView horizontal style={calculator.scrollContainer}>
          <Text style={calculator.outputText}>{result}</Text>
        </ScrollView>
      </View>
      <View style={calculator.buttonGrid}>
        <TouchableOpacity
          style={[calculator.button, calculator.buttonGray]}
          onPress={handleClear}
        >
          <Text style={calculator.buttonText}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[calculator.button, calculator.buttonGray]}
          onPress={handleBack}
        >
          <Text style={calculator.buttonText}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[calculator.button, calculator.buttonGray]}
          onPress={() => handleClick(' % ')}
        >
          <Text style={calculator.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[calculator.button, calculator.buttonOrange]}
          onPress={() => handleClick(' ÷ ')}
        >
          <Text style={calculator.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>
      <View style={calculator.buttonGrid}>
        <TouchableOpacity
          style={calculator.button}
          onPress={() => handleClick('7')}
        >
          <Text style={calculator.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calculator.button}
          onPress={() => handleClick('8')}
        >
          <Text style={calculator.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calculator.button}
          onPress={() => handleClick('9')}
        >
          <Text style={calculator.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[calculator.button, calculator.buttonOrange]}
          onPress={() => handleClick(' ✕ ')}
        >
          <Text style={calculator.buttonText}>✕</Text>
        </TouchableOpacity>
      </View>
      <View style={calculator.buttonGrid}>
        <TouchableOpacity
          style={calculator.button}
          onPress={() => handleClick('4')}
        >
          <Text style={calculator.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calculator.button}
          onPress={() => handleClick('5')}
        >
          <Text style={calculator.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calculator.button}
          onPress={() => handleClick('6')}
        >
          <Text style={calculator.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[calculator.button, calculator.buttonOrange]}
          onPress={() => handleClick(' - ')}
        >
          <Text style={calculator.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={calculator.buttonGrid}>
        <TouchableOpacity
          style={calculator.button}
          onPress={() => handleClick('1')}
        >
          <Text style={calculator.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calculator.button}
          onPress={() => handleClick('2')}
        >
          <Text style={calculator.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calculator.button}
          onPress={() => handleClick('3')}
        >
          <Text style={calculator.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[calculator.button, calculator.buttonOrange]}
          onPress={() => handleClick('!')}
        >
          <Text style={calculator.buttonText}>!</Text>
        </TouchableOpacity>
      </View>
      <View style={calculator.buttonGrid}>
        <TouchableOpacity
          style={calculator.button}
          onPress={() => handleClick('0')}
        >
          <Text style={calculator.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calculator.button}
          onPress={() => handleClick('.')}
        >
          <Text style={calculator.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={calculator.button}
          onPress={() => handleClick(' + ')}
        >
          <Text style={calculator.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[calculator.button, calculator.buttonOrange]}
          onPress={handleEquals}
        >
          <Text style={calculator.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default App
