import Head from 'next/head'
import AlertInfo from '../components/alertinfo'
import Header from '../components/header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Takealot.com: Online Shopping | SA's leading online store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:mx-auto">
        <AlertInfo/>
        <Header/>
        
      </main>

      
    </div>
  )
}
