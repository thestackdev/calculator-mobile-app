import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native'
import { Styles } from './exports'

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

  const handleExp = (text) => {
    const newExp = exp + text
    setExp(newExp)
    try {
      setResult(
        eval(resolveSymbols(newExp.replace(/(\d+)!/g, (m, n) => factorial(+n))))
      )
    } catch (error) {}
  }

  return (
    <SafeAreaView style={Styles.Calculator.safeArea}>
      <View style={Styles.Calculator.textContainer}>
        <ScrollView horizontal style={Styles.Calculator.scrollContainer}>
          <Text style={Styles.Calculator.inputText}>{exp}</Text>
        </ScrollView>
        <ScrollView horizontal style={Styles.Calculator.scrollContainer}>
          <Text style={Styles.Calculator.outputText}>{result}</Text>
        </ScrollView>
      </View>
      <View style={Styles.Calculator.buttonGrid}>
        <TouchableOpacity
          style={[Styles.Calculator.button, Styles.Calculator.buttonGray]}
          onPress={handleClear}
        >
          <Text style={Styles.Calculator.buttonText}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.Calculator.button, Styles.Calculator.buttonGray]}
          onPress={handleBack}
        >
          <Text style={Styles.Calculator.buttonText}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.Calculator.button, Styles.Calculator.buttonGray]}
          onPress={() => handleExp(' % ')}
        >
          <Text style={Styles.Calculator.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.Calculator.button, Styles.Calculator.buttonOrange]}
          onPress={() => handleExp(' ÷ ')}
        >
          <Text style={Styles.Calculator.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.Calculator.buttonGrid}>
        <TouchableOpacity
          style={Styles.Calculator.button}
          onPress={() => handleExp('7')}
        >
          <Text style={Styles.Calculator.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.Calculator.button}
          onPress={() => handleExp('8')}
        >
          <Text style={Styles.Calculator.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.Calculator.button}
          onPress={() => handleExp('9')}
        >
          <Text style={Styles.Calculator.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.Calculator.button, Styles.Calculator.buttonOrange]}
          onPress={() => handleExp(' ✕ ')}
        >
          <Text style={Styles.Calculator.buttonText}>✕</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.Calculator.buttonGrid}>
        <TouchableOpacity
          style={Styles.Calculator.button}
          onPress={() => handleExp('4')}
        >
          <Text style={Styles.Calculator.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.Calculator.button}
          onPress={() => handleExp('5')}
        >
          <Text style={Styles.Calculator.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.Calculator.button}
          onPress={() => handleExp('6')}
        >
          <Text style={Styles.Calculator.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.Calculator.button, Styles.Calculator.buttonOrange]}
          onPress={() => handleExp(' - ')}
        >
          <Text style={Styles.Calculator.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.Calculator.buttonGrid}>
        <TouchableOpacity
          style={Styles.Calculator.button}
          onPress={() => handleExp('1')}
        >
          <Text style={Styles.Calculator.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.Calculator.button}
          onPress={() => handleExp('2')}
        >
          <Text style={Styles.Calculator.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.Calculator.button}
          onPress={() => handleExp('3')}
        >
          <Text style={Styles.Calculator.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.Calculator.button, Styles.Calculator.buttonOrange]}
          onPress={() => handleExp('!')}
        >
          <Text style={Styles.Calculator.buttonText}>!</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.Calculator.buttonGrid}>
        <TouchableOpacity
          style={Styles.Calculator.button}
          onPress={() => handleExp('0')}
        >
          <Text style={Styles.Calculator.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.Calculator.button}
          onPress={() => handleExp('.')}
        >
          <Text style={Styles.Calculator.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.Calculator.button}
          onPress={() => handleExp(' + ')}
        >
          <Text style={Styles.Calculator.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.Calculator.button, Styles.Calculator.buttonOrange]}
          onPress={handleEquals}
        >
          <Text style={Styles.Calculator.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default App
