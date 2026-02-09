import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LifeAfterUI } from "@/components/landing"
import { PrivacyPolicy } from "@/pages/privacy-policy"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<main><LifeAfterUI /></main>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
