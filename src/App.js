import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner'

function App() {
  return ( 
    <div className="app">
      <Banner />
        <Row title = "Original" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow />
        <Row title = "Trending" fetchUrl = {requests.fetchTrending} />
        <Row title = "Action" fetchUrl = {requests.fetchActionMovies} />
        <Row title = "Comedy" fetchUrl = {requests.fetchComedyMovies} />
        <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries} />
        <Row title = "Horror" fetchUrl = {requests.fetchHorrorMovies} />
        <Row title = "Romance" fetchUrl = {requests.fetchRomanceMovies} />
        <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated} />
    </div>
  );
}

export default App;
