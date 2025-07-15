import Card from "@/components/Card"
import Button from "@/components/Button";
import React from "react";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
     <Card />
     <Button label="Get Started" styles="rounded-sm rounded-lg rounded-full"/>
    </div>
  )
}
export default Landing