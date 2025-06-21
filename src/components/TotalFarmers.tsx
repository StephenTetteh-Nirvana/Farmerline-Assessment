import {
    Card,
    CardContent
  } from "@/components/ui/card"


const TotalFarmers = () => {
  return (
    <div className="flex gap-3 flex-wrap sm:gap-5">
      <Card className="sm:w-[300px] sm:h-[200px]">
        <CardContent>
          <p className="text-slate-500">Total Farmers</p>
          <h2 className="text-4xl font-medium">20</h2>
          <p className="text-slate-500 text-[15px] mt-1">+40% from last week</p>
        </CardContent>
      </Card>
  
      <Card className="sm:w-[300px] sm:h-[200px]">
        <CardContent>
          <p className="text-slate-500">Total Farmers</p>
          <h2 className="text-4xl font-medium">20</h2>
          <p className="text-slate-500 text-[15px] mt-1">+40% from last week</p>
        </CardContent>
      </Card>
  
      <Card className="sm:w-[300px] sm:h-[200px]">
        <CardContent>
          <p className="text-slate-500">Total Farmers</p>
          <h2 className="text-4xl font-medium">20</h2>
          <p className="text-slate-500 text-[15px] mt-1">+40% from last week</p>
        </CardContent>
      </Card>

    </div>

  )
}

export default TotalFarmers