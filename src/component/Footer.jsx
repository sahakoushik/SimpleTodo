import React from 'react'

const Footer = () => {
  return (
    <div className="mb-5 flex row justify-between">
        <div className='text-sm text-slate-500'>Complete All</div>
        <div className='flex row gap-2 items-center'>
            <div className='text-sm text-slate-500 border-r pr-2 border-slate-500'>All</div>
            <div className='text-sm text-slate-500 border-r pr-2 border-slate-500'>Complete</div>
            <div className='text-sm text-slate-500 border-r pr-2 border-slate-500'>Incomplete</div>
            <div className='bg-red-400 h-4 w-8 pointer'></div>
            <div className='bg-orange-400 h-4 w-8 pointer'></div>
            <div className='bg-lime-400 h-4 w-8 pointer'></div>
        </div>
    </div>
  )
}

export default Footer