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
import type { Farmer } from "@/types/types"

interface ProductDisplayProps {
  farmerId: string
}

const FarmerProductsDisplay = ({ farmerId }: ProductDisplayProps) => {
  const farmerArr = localStorage.getItem("FarmerData")
  const farmerData = farmerArr !== null ? JSON.parse(farmerArr) : []
  
  const foundFarmer = farmerData.find((f: Farmer) => f.farmerId === farmerId) //finds the clicked farmer based on a condition.
  const farmerNameFormat = foundFarmer?.name ? foundFarmer?.name : foundFarmer?.firstName + ' ' + foundFarmer?.lastName 
  // const farmerNameFormat = foundFarmer.name ? foundFarmer.name : foundFarmer.firstName + ' ' + foundFarmer.lastName 


  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button>
        <Eye className="text-white"/>
      </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{farmerNameFormat}&apos;s Purchased Products</DialogTitle>
          <DialogDescription>
          {foundFarmer?.productsPurchased?.length > 0 ? (
            foundFarmer.productsPurchased.map((product: string, index: number) => (
              <li key={index} className="text-slate-700">
                {product}
              </li>
            ))
          ) : (
            <span>No products yet.</span>
          )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default FarmerProductsDisplay;
