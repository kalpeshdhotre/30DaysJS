const url = `https://reqres.in/api/users/4`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("API not reachable");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
