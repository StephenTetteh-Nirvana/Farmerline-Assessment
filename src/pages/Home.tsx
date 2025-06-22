import { useEffect } from "react";
import { farmerData } from "@/services/mockData";
import DataTable from "@/components/DataTable";
import DashboardCards from "@/components/DashboardCards";

const Home = () => {
  
  
 // save mockData to localStorage on page load
  useEffect(() => {
    const stored = localStorage.getItem("FarmerData");

    if (!stored || stored === null) {
      localStorage.setItem("FarmerData", JSON.stringify(farmerData));
    }
  }, []);

  return (
    <div className="w-[95%]">
      <DashboardCards />
      <DataTable/>
    </div>
  );
};

export default Home;
