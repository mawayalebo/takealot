import Head from 'next/head'
import AlertInfo from '../components/alertinfo'
import Header from '../components/header'
import { useDispatch } from 'react-redux'
import {  setDepartments, setThirdPartyData } from '../features/slices/uiData'
import BodyTop from '../components/bodyTop'
import HeaderMobile from '../components/mobile/header'
import BannerMobile from '../components/mobile/banner'
import DailyDealsMobile from '../components/mobile/dailyDeals'

 const Home =({departments, thirdPartyData})=>{

  const dispatch = useDispatch();
  dispatch(setDepartments(departments));
  dispatch(setThirdPartyData(thirdPartyData));

  return (
    <div className="">
      <Head>
        <title>Takealot.com: Online Shopping | SA's leading online store</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="lg:mx-auto">
        <HeaderMobile/>
        <AlertInfo/>
        <Header/>
        <BannerMobile/>
        <BodyTop/>
        <DailyDealsMobile/>
      </main>

      
    </div>
  )
}
export async function getStaticProps() {
  const deptData = await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getDept`);
  const departments = await deptData.json();

  const thirdPartyResponse = await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/thirdParty`);
  const thirdPartyData = await thirdPartyResponse.json();
  

  return {
      props: {
          departments,
          thirdPartyData
      }
  } 
}
export default Home