import { useGetExampleByTextQuery } from "../../../services/exampleService";

const RTK_EXAMPLE = () => {
  //   const { data, error, isLoading } = useGetExampleByTextQuery("test");
  // todo : Figure out what the problem here is...
  return (
    <div>
      <h1>RTK Example</h1>
      {/* {error && <div>error</div>}
      {isLoading && <div>...loading...</div>}
      {data && <div>{data}</div>} */}
    </div>
  );
};

export default RTK_EXAMPLE;
