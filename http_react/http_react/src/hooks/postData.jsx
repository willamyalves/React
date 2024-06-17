import { useState } from "react";

export const postData = async (url, body) => {

    const [loading, setLoading] = useState(false);

    setLoading(true);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    setLoading(false);

    return {data, loading};
  };