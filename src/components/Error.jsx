import useCotizador from "../hooks/useCotizador"

const Error = () => {
    const {error}=useCotizador()
  return (
    <div className="border text-center border-red-500 bg-red-200 py-3 text-red-700">
        <p>{error}</p>
    </div>
  )
}

export default Error