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
import { useState } from "react"

interface SortingProps {
    searchResults: Farmer
}

const Sorting = ({searchResults}: SortingProps) => {

  const headers = ["Name","RegistrationDate"]
  const orders = ["Asc","Desc"]

  const [selectedHeader,setSelectedHeader] = useState("")
  const [selectedOrder,setSelectedOrder] = useState("")

  const handleHeaderSelect = (value: string) => {
    console.log(value)
    setSelectedHeader(value)
  }

  const handleOrderSelect = (value: string) => {
    console.log(value)
    setSelectedOrder(value)
  }


  return (
    <div className="flex gap-3">
    <Select onValueChange={handleHeaderSelect}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select header to sort" />
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
      <SelectTrigger className="w-[180px]">
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
