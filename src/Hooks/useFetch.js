const { useState } = require("react");

const useFetch = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const request = async (url, method, body) => {
    // TODO : Check Version
    setIsLoading(true);
    let options = {
      method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application-json",
      },
    };
    // TODO : Add body if not 'GET'
    // TODO : Add auth header

    // TODO : Wrap in try catch?
    const response = await fetch(url, options);
    console.log({ response });
    if (response.ok) {
      let responseData = await response.json();
      console.log({ responseData });
      setData(responseData);
      setIsLoading(false);
    } else {
      console.error(response.message);
      setError(response.message);
      setIsLoading(false);
      throw new Error(response.message);
    }
  };

  return { error, data, isLoading, request };
};

export default useFetch;
