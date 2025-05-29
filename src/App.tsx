import { Button } from "./components/ui/button"

function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      Home page
      <Button variant="default" size="lg" className="mt-4">
        Click Me
      </Button>
    </div>
  )
}

export default App
