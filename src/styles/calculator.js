import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  textContainer: {
    padding: 12,
  },
  scrollContainer: {
    flexDirection: 'row-reverse',
  },
  inputText: {
    color: '#fff',
    fontSize: 50,
  },
  outputText: {
    color: '#fff',
    fontSize: 30,
  },
  buttonGrid: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
  },

  button: {
    borderRadius: 45,
    backgroundColor: '#333333',
    height: 84,
    width: 84,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonOrange: {
    backgroundColor: '#d98a23',
  },
  buttonGray: {
    backgroundColor: '#a5a5a5',
  },
})
