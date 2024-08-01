import React, { useEffect, useState } from "react";

const ShowList = ({ list }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("Buscando dadso do BD...");

    setMyItems(list);
  }, [list]);

  return (
    <div>{myItems && myItems.map((name) => <p key={name}>{name}</p>)}</div>
  );
};

export default ShowList;
