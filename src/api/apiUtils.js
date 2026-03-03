export const get = (url, body) => {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  return fetch(url, options);
};

export const handleError = (error) => {
  console.error(error);
  throw new Error(error);
};

export const handleSuccess = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    console.error(response);
    throw new Error("Response not okay");
  }
};
