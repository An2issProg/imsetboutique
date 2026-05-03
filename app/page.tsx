'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function Home() {
  // logic javascript

  // create a new variable (State) name

  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1);
  }
  function handleClickplus2() {
    setCount(count + 2);
  }
 

  // end logic javascript

  // return render JSX
  return (
    <div>
      <h1>welcome to NEXT.js</h1>

      <Label>You pressed me {count} times</Label>
      <br />
      <Button onClick={handleClick}>Ajout +1</Button>
      <Button onClick={handleClickplus2}>Ajout +2</Button>
      <Button onClick={()=> setCount( count + 5)}>Ajout +5</Button>
      <Button onClick={()=> setCount( count + 10)}>Ajout +10</Button>
      <Button onClick={()=> setCount( count + 50)}>Ajout +50</Button>
      <Button onClick={()=> setCount( count + 100)}>Ajout +100 </Button>
      <Button onClick={()=> setCount( count + 150)}>Ajout +150 E</Button>
      <Button onClick={() => setCount(0)}>reset counter</Button>
    </div>
  );  
}
