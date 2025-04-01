import { useState } from "react"
import inputs from "../constants/inputs"

export default function Form({ setForm, setIsError }) {
    const [obj, setObj] = useState({
        id: new Date().getTime(),
        name: '',
        lastName: '',
        email: '',
        phone: ''
    })

    const handleInput = e => {
        const name = e.target.name
        const value = e.target.value
        setObj(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        if (!obj.name || !obj.lastName || !obj.email || !obj.phone) {
            setIsError(true)
        } else {
            setIsError(false)
            setForm(prev => ([...prev, obj]))
            setObj({
                id: new Date().getTime(),
                name: '',
                lastName: '',
                email: '',
                phone: ''
            })
        }
    }

    return (
        <div spellCheck="false" className="bg-white p-10 rounded-lg shadow-lg mx-auto w-[90%] lg:w-[900px] flex flex-wrap justify-center lg:justify-between items-center gap-10 *:p-2 *:rounded-md">
            {
                inputs.map((inp, i) => {
                    return (
                        <input key={i} className="w-full lg:w-[45%] outline-none border-2 border-slate-300 focus:border-2 focus:border-blue-600" maxLength={20} name={inp.name} type={inp.type} placeholder={inp.placeholder} value={obj[inp.name]} onChange={handleInput} />
                    )
                })
            }
            <button onClick={handleSubmit} className="w-full bg-[#304ffe] text-white cursor-pointer">Add Contact</button>
        </div>
    )
}
