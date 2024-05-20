import { Route ,Routes} from 'react-router-dom'
import {Landing, SigninPage, SignupPage} from "@/Pages/Index"
import Layout from './Layout.tsx'
import { Conversation, ImageGen } from './components/index.ts'
import DashboardPage from './components/Dashboard/DashboardPage.tsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='' element={<Landing/>}/>  
      <Route path='/dashboard'  element={<DashboardPage/>}/>
      <Route path='/conversation' element={<Conversation/>}/>
      <Route path='/image' element={<ImageGen/>}/>
      <Route path="/signin"  element={<SigninPage/>}/>
      <Route path='/register' element={<SignupPage/>}/>
      </Route>
    </Routes>
  )
}

export default App