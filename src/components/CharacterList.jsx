import { useState, useEffect } from "react";
import Character from "./Character";

export function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const increment = ()=>{
      setPage(page+1)
  }
  const decrement = ()=>{
    if(page>1){
      setPage(page-1)
    }
    else(setPage(1))
  }

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await data.json();
      console.log(results);
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-5">
          {characters.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Character
                key={character.id}
                name={character.name}
                origin={character.origin}
                image={character.image}
                species={character.species}
                location={character.location.name}
              />
            </div>
          ))}
        </div>
      )}

      <header className="flex justify-between">
        <button
          className="bg-blue-600 text-white rounded-md px-4 py-2 m-5"
          onClick={decrement}
        >
          {`Page ${page-1}`}
        </button>

        <button
          className="bg-blue-600 text-white rounded-md px-4 py-2 m-5"
          onClick={increment}
        >
          {`Page ${page+1}`}
        </button>
      </header>
    </div>
  );
}

export default CharacterList;
