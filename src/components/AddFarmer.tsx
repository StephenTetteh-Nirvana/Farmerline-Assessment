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
import { formSchema } from "@/schema/formSchema"
import { toast } from 'sonner'

import type {FormData,SchemaErrors } from "@/schema/formSchema"
import * as z from "zod/v4"
import DatePicker from "./DatePicker"
import ProductsDropdown from "./ProductsDropdown"

type FormProps = {
  formData: FormData,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const AddFarmer = ({formData,setFormData}: FormProps) => {

  const [errors,setErrors] = useState<SchemaErrors>({})
  const [open,setOpen] = useState(false)
  
  const localStoreFarmerData = localStorage.getItem("FarmerData")
  const parsedData = localStoreFarmerData !== null ? JSON.parse(localStoreFarmerData) : null 

  const lastItem = parsedData?.at(-1)
  const lastItemID = lastItem?.farmerId
  
  // this logic generates a new dummy id for our new product.
  const generateID = (lastItemID: string) =>{
    const extractNumericValue = lastItemID?.slice(1)
    const newNumericValue = Number(extractNumericValue) + 1;
    const newID = `F00${String(newNumericValue)}`
    return newID
  }
  
  const newID = generateID(lastItemID)

  // function to update formData with values.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name , value } = e.target
      setFormData((prev) => ({
        ...prev,  
        [name]: value
      }))
  }

  //function to submit the form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = formSchema.safeParse(formData)

    if(!result.success){
      const flattenedErrorArr = z.flattenError(result.error)
      setErrors(flattenedErrorArr.fieldErrors)
    }else{
      //Insert new Id and update localStorage with newData
      const updatedFormData = {...formData, farmerId: newID}
      setFormData(updatedFormData);
      const newFarmerData = [...parsedData, updatedFormData]
      localStorage.setItem("FarmerData",JSON.stringify(newFarmerData))
      
      // Toast message when farmer is added successfully
      toast("New Farmer Added",{
        duration: 2500,
        position: "top-center",
        action: {
          label: "OK",
          onClick: () => console.log("success"),
        },
      });
      clearFields() // clear fields after adding new farmer
      setTimeout(() => {
        setOpen(false);
        window.location.reload()
      }, 500);
    }
  }

  //clear form fields
  const clearFields = () =>{
    setFormData({
      farmerId: "",
      firstName:"",
      lastName:"",
      region:"",
      district:"",
      contactNumber:"",
      registrationDate: "",
      productsPurchased: []
    })

    setErrors({})
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      setOpen(isOpen);
      if (!isOpen) {
        clearFields(); // Clear form when dialog closes
      }
    }}>
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

            <section className="flex flex-row gap-2">
              <div className="grid gap-1.5">
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName" 
                  name="firstName" 
                  placeholder="Stephen" value={formData.firstName} 
                  onChange={(e)=>handleChange(e)}
                  className={errors.firstName ? "border border-red-600" : ""}
                  />
                <span className="text-[12px] text-red-600">{errors && errors.firstName}</span>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName" 
                  name="lastName" 
                  placeholder="Tetteh" value={formData.lastName} 
                  onChange={(e)=>handleChange(e)}
                  className={errors.lastName ? "border border-red-600" : ""}
                  />
                <span className="text-[12px] text-red-600">{errors && errors.lastName}</span>
              </div>
            </section>

            <section className="flex gap-2">
              <div className="grid gap-1.5">
                <Label htmlFor="region">Region</Label>
                <Input 
                  id="region" 
                  name="region" 
                  placeholder="Central" value={formData.region} 
                  onChange={(e)=>handleChange(e)}
                  className={errors.region ? "border border-red-600" : ""}
                  />
                <span className="text-[12px] text-red-600">{errors && errors.region}</span>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="district">District</Label>
                <Input 
                  id="district" 
                  name="district" 
                  placeholder="Accra" value={formData.district} 
                  onChange={(e)=>handleChange(e)}
                  className={errors.district ? "border border-red-600" : ""}
                  />
                <span className="text-[12px] text-red-600">{errors && errors.district}</span>
              </div>
            </section>
            
            <section className="flex gap-2">
              <div className="grid gap-1.5">
                <Label htmlFor="contactNumber">Contact Number</Label>
                <Input 
                  id="contactNumber" 
                  type="number" 
                  name="contactNumber" 
                  placeholder="0256983879" 
                  onChange={(e)=>handleChange(e)}
                  className={errors.contactNumber ? "border border-red-600" : ""} 
                />
                <span className="text-[12px] text-red-600">{errors && errors.contactNumber}</span>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="registrationDate">Registration Date</Label>
                <DatePicker setFormData={setFormData} foundFarmer={formData}/>
                <span className="text-[12px] text-red-600">{!formData.registrationDate && "Please select a date"}</span>
              </div>
            </section>

            <section>
              <div className="grid gap-3">
                <Label htmlFor="productsPurchased">Products Purchased</Label>
                <ProductsDropdown formData={formData} setFormData={setFormData}/>
                <span className="text-[12px] text-red-600">{!formData.productsPurchased && "Please select product(s)"}</span>
              </div>
  
              <div>
                <ul>
                  <p className="text-[13px] font-medium">You have selected {formData.productsPurchased.length} product(s).</p>
                  {formData.productsPurchased.map((data,index)=>(
                    <li key={index} className="text-[12px]">{data ? data : ""}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          <DialogFooter className="mt-4">
            <DialogClose>
              <Button variant="outline" onClick={()=>clearFields()}>Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddFarmer;

