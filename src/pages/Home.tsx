import AddFarmer from '@/components/AddFarmer'
import DataTable from '@/components/DataTable'
import React from 'react'

const Home : React.FC = () => {

  return (
    <div>
      <div className='flex justify-end'>
      </div>
      <AddFarmer/>
      <DataTable/>
    </div>
  )
}


export default Home