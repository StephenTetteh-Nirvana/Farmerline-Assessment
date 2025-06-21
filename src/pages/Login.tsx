import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { toast } from 'sonner'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import {credentials} from "../services/mockData"
import { useNavigate } from 'react-router-dom'

const Login : React.FC = () => {
  // const userData = localStorage.getItem("User")
  // const user = userData !== null ? JSON.parse(userData) : []

  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState('')
  const [disabled,setDisabled] = useState(true)

  const loginUser = ()=> {
    if (credentials.email === email && credentials.password === password){
      localStorage.setItem("User",JSON.stringify(true))
      navigate('/')
    }else{
      toast("Wrong Credentials",{
        duration: 2000,
        position: "top-center",
        action: {
          label: "Retry",
          onClick: () => loginUser(),
        },
      });
    }
  }

  useEffect(()=>{
    if (email !== "" && password !== ""){
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  },[email,password])

  return (
    <div className='flex justify-center items-center w-full h-full'>
    
    <Card className="w-auto sm:w-[300px]">
    <div className="flex justify-center py-4">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-12 w-auto rounded-[30%] bg-none"
        />
    </div>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className='grid gap-2'>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                placeholder="m@example.com"
                required
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor="email">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                required
                onChange={(e)=>setPassword(e.target.value)}
               />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col">
        <Button className={disabled ? "cursor-not-allowed w-full" : "cursor-pointer w-full"} 
          disabled={disabled}
          onClick={()=>loginUser()}
        >
          Login
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Login