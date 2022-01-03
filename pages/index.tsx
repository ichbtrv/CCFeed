import { Spinner } from 'components/loading/Spinner'

export default function Home(props) {
  return (
    <div>
      <main className="flex flex-wrap min-h-screen justify-around">home</main>
      <Spinner displayed={true} />
    </div>
  )
}

//ahhh ok it works on local dev?
