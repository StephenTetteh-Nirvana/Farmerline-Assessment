import DataTable from '@/components/DataTable'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

const Home : React.FC = () => {
  return (
    <div>
      <div className='flex justify-start'>
        <Button className='bg-[#2666CF] rounded-sm flex items-center gap-2
         text-white hover:bg-[#2666CF] hover:text-white hover:cursor-pointer
         '
         >
          <Plus/>
          <span>Add Farmer</span>
        </Button>
      </div>
      <DataTable/>
    </div>
  )
}

export default Home