async function getMovieList(year) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/movies?Year=<year>
  const url = `https://jsonmock.hackerrank.com/api/movies?Year=${year}`;
  await fetch(url)
    .then((data) => data.json())
    .then((res) => {
      res.data.map((movieObj) => {
        return console.log(movieObj.Title);
      });
    })
    .catch((err) => err);
}
getMovieList(2012);