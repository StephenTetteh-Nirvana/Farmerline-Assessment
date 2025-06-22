  import {
    Card,
    CardContent
  } from "@/components/ui/card" 
  import { useEffect, useState } from "react"
  import type { Farmer } from "@/types/types";
  
  
  const DashboardCards = () => {

    const [parsedData,setParsedData] = useState<Farmer[]>([])
    const [total,setTotal] = useState(0)
    
    //Set state to parsed on initial load
    const getLocalStorageData = (parsed: Farmer[]) => {
      setParsedData(parsed)
    }
    
    // sum up total product purchases
    const calculateTotalProducts = (parsed: Farmer[]) => {
      const total = parsed?.reduce((total,farmer)=> total + farmer?.productsPurchased.length,0)
      setTotal(total)
    }
    
    useEffect(()=>{
      const localStoreFarmerData = localStorage.getItem("FarmerData")
      const parsed = localStoreFarmerData !== null ? JSON.parse(localStoreFarmerData) : null 

      getLocalStorageData(parsed)
      calculateTotalProducts(parsed)
    },[])

    return (
    <div className="w-full grid grid-rows-1 sm:flex sm:flex-wrap gap-1.5 sm:gap-5">
      <Card className="sm:w-[250px] sm:h-[150px] bg-[#2666CF] text-white">
        <CardContent className="text-white">
          <p className="">Total Farmers</p>
          <h2 className="text-4xl font-medium">{parsedData?.length > 0 ? parsedData?.length : 0}</h2>
          <p className=" text-[15px] mt-1">+40% from last week</p>
        </CardContent>
      </Card>
  
      <Card className="sm:w-[250px] sm:h-[150px] bg-[#38b000]">
        <CardContent className="text-white">
          <p>New Registrations</p>
          <h2 className="text-4xl font-medium">20</h2>
          <p className="text-[15px] mt-1">+25% from last week</p>
        </CardContent>
      </Card>
  
      <Card className="sm:w-[250px] sm:h-[150px] bg-[#eeba0b]">
        <CardContent className="text-white">
          <p>Total Products Purchased</p>
          <h2 className="text-4xl font-medium">{total}</h2>
          <p className="text-[15px] mt-1">+20% from last week</p>
        </CardContent>
      </Card>

    </div>

  )
}

export default DashboardCards