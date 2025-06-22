  import {
    Card,
    CardContent
  } from "@/components/ui/card" 
  import { useEffect, useState } from "react"
  
  
  const DashboardCards = () => {

    type Farmer = {
      farmerId: string;
      firstName: string;
      lastName: string;
      region: string;
      district: string,
      contactNumber: string;
      registrationDate: string;
      productsPurchased: string[];
    };

    const localStoreFarmerData = localStorage.getItem("FarmerData")
    const parsed: Farmer[] = localStoreFarmerData !== null ? JSON.parse(localStoreFarmerData) : null 

    const [parsedData,setParsedData] = useState<Farmer[]>([])
    const [total,setTotal] = useState(0)

    //Set state to parsed on initial load
    const getLocalStorageData = () => {
      setParsedData(parsed)
    }

    // sum up total product purchases
    const calculateTotalProducts = () => {
      const total = parsed?.reduce((total,farmer)=> total + farmer?.productsPurchased.length,0)
      setTotal(total)
    }

    useEffect(()=>{
      getLocalStorageData()
      calculateTotalProducts()
    },[])

    return (
    <div className="flex gap-3 flex-wrap sm:gap-5">
      <Card className="sm:w-[300px] sm:h-[150px] bg-[#2666CF] text-white">
        <CardContent className="text-white">
          <p className="">Total Farmers</p>
          <h2 className="text-4xl font-medium">{parsedData?.length > 0 ? parsedData?.length : 0}</h2>
          <p className=" text-[15px] mt-1">+40% from last week</p>
        </CardContent>
      </Card>
  
      <Card className="sm:w-[300px] sm:h-[150px] bg-[#38b000]">
        <CardContent className="text-white">
          <p>New Registrations</p>
          <h2 className="text-4xl font-medium">20</h2>
          <p className="text-[15px] mt-1">+25% from last week</p>
        </CardContent>
      </Card>
  
      <Card className="sm:w-[300px] sm:h-[150px] bg-[#eeba0b]">
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