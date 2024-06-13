import React from 'react'

function LinkButton({ href, children}) {
  return (
    <a href={href} className=' bg-black text-white px-4 py-1 rounded-md' > {children} </a>
  )
}

export default LinkButton