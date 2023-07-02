import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import NavigationBar from "./components/NavigationBar"

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
