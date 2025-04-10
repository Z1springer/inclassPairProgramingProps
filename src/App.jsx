import './App.css'
import Hobbies from "./components/Hobbies.jsx"

function App() {

  const hobbies = [
    { title: "Drawing", priceRange: "$$" },
    { title: "Writing", priceRange: "$" },
    { title: "Procrastination", priceRange: "$" },
  ]

  return (
    <>
      <Hobbies hobbies={hobbies} />
    </>
  )
}

export default App
