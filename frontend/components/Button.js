import { useEffect, useState } from "react";

const Button = () => {
  useEffect(() => {
    const fetch = async () => {
      const response = await fetch("/app", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
      const json = await response.json();

      if (response.ok) {
      }
    };
  }, []);
  return <button onClick={fetch}></button>;
};

export default Button;
