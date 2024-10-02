import React from 'react'
import Barcode from "react-barcode"

const ResourceBarcode = () => {
  const [barcodeValue, setBarcodeValue] = React.useState('')
  const [showBarcode, setShowBarcode] = React.useState(false)

  function generateBarcode() {
    setShowBarcode(true)
  }

  return (
    <div className='w-screen flex flex-col items-center mt-5'>
      <div className='w-full px-4 md:px-28 mx-auto flex flex-col items-center md:block justify-center'>
        <div className='w-full flex justify-center'>
          <h1 className='text-4xl font-dmSans  font-extrabold  text-center w-fit m-3'>Barcode Generator Software</h1>
        </div>
        <p className='text-center font-dmSans  text-2xl my-1'>Simplifying Barcode Generation</p>
        <p className='text-center font-dmSans  text-xl text-dark/50 my-1 md:w-2/4 mx-auto'>
          <span className='text-green'>Assets Roster</span> gives you the ability to enter essential data & generate barcodes easily.
        </p>

        <div className='md:w-2/4 mx-auto p-5 shadow-md my-10 rounded-md'>
          <div className="input-group">
            <label htmlFor="bar-code" className='uppercase'>Provide an input to generate Barcode</label>
            <input
              className='w-full'
              type="text"
              name="bar-code"
              value={barcodeValue}
              onChange={(e) => {
                setBarcodeValue(e.target.value)
                setShowBarcode(false) 
              }}
            />
          </div>
          <div className='mt-2'>
            {barcodeValue && showBarcode && <Barcode value={barcodeValue} />}
          </div>
          <button 
            className="rounded-md border-2 text-sm md:text-lg  bg-green text-light border-light px-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5  w-full md:w-fit"
            onClick={generateBarcode}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResourceBarcode
