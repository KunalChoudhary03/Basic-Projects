let form = document.querySelector("#forms");
 const input = document.querySelector("#Input");
 const output = document.querySelector("#div");
form.addEventListener("submit", (event) => {
      event.preventDefault(); 

      function fetchWala(username){
      return fetch(`https://api.github.com/users/${username}`)
      .then(raw => raw.json())
       return raw.json()
      }
       fetchWala(input.value).then((data)=>{
          output.innerHTML = `<h2>${data.name || data.login}</h2>
            <img src="${data.avatar_url}" width="150" height="150" style="border-radius: 10px;" />
            <p>Followers: ${data.followers}</p>
            <p>Public Repos: ${data.public_repos}</p>
            <a href="${data.html_url}" target="_blank">View Profile</a>`;
      })
    });