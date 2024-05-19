import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './components'

export default function Layout() {
  return (
    <main>
        <Header/>
        <Outlet/>
        <Footer/>
    </main>
  )
}