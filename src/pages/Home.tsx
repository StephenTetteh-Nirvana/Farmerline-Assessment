import { useEffect,useState } from 'react'
import { farmerData } from '@/services/mockData'
import type { FormData } from '@/schema/formSchema'
import AddFarmer from '@/components/AddFarmer'
import DataTable from '@/components/DataTable'
import TotalFarmers from '@/components/TotalFarmers'

const Home = () => {

  console.log(farmerData)

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
 useEffect(() => {
  const stored = localStorage.getItem("FarmerData");

  if (!stored || stored === "null") {
    localStorage.setItem("FarmerData", JSON.stringify(farmerData));
  }
}, []);


  return (
    <div>
      <div className='flex gap-3'>
        <TotalFarmers/>
      </div>
      <div className='mt-5'>
        <AddFarmer formData={formData} setFormData={setFormData}/>
        <DataTable formData={formData} setFormData={setFormData}/>
      </div>
    </div>
  )
}


export default Home