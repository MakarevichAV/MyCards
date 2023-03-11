import React, { ReactElement } from 'react'
import { StyleSheet, StatusBar } from 'react-native';
import { Navigation } from './components/pages/Navigator.jsx';
import Amplify from '@aws-amplify/core'
import { Authenticator } from 'aws-amplify-react-native'
import awsconfig from './src/aws-exports'
import * as Keychain from 'react-native-keychain'

// Amplify.configure({
//   ...awsconfig,
//   Analytics: {
//     disabled: true
//   }
// })

const MEMORY_KEY_PREFIX = '@MyStorage:'
let dataMemory = {}
class MyStorage {
  static syncPromise = null

  static setItem(key, value) {
    Keychain.setGenericPassword(MEMORY_KEY_PREFIX + key, value)
    dataMemory[key] = value
    return dataMemory[key]
  }

  static getItem(key) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined
  }

  static removeItem(key) {
    Keychain.resetGenericPassword()
    return delete dataMemory[key]
  }

  static clear() {
    dataMemory = {}
    return dataMemory
  }
}

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: false
  },
  // storage: MyStorage
})

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password',
    },
  ],
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#1C1B15',
  },
  scrollView: {
    backgroundColor: '#1C1B15',
    marginHorizontal: 0,
  },
  text: {
    fontSize: 42,
  },
});

const App = () => {
  return (
    <>
      {/* < Authenticator
        usernameAttributes="email"
        signUpConfig={signUpConfig}
      /> */}
      <Navigation />
    </>
  );
}

export default App;