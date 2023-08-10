import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/1"
  );
  const { id, name } = !!data && data;
  // console.log(data, isLoading, hasError);
  console.log(JSON.stringify(data));

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{id}</p>
          <footer className="blockquote-footer">{name}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary">Next Quote</button>
    </>
  );
};
