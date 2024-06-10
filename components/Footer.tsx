import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center'>
      <div className='text-white'>
        &copy; {new Date().getFullYear()} - Handcrafted by Value1.in
      </div>
    </footer>
  )
}

export default Footer
