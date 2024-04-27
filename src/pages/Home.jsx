import React from 'react'
import { Typography } from '@material-tailwind/react'
import { Sidebar } from '../components/sidebar'
import Dashboard from './Dashboard'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div className=' flex min-h-screen'>
        <Sidebar />

        <div className=' mx-10 my-5 '>
            {/* <Dashboard /> */}
            <Outlet />
        </div>
    </div>
  )
}
