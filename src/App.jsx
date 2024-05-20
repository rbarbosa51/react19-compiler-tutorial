import { Hero, Timeline, Footer } from "./components"
function App() {
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-rose-300 text-rose-500">
     <Hero />
     <hr className="my-4"/>
     <Timeline />
     <hr className="my-4"/>
     <Footer />
    </div>
  )
}

export default App
