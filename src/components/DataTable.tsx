import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import type { FormData } from "@/schema/formSchema";
import React, { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import type { Farmer } from "@/types/types";
import FarmerProductsDisplay from "./FarmerProductsDisplay";
import EditFarmer from "./EditFarmer";
import AddFarmer from "./AddFarmer";
import Sorting  from "./Sorting";

interface DataTableProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

const DataTable = ({ formData, setFormData }: DataTableProps) => {
  const [id, setId] = useState("")
  const [searchTerm,setSearchTerm] = useState("")
  const [searchResults,setSearchResults] = useState<Farmer[]>([])
  const [allFarmers, setAllFarmers] = useState<Farmer[]>([]);

  //runs get latest data from localStorage whenever formData changes.
  useEffect(() => {
    const farmerArr = localStorage.getItem("FarmerData");
    const parsed = farmerArr !== null ? JSON.parse(farmerArr) : [];
    setAllFarmers(parsed);
    setSearchResults(parsed)
  }, [formData]);

  // function to handle search 
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    setSearchTerm(value)

    if(value.trim() === ""){
      setSearchResults(allFarmers)
    }else{
      const result = allFarmers.filter((f)=> 
        f.firstName.toLowerCase().includes(value.toLowerCase()) || 
        f.lastName.toLowerCase().includes(value.toLowerCase()) || 
        f.farmerId.toLowerCase().includes(value.toLowerCase())
      )
      setSearchResults(result)
    }
  }

  const deleteFarmerData = (id: string) => {
    const filteredData = allFarmers.filter((f: Farmer) => f.farmerId !== id);
    setAllFarmers(filteredData);
    localStorage.setItem("FarmerData", JSON.stringify(filteredData));
    toast("Farmer deleted successfully", {
      duration: 2000,
      position: "top-center",
      action: {
        label: "OK",
        onClick: () => console.log("deleted"),
      },
    });

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <>
      <div className="flex-col items-center gap-3 mt-5">
        <div className="flex gap-3">
          <AddFarmer formData={formData} setFormData={setFormData} />
          <Input 
            id="search" 
            placeholder="Search by name/ID"
            className="w-[160px]"
            value={searchTerm}
            onChange={(e)=>handleSearch(e)}
          />
        </div>
        <div>
          <Sorting searchResults={searchResults} setSearchResults={setSearchResults}/>
        </div>
      </div>

      <Table className="border border-slate-200 mt-4 w-full">
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
          {searchResults.length > 0 ? searchResults.map((farmer) => (
            <TableRow key={farmer.farmerId}>
              <TableCell className="font-medium">{farmer.farmerId}</TableCell>
              <TableCell>{farmer.firstName + " " + farmer.lastName}</TableCell>
              <TableCell>{farmer.region + ", " + farmer.district}</TableCell>
              <TableCell>{farmer.contactNumber}</TableCell>
              <TableCell>{farmer.registrationDate}</TableCell>
              <TableCell>
                <div onClick={() => setId(farmer.farmerId)}>
                  <FarmerProductsDisplay farmerId={farmer.farmerId} />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-1.5">
                  <Pencil
                    size={17}
                    className="text-black cursor-pointer"
                    onClick={() => setId(farmer.farmerId)}
                  />
                  <Trash2
                    size={17}
                    className="text-red-600 cursor-pointer"
                    onClick={() => deleteFarmerData(farmer.farmerId)}
                  />
                </div>
              </TableCell>
            </TableRow>
            ))
            :
            <TableRow>
              <TableCell className="text-center">No farmers yet.</TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>
      {id && (
        <EditFarmer
        farmerID={id}
        formData={formData}
        setFormData={setFormData}
        />
      )}
    </>
  );
};

export default DataTable;
