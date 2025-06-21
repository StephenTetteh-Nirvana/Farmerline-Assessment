import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import * as z from "zod/v4"
import DatePicker from "./DatePicker"


const AddFarmer: React.FC = () => {
  
  //Defining schema
  const formSchema = z.object({
    name: z.string().min(5, "Name should be at least 5 characters"),
    location: z.string().min(2, "Location should be more than two characters"),
    contactNumber: z.string().min(10, "Number should be at least 10 characters")
  })

  
  const [formData,setFormData] = useState({
    name:"",
    location:"",
    contactNumber:"",
    registrationDate:""
  })

  // function to update formData with values.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name , value } = e.target
    
    if (name === "contactNumber"){ // compares name with contactNumber before execution
      let convertedValue = value;

      if(!value.startsWith("+233")){
        convertedValue = value.replace(/^0+|^\+?/, ""); // removes any leading 0 or +
        convertedValue = `+233${convertedValue}` // update the convertedValue with "+233" at the start
      }

      // return all other states and updates the contact number only
      setFormData((prev) => ({
        ...prev,  
        contactNumber: convertedValue
      }))

    }else{
      setFormData((prev) => ({
        ...prev,  
        [name]: value
      }))
    }
  }

  //function to submit the form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const result = formSchema.safeParse(formData)
    console.log("result:",result)

    if(!result.success){
      const flattenedErrorArr = z.flattenError(result.error) 
      console.log("error",flattenedErrorArr)
    }

    console.log("this working")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className='bg-[#2666CF] rounded-sm flex items-center gap-2
        text-white hover:bg-[#2666CF] hover:text-white hover:cursor-pointer
        '
       >
        <Plus/>
        Add Farmer
      </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <DialogHeader>
            <DialogTitle>Add New Farmer</DialogTitle>
            <DialogDescription>
              Enter farmer information here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 mt-3">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name-1" name="name" placeholder="Pedro Duarte" value={formData.name} onChange={handleChange}/>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" placeholder="East Legon,Accra" onChange={handleChange} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="contactNumber">Contact Number</Label>
              <Input id="contactNumber" type="number" name="contactNumber" placeholder="+233256983879" onChange={handleChange} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="registrationDate">Registration Date</Label>
              <DatePicker/>
            </div>
          </div>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddFarmer;
