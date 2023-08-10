import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/1"
  );

  console.log(data, isLoading, hasError);
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
    </>
  );
};
