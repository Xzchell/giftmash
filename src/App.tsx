import { useCallback, useEffect, useState } from 'react'
import './App.css'
import HeroPage from './components/Hero'
import ThreeYearsBridge from './components/ThreeYearsBridge'
import { YEARS } from './data/Years'
import YearSection from './components/YearSection'
import PersonalMessage from './components/PersonalMessage'
import Final from './components/Final'
import Gift from './components/Gift'
import QuizSection from './components/QuizSection'
import TimelineNav from './components/TimelineNav'

export type ChatMoment = {
  type: 'chat'
  date: string
  title: string
  messages: { author: string; text: string }[]
  caption?: string
}

export type PhotoMoment = {
  type: 'photo'
  date: string
  title: string
  image?: string
  caption?: string
}

export type QuoteMoment = {
  type: 'quote'
  date: string
  title: string
  quote: string
  caption?: string
}
export type MusicMoment = {
  type: 'music'
  date: string
  title: string
  src: string
  artist: string
  cover?: string
  caption?: string
}

export type Moment = ChatMoment | PhotoMoment | QuoteMoment | MusicMoment
export  type YearData = {
  id: string
  year: string
  chapter: string
  accent: string
  accentLight: string
  bg: string
  subtitle: string
  description: string
  moments: Moment[]
}

function App() {
  const [started, setStarted] = useState(false)
  const [activeYear, setActiveYear] = useState('2024')
  const [showNav, setShowNav] = useState(false)
  const [quizDone, setQuizDone] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.5)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleStart = useCallback(() => {
    console.log('handleStart called')
    setStarted(true)
    setTimeout(() => {
      document.getElementById('y2024')?.scrollIntoView({ behavior: 'smooth' })
    }, 60)
  }, [])

  const handleYearChange = useCallback((y: string) => setActiveYear(y), [])

  return (
     <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {showNav && started && <TimelineNav active={activeYear} />}
      <HeroPage onStart={handleStart}/>

      {started && (
        <>
          {YEARS.map(y => (
            <YearSection key={y.year} data={y} onActiveChange={handleYearChange} />
          ))}
          <ThreeYearsBridge/>
          <PersonalMessage />
          <QuizSection onComplete={() => setQuizDone(true)} />
          {quizDone && <Gift /> }
          {quizDone && <Final />}
        </>
      )}
     </div>
  )
}

export default App