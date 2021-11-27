import Head from 'next/head'
import AlertInfo from '../components/alertinfo'
import Header from '../components/header'
import { axios } from 'axios'
 const Home =({myData})=>{
   console.log(myData);
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
export async function getStaticProps() {
  const deptData = await fetch('http://127.0.0.1:3000/api/getDept');
  const departments = await response.json();
  return {
      props: {
          departments
      }
  }
}
export default Home