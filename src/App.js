import React,{useState,useEffect} from "react";
import SearchForm from "./components/SearchForm"
import GifList from "./components/GifList"

const api_key = 'kLdOJgERTeJR09Y5tBIHjHgoOljBsjgi';

function App() {
  
  const [keyword, setKeyword] = useState('fart');
  const [limit, setLimit] = useState(1);
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let activeFetch = true;
    setLoading(true)

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=${limit}`)
    .then(r => r.json())
    .then(r => {
      if(activeFetch){
        setGifs(r.data);
        setLoading(false);
      }
    })
    .catch(error => console.log("error in getting data",error));
    return () => {activeFetch = false;} // cleanup function
  }, [keyword,limit]);

  const update_keyword = (keyword) => setKeyword(keyword);
  const update_limit = (limit) => setLimit(limit);

  return (
    <div>
      <h1>Search GIFs</h1>
      <SearchForm
        setKeyword = {update_keyword}
        setLimit = {update_limit}
      />
      <h2>{keyword}</h2>
      <GifList
        data={gifs}
        loading = {loading}
      />
    </div>
  );
}

export default App;
