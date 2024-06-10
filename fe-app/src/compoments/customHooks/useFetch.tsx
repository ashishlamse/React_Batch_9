import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [resData, setResData] = useState<any>([]);

  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => setResData(data));
  }, [url]);

  return resData;
};

export default useFetch;
