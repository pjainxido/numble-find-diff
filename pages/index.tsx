import type { NextPage } from 'next'
import FindDiffGame from '../components/FindDiffGame'

const Home: NextPage = () => {
  return (
    <>
      <FindDiffGame width ={360} height={360} timePenalty ={3} timePerStage={15} />
    </>
  )
}

export default Home
