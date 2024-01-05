import { useEffect, useState } from "react";
import axios from "axios";

const Button = () => {
  const fetch = () => {
    axios({
      method: "get",
      url: "/app",
    }).then(function (response) {
      console.log(response.data);
    });
  };
  return <button onClick={fetch}></button>;
};

export default Button;
