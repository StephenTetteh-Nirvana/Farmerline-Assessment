import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Farmer } from "@/types/types"
import React, { useState,useEffect } from "react"

interface SortingProps {
  searchResults: Farmer[]
  setSearchResults: React.Dispatch<React.SetStateAction<Farmer[]>>
}

const Sorting = ({searchResults,setSearchResults}: SortingProps) => {

  const headers = ["Name","RegistrationDate","Region","District"]
  const orders = ["Asc","Desc"]

  const [selectedHeader,setSelectedHeader] = useState("")
  const [selectedOrder,setSelectedOrder] = useState("")

  const handleHeaderSelect = (value: string) => {
    setSelectedHeader(value)
  }

  const handleOrderSelect = (value: string) => {
    setSelectedOrder(value)
  }

  useEffect(() => {
    if (!selectedHeader || !selectedOrder) return;


    // Manual data sorting function
    const sorted  = [...searchResults].sort((a,b)=>{
      if(selectedHeader === "Name"){
        const nameA = a.lastName.toLowerCase()
        const nameB = b.lastName.toLowerCase()
        return selectedOrder === "Asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA) // compares strings like the localeCompare(nameA)
      }
      
      else if( selectedHeader === "RegistrationDate"){
        const dateA = a.registrationDate.toLowerCase()
        const dateB = b.registrationDate.toLowerCase()
        return selectedOrder === "Asc" ? dateA.localeCompare(dateB) : dateB.localeCompare(dateA)
      }

      else if(selectedHeader === "Region"){
        const regionA = a.region.toLowerCase()
        const regionB = b.region.toLowerCase()
        return selectedOrder === "Asc" ? regionA.localeCompare(regionB) : regionB.localeCompare(regionA)
      }

      else if(selectedHeader === "District"){
        const districtA = a.district.toLowerCase()
        const districtB = b.district.toLowerCase()
        return selectedOrder === "Asc" ? districtA.localeCompare(districtB) : districtB.localeCompare(districtA)
      }

      
      return 0; // keep order if nothing changed
    })
    
    console.log("sorted Data:",sorted)
    
    setSearchResults(sorted)
    // setSortedData(sorted);
  }, [selectedHeader, selectedOrder]);
  

  return (
    <div className="flex gap-3 mt-4">
    <Select onValueChange={handleHeaderSelect}>
      <SelectTrigger className="w-[150px] sm:w-[180px]">
        <SelectValue placeholder="Select header" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Headers</SelectLabel>
          {headers.map((header)=>(
            <SelectItem key={header} value={header}>{header}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>

    <Select onValueChange={handleOrderSelect}>
      <SelectTrigger className="w-[100px] sm:w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {orders.map((order)=>(
            <SelectItem key={order} value={order}>{order}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}

export default Sorting;
