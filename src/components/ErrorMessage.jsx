import { useEffect } from "react"

export default function ErrorMessage({ isError, setIsError }) {
    useEffect(() => {
        isError &&
            setTimeout(() => {
                setIsError(false)
            }, 3500)
    }, null)

    return (
        <div style={{ display: isError ? 'block' : 'none' }} className="mx-auto w-[90%] lg:w-[900px] mt-6 bg-red-200 text-red-800 p-5 text-lg rounded-lg font-semibold">
            Please Enter valid data!
        </div>
    )
}
