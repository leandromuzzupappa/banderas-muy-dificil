import { useEffect, useState } from 'react'
import { signal } from '@preact/signals'
import { Flag } from './components/Flag/Flag'
import { OptionList } from './components/OptionList/OptionList'
import './App.css'
import { IFlags } from './data/interfaces/flags'
import { getRandomFlags } from './services/FlagsService'

interface ICurrentFlag {
  image: string;
  name: string;
  showName: boolean;
}

export const selectedFlag = signal('selectedFlag')

function App() {
  const [score, setScore] = useState<number>(0)
  const [currentFlag, setCurrentFlag] = useState<ICurrentFlag>({} as ICurrentFlag)
  const [flags, setFlags] = useState<IFlags[]>([])

  useEffect(() => {
    handleFlag();
  }, [])

  const handleFlag = async () => {
    const flags = await getRandomFlags()
    setFlags(flags)

    flags.forEach(flag => {
      if (flag.isCorrect) {
        setCurrentFlag({
          image: flag.flags.png,
          name: flag.translations.spa.common,
          showName: false
        })
      }
    })
  }

  const handleSelect = (name: string) => {

    setScore(currentFlag.name === name ? score + 1 : 0)

    setCurrentFlag(prev => {
      return {
        ...prev,
        showName: true
      }
    })

    setTimeout(() => {
      setCurrentFlag(prev => {
        return {
          ...prev,
          showName: false
        }
      })
    }, 1500);

    setTimeout(() => {
      handleFlag()
    }, 1800)
  }

  return (
    <main>
      <h4>Score: {score}</h4>
      <Flag name={currentFlag.name} image={currentFlag.image} showName={currentFlag.showName} />
      <OptionList options={flags} onSelect={handleSelect} />
    </main>
  )
}

export default App
