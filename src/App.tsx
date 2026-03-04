import { UsersProvider } from "./context/users/index";
import { Home } from "./pages/Home"

function App() {
  return (
    <UsersProvider>
      <h1>User Carousel</h1>
      <Home />
    </UsersProvider>
  )
}

export default App
