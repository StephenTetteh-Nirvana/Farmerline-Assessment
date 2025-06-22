import { useEffect,useState } from 'react'
import { farmerData } from '@/services/mockData'
import DataTable from '@/components/DataTable'
import TotalFarmers from '@/components/DashboardCards'

const Home = () => {
  
  const [formData,setFormData] = useState({
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
        <DataTable formData={formData} setFormData={setFormData}/>
      </div>
    </div>
  )
}


export default Home