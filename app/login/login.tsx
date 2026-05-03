/* /*'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming you have a custom Button component
import { Input } from "@/components/ui/input";   // Assuming you have a custom Input component
import { Label } from "@/components/ui/label";   // Assuming you have a custom Label component

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
    // Add your login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="input-field">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
      </div>

      <Button type="submit" className="button-primary">
        Log In
      </Button>
    </form>
  );
}
 */