import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center bg-white h-screen gap-5'>
 	{/* <span className='sr-only'>Loading...</span> */}
  	<div className='h-6 w-6 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	<div className='h-6 w-6 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	<div className='h-6 w-6 bg-gray-600 rounded-full animate-bounce'></div>
</div>
  )
}

export default Loading