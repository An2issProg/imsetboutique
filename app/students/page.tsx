'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CreateStudents() {
  // State hooks for each input field
  const [cin, setCin] = useState("")
  const [name, setName] = useState("AMINE")
  const [lastname, setLastname] = useState("")
  const [governorate, setGovernorate] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  // State to manage popup visibility
  const [showPopup, setShowPopup] = useState(false)

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPopup(true) // Show the popup on form submission
  }

  // Close the popup
  const closePopup = () => {  
    setShowPopup(false)
  }

  return (
    <div>
      <Card className="mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Create new students</CardTitle>
          <CardDescription>Please fill the information of the students</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="cin">CIN</Label>
              <Input
                id="cin"
                type="text"
                placeholder="Enter CIN"
                value={cin}
                onChange={(e) => setCin(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">First Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your first name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                id="lastname"
                type="text"
                placeholder="Enter your last name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="governorate">Governorate</Label>
              <Input
                id="governorate"
                type="text"
                placeholder="Enter governorate"
                value={governorate}
                onChange={(e) => setGovernorate(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="Phone">Phone (+216)</Label>
              <Input
                id="Phone"
                type="text"
                placeholder="Enter Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="Phone">Email </Label>
              <Input
                id="Email"
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>  
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Create student
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold">Student Created</h2>
            <div className="mt-4">
              <p><strong>CIN:</strong> {cin}</p>
              <p><strong>First Name:</strong> {name}</p>
              <p><strong>Last Name:</strong> {lastname}</p>
              <p><strong>Governorate:</strong> {governorate}</p>
              <p><strong>Phone(+216):</strong> {phone}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Password:</strong> {password}</p>
            </div>
            <div className="mt-6">
              <Button onClick={closePopup} className="w-full">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
