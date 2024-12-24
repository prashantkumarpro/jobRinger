import Employers from "./components/Employers"
import FeaturedEmployers from "./components/FeaturedEmployers"
import FeaturedJobs from "./components/FeaturedJobs"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MobileAppSection from "./components/MobileAppSection"
import QuickJobSearch from "./components/QuickJobSearch"
import RemoteJobs from "./components/RemoteJobs"
import WhatsappBtn from "./components/WhatsappBtn"

function App() {


  return (
    <div>
      <Header />
      <main>
        <Employers />
        <QuickJobSearch />
        <FeaturedJobs />
        <RemoteJobs />
        <FeaturedEmployers/>
        <MobileAppSection/>
        <WhatsappBtn/>
      </main>
        <Footer/>
    </div>
  )
}

export default App
