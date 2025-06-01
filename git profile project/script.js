let searchBtn = document.querySelector(".search");
let usernameinp = document.querySelector(".usernameinp")
let card = document.querySelector(".card");
function getProfileDatas(username){
 return fetch(`https://api.github.com/users/${username}`).then(raw =>{
    if(!raw.ok) throw new Error("User not found");
    return raw.json();
});
}

function getUserRepos(username){
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then((raw)=> {
       if(!raw.ok) throw new Error("Faild to fetch repos....");
       return raw.json();
    });
}
function decorateProfileData(details) {
  const data = `
    <img 
      src="${details.avatar_url}" 
      alt="GitHub Avatar" 
      class="w-24 h-24 rounded-full"
    />
    <h2 class="text-xl font-semibold">${details.name || "No Name Provided"}</h2>
    <p class="text-sm text-gray-400">@${details.login}</p>

    <div class="grid grid-cols-2 gap-4 text-sm mt-4 w-full text-center">
      <div>
        <p class="text-gray-400">Public Repos</p>
        <p class="font-bold">${details.public_repos}</p>
      </div>
      <div>
        <p class="text-gray-400">Followers</p>
        <p class="font-bold">${details.followers}</p>
      </div>
      <div>
        <p class="text-gray-400">Following</p>
        <p class="font-bold">${details.following}</p>
      </div>
      <div>
        <p class="text-gray-400">Location</p>
        <p class="font-bold">${details.location || "Not Available"}</p>
      </div>
    </div>

    <a 
      href="${details.html_url}" 
      target="_blank" 
      class="text-blue-400 hover:underline text-sm mt-3"
    >
      View Full Profile →
    </a>
  `;

  card.innerHTML = data;
}


searchBtn.addEventListener("click", function(e){
  e.preventDefault();
  let username = usernameinp.value.trim();
  if (username.length > 0) {
    getProfileDatas(username).then((data) => {
      decorateProfileData(data);
    }).catch(err => {
      card.innerHTML = `<p class="text-red-400"> ❌ ${err.message}</p>`;
    });
  } else {
    alert("Please enter a GitHub username.");
  }
});
