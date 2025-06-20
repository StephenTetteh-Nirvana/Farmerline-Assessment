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
import DatePicker from "./DatePicker"


const AddFarmer: React.FC = () => {
  return (
    <Dialog>
      <form>
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
          <DialogHeader>
            <DialogTitle>Add New Farmer</DialogTitle>
            <DialogDescription>
              Enter farmer information here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name-1" name="name" placeholder="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" placeholder="East Legon,Accra" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="contactNumber">Contact Number</Label>
              <Input id="contactNumber" type="number" name="contactNumber" placeholder="+233256983879" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="registrationDate">Registration Date</Label>
              <DatePicker/>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default AddFarmer;
