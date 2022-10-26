function Error({ children }) {
  return (
    <>
        <p className='bg-red-600 text-white py-3 px-3 mt-2 mb-4 text-center'>{ children }</p>
    </>
  )
}

export default Error