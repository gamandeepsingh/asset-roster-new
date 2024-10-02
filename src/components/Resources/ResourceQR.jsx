import React from 'react'
import QRCode from "react-qr-code"

const ResourceQR = () => {
  const [qrValue, setQrValue] = React.useState('')
  const [showQRCode, setShowQRCode] = React.useState(false)

  function generateQRCode() {
    setShowQRCode(true)
  }

  return (
    <div className='w-screen flex flex-col items-center mt-5'>
      <div className='w-full px-4 md:px-28 mx-auto flex flex-col items-center md:block justify-center'>
        <div className='w-full flex justify-center'>
          <h1 className='text-4xl font-dmSans  font-extrabold  text-center w-fit m-3'>QR Code Generator Software</h1>
        </div>
        <p className='text-center font-dmSans  text-2xl my-1'>Generating QR Code Is Now a Breeze</p>
        <p className='text-center font-dmSans  text-xl text-dark/50 my-1 md:w-2/4 mx-auto'>
          Generate customized QR (Quick Response) Codes according to your business requirements with <span className='text-green'>Assets Roster</span>
        </p>

        <div className='md:w-2/4 mx-auto p-5 shadow-md my-10 rounded-md'>
          <div className="input-group">
            <label htmlFor="qr-code" className='uppercase'>Provide an input to generate QR code</label>
            <input
              className='w-full'
              type="text"
              name="qr-code"
              value={qrValue}
              onChange={(e) => {
                setQrValue(e.target.value)
                setShowQRCode(false) 
              }}
            />
          </div>
          <div className='mt-2'>
            {showQRCode && qrValue && <QRCode value={qrValue} />}
          </div>
          <button 
            className="rounded-md border-2 text-sm md:text-lg  bg-green text-light border-light px-6 py-3 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5  w-full md:w-fit"
            onClick={generateQRCode}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResourceQR
