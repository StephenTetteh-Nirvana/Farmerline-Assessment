import { useEffect,useState } from 'react'
import { farmerData } from '@/services/mockData'
import type { FormData } from '@/schema/formSchema'
import AddFarmer from '@/components/AddFarmer'
import DataTable from '@/components/DataTable'
import React from 'react'

const Home : React.FC = () => {
 
  const localStoreFarmerData = localStorage.getItem("FarmerData")
  const parsedData = localStoreFarmerData !== null ? JSON.parse(localStoreFarmerData) : null 
  
  const [formData,setFormData] = useState<FormData>({
    farmerId: "",
    firstName:"",
    lastName:"",
    region:"",
    district:"",
    contactNumber:"",
    registrationDate: "",
    productsPurchased: []
  })

  // save mockData to localStorage on page load
  useEffect(()=>{
    const farmerArr = localStorage.getItem("FarmerData")
    const parsed = farmerArr !== null ? 
      JSON.parse(farmerArr) 
      : 
      localStorage.setItem("FarmerData",JSON.stringify(null))
    
    if(parsed == null) {
      localStorage.setItem("FarmerData",JSON.stringify(farmerData))
    }
  },[])

  return (
    <div>
      <AddFarmer formData={formData} setFormData={setFormData}/>
      <DataTable formData={formData} setFormData={setFormData}/>
    </div>
  )
}


export default Home