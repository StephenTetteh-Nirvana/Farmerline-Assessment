import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Eye } from "lucide-react"
  import { farmerData } from "@/mockData"

  const DataTable: React.FC = () => {

  return(
    <Table className="border border-slate-200 mt-3">
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Contact Number</TableHead>
          <TableHead>Registration Date</TableHead>
          <TableHead>Products Purchased</TableHead>

        </TableRow>
      </TableHeader>
      <TableBody>
        {farmerData.map((farmer)=>(
          <TableRow key={farmer.farmerId}>
            <TableCell className="font-medium">{farmer.farmerId}</TableCell>
            <TableCell>{farmer.name}</TableCell>
            <TableCell>{farmer.location}</TableCell>
            <TableCell>{farmer.contactNumber}</TableCell>
            <TableCell>{farmer.registrationDate}</TableCell>
            <TableCell><Eye className="text-slate-400"/></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


export default DataTable