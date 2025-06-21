  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { farmerData } from "../services/mockData"
  import { useEffect, useState } from "react"
  import FarmerProductsDisplay from "./FarmerProductsDisplay"
  import { Pencil, Trash2 } from "lucide-react"

  const DataTable: React.FC = () => {
    const [id,setId] = useState("")
    const [allFarmers, setAllFarmers] = useState<Farmer[]>([]);
    
    //stores farmer Data in localStorage on page load
    useEffect(()=>{
      const farmerArr = localStorage.getItem("FarmerData")
      const parsed = farmerArr !== null ? JSON.parse(farmerArr) : []
      setAllFarmers(parsed)
      
      if(parsed.length === 0) {
        localStorage.setItem("FarmerData",JSON.stringify(farmerData))
      }
    },[])
      
    // type of array data for allFarmers state.
    type Farmer = {
      farmerId: string;
      name: string;
      location: string;
      contactNumber: string;
      registrationDate: string;
      productsPurchased: string[];
    };


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
            <TableCell>{farmer.name}</TableCell>
            <TableCell>{farmer.location}</TableCell>
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