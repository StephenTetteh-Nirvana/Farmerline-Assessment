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

interface ProductsDropdownProps {
  formData: FormData,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const AddProductsDropdown = ({formData,setFormData}: ProductsDropdownProps) => {

    // first function accepts product and second function gets called when checkbox changes
    const handleChange = (product: string) => (checked: boolean) => { 
      setFormData((prev) => {
        //this function appends or removes products based ont the checked condition
        const updatedProducts = checked
          ? [...prev.productsPurchased, product]
          : prev.productsPurchased.filter((p) => p !== product);
      
        return {
          ...prev,
          productsPurchased: updatedProducts,
        };
      });
    };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Select</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Products</DropdownMenuLabel>
        <DropdownMenuSeparator />
          {["Seeds", "Fertilizer", "Pesticides", "Tools"].map((product) => (
            <DropdownMenuCheckboxItem
              key={product}
              checked={formData.productsPurchased.includes(product)}
              onCheckedChange={handleChange(product)}
            >
              {product}
            </DropdownMenuCheckboxItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AddProductsDropdown;
