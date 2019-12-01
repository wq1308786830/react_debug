import React, {useEffect, useState} from "react";
import { Button } from "antd";

export default function Home() {
  const [a, setA] = useState(0);
  useEffect(() => {
    setTimeout(() => setA(new Date().getTime()), 3000);
  });
  return (
    <>
      <h2>Home{a}</h2>
      <Button>aa</Button>
    </>
  );
}
