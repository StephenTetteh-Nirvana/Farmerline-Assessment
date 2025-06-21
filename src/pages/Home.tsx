import { useEffect } from 'react'
import { farmerData } from '@/services/mockData'
import AddFarmer from '@/components/AddFarmer'
import DataTable from '@/components/DataTable'
import React from 'react'

const Home : React.FC = () => {

  // save mockData to localStorage on page load
  useEffect(()=>{
    const farmerArr = localStorage.getItem("FarmerData")
    const parsed = farmerArr !== null ? 
      JSON.parse(farmerArr) 
      : 
      localStorage.setItem("FarmerData",JSON.stringify(null))
    
    if(parsed == null) {
      localStorage.setItem("FarmerData",JSON.stringify(farmerData))
      console.log(parsed)
    }
  },[])

  return (
    <div>
      <AddFarmer/>
      <DataTable/>
    </div>
  )
}


export default Home