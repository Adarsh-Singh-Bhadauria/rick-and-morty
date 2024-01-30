import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div className="flex flex-col">
      <div class="relative inline-block mx-auto mt-4">
        <span class="text-3xl font-bold font-sans">Rick And Morty</span>
        <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
      </div>
      <h1 class="text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400 text-gray-400">
        Characters List
      </h1>
      <CharacterList />
    </div>
  );
}

export default App;
