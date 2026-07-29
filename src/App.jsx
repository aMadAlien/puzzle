import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './components/screens/Greeting'
import Login from './components/screens/Login'
import Rules from './components/screens/Rules'
import ScreenWrapper from './components/ScreenWrapper'
import Puzzle from './components/screens/Puzzle'
import Gallery from './components/screens/Gallery'

function App() {
  const [step, setStep] = useState(0)

  const renderStep = () => {
    switch (step) {
      case 0:
        return Greeting
      case 1:
        return Login
      case 2:
        return Rules
      case 3:
        return Puzzle
      case 4:
        return Gallery
    }
  }

  return (
    <div className="">
      <ScreenWrapper onNextStep={() => setStep(prev => prev + 1)} Step={renderStep()} />

      <div className="overlay" />
    </div>
  )
}

export default App
