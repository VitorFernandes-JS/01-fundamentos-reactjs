import { Teste } from "./teste";
import { Header } from "./components/Header";
import "./global.css"

export function App() {
  return (
    <div>
      <Header />
      <Teste author="teste1" teste={1} />
    </div>
  )
}

