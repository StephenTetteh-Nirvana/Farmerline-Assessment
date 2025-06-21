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
  import { Button } from "@/components/ui/button"
  import FarmerProductsDisplay from "./FarmerProductsDisplay"

  const DataTable: React.FC = () => {

    const [id,setId] = useState("")
    const [allFarmers, setAllFarmers] = useState<Farmer[]>([]);
    
    //stores farmer Data in localStorage on page load
    useEffect(()=>{
      const farmerArr = localStorage.getItem("FarmerData")
      setAllFarmers(farmerArr !== null ? JSON.parse(farmerArr) : [])
      
      if(allFarmers.length === 0) {
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
            {/* / Replace this later(causing the button nested in another button error) */}
              <Button onClick={()=>setId(farmer.farmerId)}>
                <FarmerProductsDisplay farmerId={id}/>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


export default DataTable