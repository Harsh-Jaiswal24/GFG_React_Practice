import { useState } from 'react'
import './App.css'
import FunctionalComponent from '../FunctionalComponent/FunctionalComponent'
import RenderingList from '../FunctionalComponent/RenderingList'
import ConditionalRendering from '../FunctionalComponent/ConditionalRendering'
function App() {
  return (
      // <FunctionalComponent></FunctionalComponent>
      // <RenderingList></RenderingList>
      <ConditionalRendering show='yes'></ConditionalRendering>
  )
}

export default App
