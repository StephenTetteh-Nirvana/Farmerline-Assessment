import {useState} from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import type { FormData } from "@/schema/formSchema"

type FormProps = {
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const DatePicker = ({setFormData}: FormProps) => {

  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined);
  
  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="justify-between font-normal w-full"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(selectedDate) => {
              if (!selectedDate) return;
              setDate(selectedDate);
              setOpen(false);
              setFormData((prev) => ({
                ...prev,
                registrationDate: selectedDate.toISOString().split("T")[0],
              }));
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default DatePicker;
