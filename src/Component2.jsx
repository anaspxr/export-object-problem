import { useEffect, useState } from "react";
import { test } from "./assets/test";

export default function Component2() {
  const [data, setData] = useState(test);
  useEffect(() => {
    const newData = { ...data };
    newData.metabolizableEnergy.value = 10;
    setData(newData);
  }, []);
  return (
    <div>
      {Object.keys(data).map((val) => (
        <p key={val}>
          {val} : {data[val].value}
        </p>
      ))}
      <button
        onClick={() => {
          console.log(test);
        }}
      ></button>
    </div>
  );
}
