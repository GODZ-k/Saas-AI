import React from 'react'
import Sidebar from '../Header_Footer/Sidebar/Sidebar'
import DashboardPage from './DashboardPage'

function Dashboard() {
  return (
   <div>
      <Sidebar/>
    <main className=' text-black md:pl-72'>
      <DashboardPage/>
    </main>
   </div>
  )
}

export default Dashboard