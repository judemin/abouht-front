import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Team from "./pages/Team"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Service from "./pages/Service"
import About from "./pages/About"
import Preview from "./pages/Preview"
import ReactGA from "react-ga"

const TRACKING_ID = "G-QC9S9TTFPF" // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID)

const App = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/service" element={<Service />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
