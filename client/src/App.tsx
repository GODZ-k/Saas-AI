import { Route ,Routes} from 'react-router-dom'
import {Landing, SigninPage, SignupPage} from "@/Pages/Index"
import Layout from './Layout.tsx'
import { Dashboard } from './components/index.ts'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='' element={<Landing/>}/>  
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path="/signin"  element={<SigninPage/>}/>
      <Route path='/register' element={<SignupPage/>}/>
      </Route>
    </Routes>
  )
}

export default App