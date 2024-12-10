
import Header from './components/header'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Brandbar from './components/brandbar'
import Newarrivals from './components/newarrivals'
import Topselling from './components/topselling'
import Browseby from './components/browseby'
import Happy from './components/happy'
import Stayuptodate from './components/stayuptodate'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <div className=''>
        <Header/>
        <Navbar/>
        <Hero/>
        <Brandbar/>
        <Newarrivals/>
        <Topselling/>
        <Browseby/>
        <Happy/>
        <Stayuptodate/>
        <Footer/>
      </div>

    </>
  );
}
