import React from 'react'
import {Provider as PaperProvider } from 'react-native-paper'
import AppNavigator from './src/navigation/Index'
import { Provider as NoteProvider } from './src/context/NoteContext';

export default function App(){
  return (
    <NoteProvider>
      <AppNavigator/>
    </NoteProvider>
  )
}