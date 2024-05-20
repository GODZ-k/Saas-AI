import Sidebar from '../Header_Footer/Sidebar/Sidebar'

function Dashboard({children}:any) {
  return (
   <div>
      <Sidebar/>
    <main className=' text-black md:pl-72'>
      {children}
    </main>
   </div>
  )
}

export default Dashboard