
import './App.css';
import Header from "./components/Header.js";
import Movie from "./components/Movie.js";
import movies from "./movie.json";

function App() {
  return (
    <div className="App">
     
      <Header />
      <div className="main">
      {
        movies.map((element)=>{
          return (
            <Movie
            title={element.Title}
            year={element.Year}
            img={element.Poster}
            />
          )
        })
      }
      </div>
      
    </div>
  );
}

export default App;
