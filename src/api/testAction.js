import { Testing } from "./TestApi";

export const getThing = () => {
  return Testing("https://jsonplaceholder.typicode.com/todos/1")
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
