import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type ProductDisplayProps = {
  farmerId: string
}

type Farmer = {
  farmerId: string;
  name: string;
  location: string;
  contactNumber: string;
  registrationDate: string;
  productsPurchased: string[];
};

const FarmerProductsDisplay = ({ farmerId }: ProductDisplayProps) => {
  const farmerArr = localStorage.getItem("FarmerData")
  const farmerData = farmerArr !== null ? JSON.parse(farmerArr) : []
  
  const foundFarmer = farmerData.find((f: Farmer) => f.farmerId === farmerId) //finds the clicked farmer based on a condition.

  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button>
        <Eye className="text-white"/>
      </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{foundFarmer && foundFarmer.name}&apos;s Purchased Products</DialogTitle>
          <DialogDescription>
          {foundFarmer && foundFarmer.productsPurchased.map((product: string, index: number) => (
            <li key={index} className="text-slate-700">
              {product}
            </li>
          ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default FarmerProductsDisplay;
