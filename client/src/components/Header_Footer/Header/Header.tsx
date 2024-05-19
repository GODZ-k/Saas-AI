import MobileView from './Mobile-Header'
import { UserButton } from '@clerk/clerk-react'

function Header() {
  return (
    <div className=' flex items-center p-4'>
      <MobileView/>
      <div className='flex justify-end w-full'>
        <UserButton afterSignOutUrl='/signin'/>
      </div>

    </div>
  )
}

export default Header