import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { formSchema } from "@/schema/formSchema";
import type { FormData, SchemaErrors } from "@/schema/formSchema";
import { toast } from "sonner";
import * as z from "zod/v4";
import DatePicker from "./DatePicker";
import EditProductsDropdown from "./EditProductsDropdown";

interface EditFarmer {
  farmerID: string;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const EditFarmer = ({ farmerID, formData, setFormData }: EditFarmer) => {
  const farmerArr = localStorage.getItem("FarmerData");
  const parsedData = farmerArr !== null ? JSON.parse(farmerArr) : [];
  const foundFarmer = parsedData.find((f: FormData) => f.farmerId === farmerID);

  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<SchemaErrors>({});

  useEffect(() => {
    if (farmerID) {
      setFormData(foundFarmer);
      setOpen(true); // automatically open when a farmer ID is set
      console.log(foundFarmer);
    }
  }, [farmerID]);

  // function to update formData with values.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //function to submit the form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const flattenedErrorArr = z.flattenError(result.error);
      setErrors(flattenedErrorArr.fieldErrors);
    } else {
      const updatedFormData = parsedData.map((farmer: FormData) => {
        if (farmer.farmerId === formData.farmerId) {
          return {
            ...formData,
          };
        } else {
          return farmer;
        }
      });

      setFormData(updatedFormData);
      localStorage.setItem("FarmerData", JSON.stringify(updatedFormData));

      //   Toast message when farmer is added successfully
      toast("Farmer Information Updated", {
        duration: 2500,
        position: "top-center",
        action: {
          label: "OK",
          onClick: () => console.log("success"),
        },
      });
      clearFields(); // clear fields
      setTimeout(() => {
        setOpen(false);
        window.location.reload(); // load to fetch new data from localStorage
      }, 500);
    }
  };

  //clear form fields
  const clearFields = () => {
    setFormData({
      farmerId: "",
      firstName: "",
      lastName: "",
      region: "",
      district: "",
      contactNumber: "",
      registrationDate: "",
      productsPurchased: [""],
    });

    setErrors({});
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) {
          clearFields(); // Clear form when dialog closes
        }
      }}
    >
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={(e) => handleSubmit(e)}>
          <DialogHeader>
            <DialogTitle>Edit Farmer Information</DialogTitle>
            <DialogDescription>
              Edit farmer information here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 mt-3">
            <section className="flex flex-row gap-2">
              <div className="grid gap-1.5">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Stephen"
                  value={formData.firstName}
                  onChange={(e) => handleChange(e)}
                  className={errors.firstName ? "border border-red-600" : ""}
                />
                <span className="text-[12px] text-red-600">
                  {errors && errors.firstName}
                </span>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Tetteh"
                  value={formData.lastName}
                  onChange={(e) => handleChange(e)}
                  className={errors.lastName ? "border border-red-600" : ""}
                />
                <span className="text-[12px] text-red-600">
                  {errors && errors.lastName}
                </span>
              </div>
            </section>

            <section className="flex gap-2">
              <div className="grid gap-1.5">
                <Label htmlFor="region">Region</Label>
                <Input
                  id="region"
                  name="region"
                  placeholder="Central"
                  value={formData.region}
                  onChange={(e) => handleChange(e)}
                  className={errors.region ? "border border-red-600" : ""}
                />
                <span className="text-[12px] text-red-600">
                  {errors && errors.region}
                </span>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="district">District</Label>
                <Input
                  id="district"
                  name="district"
                  placeholder="Accra"
                  value={formData.district}
                  onChange={(e) => handleChange(e)}
                  className={errors.district ? "border border-red-600" : ""}
                />
                <span className="text-[12px] text-red-600">
                  {errors && errors.district}
                </span>
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
                  value={formData.contactNumber}
                  onChange={(e) => handleChange(e)}
                  className={
                    errors.contactNumber ? "border border-red-600" : ""
                  }
                />
                <span className="text-[12px] text-red-600">
                  {errors && errors.contactNumber}
                </span>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="registrationDate">Registration Date</Label>
                <DatePicker
                  setFormData={setFormData}
                  foundFarmer={foundFarmer}
                />
                <span className="text-[12px] text-red-600">
                  {!formData.registrationDate && "Please select a date"}
                </span>
              </div>
            </section>

            <div className="grid gap-3">
              <Label htmlFor="productsPurchased">Products Purchased</Label>
              <EditProductsDropdown foundFarmer={foundFarmer}/>
              <span className="text-[12px] text-red-600">
                {!foundFarmer.productsPurchased && "Please select product(s)"}
              </span>
            </div>

            <div>
              <ul>
                <p className="text-[13px] font-medium">
                  You have selected {foundFarmer?.productsPurchased.length} product(s).
                </p>
                {foundFarmer?.productsPurchased.map(
                  (data: string, index: number) => (
                    <li key={index} className="text-[12px]">
                      {data ? data : ""}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <DialogFooter className="mt-4">
            <DialogClose onClick={() => clearFields()}></DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditFarmer;
