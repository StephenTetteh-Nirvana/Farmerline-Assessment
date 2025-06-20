  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { useEffect, useState } from "react"
  import { Pencil, Trash2 } from "lucide-react"
  import FarmerProductsDisplay from "./FarmerProductsDisplay"

  const DataTable: React.FC = () => {
    // type of array data for allFarmers state.
    type Farmer = {
      farmerId: string;
      firstName: string;
      lastName: string;
      region: string;
      district: string,
      name: string;
      location: string;
      contactNumber: string;
      registrationDate: string;
      productsPurchased: string[];
    };
    const [id,setId] = useState("")
    const [allFarmers, setAllFarmers] = useState<Farmer[]>([]);
    
    //runs every second to get latest data and stores farmer Data in state on initial load
    useEffect(()=>{
      setInterval(()=>{
        console.log("running every second")
        const farmerArr = localStorage.getItem("FarmerData")
        const parsed = farmerArr !== null ? JSON.parse(farmerArr) : []
        setAllFarmers(parsed)
      },1000)
    },[])

      
      
  return(
    <Table className="border border-slate-200 mt-3">
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Contact Number</TableHead>
          <TableHead>Registration Date</TableHead>
          <TableHead>Products Purchased</TableHead>
          <TableHead>Actions</TableHead>

        </TableRow>
      </TableHeader>
      <TableBody>
        {allFarmers.map((farmer)=>(
          <TableRow key={farmer.farmerId}>
            <TableCell className="font-medium">{farmer.farmerId}</TableCell>
            <TableCell>{farmer.name ? farmer.name : farmer.firstName + ' ' + farmer.lastName}</TableCell>
            <TableCell>{farmer.location ? farmer.location : farmer.region + ', ' + farmer.district }</TableCell>
            <TableCell>{farmer.contactNumber}</TableCell>
            <TableCell>{farmer.registrationDate}</TableCell>
            <TableCell>
              <div onClick={()=>setId(farmer.farmerId)}>
                <FarmerProductsDisplay farmerId={id}/>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-1.5">
                <Pencil size={17} className="text-black cursor-pointer"/>  
                <Trash2 size={17} className="text-red-600 cursor-pointer"/>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


export default DataTable