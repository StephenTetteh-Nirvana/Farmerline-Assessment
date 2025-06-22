import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { FormData } from "@/schema/formSchema"
import { useEffect, useState } from "react"

interface EditProductsDropdownProps {
  foundFarmer: FormData
}

const EditProductsDropdown = ({foundFarmer}: EditProductsDropdownProps) => {

    const [selectedProducts, setSelectedProducts] = useState<string[]>(foundFarmer.productsPurchased ?? []);

    // first function accepts product and second function gets called when checkbox changes
    const handleChange = (product: string) => (checked: boolean) => { 
        //this function appends or removes products based ont the checked condition
            const updatedProducts = checked
            ? [...selectedProducts, product]
            : selectedProducts.filter((p) => p !== product);
            
            console.log("updatedFarmerFound:",updatedProducts)

            //   console.log("FOUNDFAMER:",foundFarmer)
    };

    useEffect(()=>{
        setSelectedProducts(foundFarmer.productsPurchased)
    },[])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Add/Remove</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Products</DropdownMenuLabel>
        <DropdownMenuSeparator />
          {["Seeds", "Fertilizer", "Pesticides", "Tools"].map((product) => (
            <DropdownMenuCheckboxItem
              key={product}
              checked={selectedProducts.includes(product)}
              onCheckedChange={handleChange(product)}
            >
              {product}
            </DropdownMenuCheckboxItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default EditProductsDropdown;
