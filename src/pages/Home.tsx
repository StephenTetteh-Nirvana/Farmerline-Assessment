import AddFarmer from '@/components/AddFarmer'
import DataTable from '@/components/DataTable'
import React from 'react'

const Home : React.FC = () => {

  return (
    <div>
      <div className='flex justify-end'>
        {/* <Button className='bg-[#2666CF] rounded-sm flex items-center gap-2
         text-white hover:bg-[#2666CF] hover:text-white hover:cursor-pointer
         '
         onClick={open}
         >
          <Plus/>
          <span>Add Farmer</span>
        </Button> */}
      </div>
      <AddFarmer/>
      <DataTable/>
    </div>
  )
}


export default Home