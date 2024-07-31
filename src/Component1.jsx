import { useEffect, useState } from "react";
import { test } from "./assets/test";
export default function Component1({ prop }) {
  const [data, setData] = useState(test);
  useEffect(() => {
    setData(test);
  }, [prop]);
  return (
    <div>
      {Object.keys(data).map((val) => (
        <p key={val}>
          {val} : {data[val].value}
        </p>
      ))}
    </div>
  );
}
