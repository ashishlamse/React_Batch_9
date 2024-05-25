import React, { useEffect, useState } from "react";
// rfce it will create function component body
function UseEffectCleanUp() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    // Is responsible for cleaning up the data
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h1>{time} in second</h1>
    </div>
  );
}

export default UseEffectCleanUp;
