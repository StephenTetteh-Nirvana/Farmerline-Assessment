import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import type { FormData } from "@/schema/formSchema";
import FarmerProductsDisplay from "./FarmerProductsDisplay";
import EditFarmer from "./EditFarmer";
import AddFarmer from "./AddFarmer";

type Farmer = {
  farmerId: string;
  firstName: string;
  lastName: string;
  region: string;
  district: string;
  contactNumber: string;
  registrationDate: string;
  productsPurchased: string[];
};

type FormProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

const DataTable = ({ formData, setFormData }: FormProps) => {
  const [id, setId] = useState("");
  const [allFarmers, setAllFarmers] = useState<Farmer[]>([]);

  //runs get latest data from localStorage whenever formData changes.
  useEffect(() => {
    const farmerArr = localStorage.getItem("FarmerData");
    const parsed = farmerArr !== null ? JSON.parse(farmerArr) : [];
    setAllFarmers(parsed);
  }, [formData]);

  const deleteFarmerData = (id: string) => {
    const filteredData = allFarmers.filter((f: Farmer) => f.farmerId !== id);
    setAllFarmers(filteredData);
    localStorage.setItem("FarmerData", JSON.stringify(filteredData));
    toast("Farmer deleted successfully", {
      duration: 2000,
      position: "top-center",
      action: {
        label: "OK",
        onClick: () => console.log("deleted"),
      },
    });

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <>
      <AddFarmer formData={formData} setFormData={setFormData} />
      <Table className="border border-slate-200 mt-3">
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Contact Number</TableHead>
            <TableHead>Registration Date</TableHead>
            <TableHead>Products Purchased</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allFarmers.length > 0 ? allFarmers.map((farmer) => (
            <TableRow key={farmer.farmerId}>
              <TableCell className="font-medium">{farmer.farmerId}</TableCell>
              <TableCell>{farmer.firstName + " " + farmer.lastName}</TableCell>
              <TableCell>{farmer.region + ", " + farmer.district}</TableCell>
              <TableCell>{farmer.contactNumber}</TableCell>
              <TableCell>{farmer.registrationDate}</TableCell>
              <TableCell>
                <div onClick={() => setId(farmer.farmerId)}>
                  <FarmerProductsDisplay farmerId={farmer.farmerId} />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-1.5">
                  <Pencil
                    size={17}
                    className="text-black cursor-pointer"
                    onClick={() => setId(farmer.farmerId)}
                  />
                  <Trash2
                    size={17}
                    className="text-red-600 cursor-pointer"
                    onClick={() => deleteFarmerData(farmer.farmerId)}
                  />
                </div>
              </TableCell>
            </TableRow>
            ))
            :
            <TableRow>
              <TableCell className="text-center">No farmers yet.</TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>
      {id && (
        <EditFarmer
          farmerID={id}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </>
  );
};

export default DataTable;
