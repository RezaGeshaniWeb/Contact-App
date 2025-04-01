import { useState } from "react"
import ContactList from "./components/ContactList"
import Form from "./components/Form"
import Header from "./components/Header"
import ErrorMessage from "./components/ErrorMessage"
import Info from "./components/Info"

function App() {
  const [form, setForm] = useState([])
  const [isError, setIsError] = useState(false)

  return (
    <main className="w-full bg-slate-200 min-h-screen select-none">
      <Header />
      <Form setForm={setForm} setIsError={setIsError} />
      <ErrorMessage isError={isError} setIsError={setIsError} />
      <ContactList form={form} setForm={setForm} />
      <Info />
    </main>
  )
}

export default App
