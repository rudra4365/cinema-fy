import './App.css';
import requests from './requests';
import Row from './Row';

function App() {
  return ( 
    <div className="App">
      <header className="App-header">
        <Row title = "Original" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow />
        <Row title = "Trending" fetchUrl = {requests.fetchTrending} />
        <Row title = "Action" fetchUrl = {requests.fetchActionMovies} />
        <Row title = "Comedy" fetchUrl = {requests.fetchComedyMovies} />
        <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries} />
        <Row title = "Horror" fetchUrl = {requests.fetchHorrorMovies} />
        <Row title = "Romance" fetchUrl = {requests.fetchRomanceMovies} />
        <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated} />
      </header>
    </div>
  );
}

export default App;
