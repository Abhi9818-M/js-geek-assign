const searchBar = document.getElementById("searchbar")
const searchButton = document.getElementById("searchbutton")
const cardContainer = document.getElementById("cardcontainer")


function getUser(searchValue) {
    let apiUrl;
    if(searchValue === undefined){
         apiUrl = `https://api.github.com/users`;
    }
    else{
         apiUrl = `https://api.github.com/users/${searchValue}`;
    }

    const promise = fetch(apiUrl)

    promise.then((response)=>{
        return response.json()
    }).then((data)=>{
        let result = data
        console.log(result);

        if(searchValue === undefined){
            result.map((ele)=>{
                
                const card = document.createElement("div")
                const heading = document.createElement("h2")
                const paragraph = document.createElement("p")
                const image = document.createElement("img")
                const link = document.createElement("a")
                const follower = document.createElement("p")
                const following = document.createElement("p")
                heading.innerText = ele.login
                image.src = ele.avatar_url
                link.href = ele.html_url 
                follower.innerText = ele.follower
                following.innerText = result.following
                link.innerHTML = "@"
                card.appendChild(heading)
                card.appendChild(image)
                card.appendChild(link)
                card.appendChild(follower)
                card.appendChild(following)
                cardContainer.appendChild(card)
            })
        }
        else{
            cardContainer.innerHTML = "";
            if(result.message === "Not Found"){
                const heading = document.createElement("h1");
                heading.innerText = "Wrong User Id"
                cardContainer.appendChild(heading)
            }
            else{

                cardContainer.innerHTML = `<div class="firstrow">
                                            <div class="firstRow_image">
                                                <img src="${result.avatar_url}" alt="">
                                                <div class="userId">
                                                    <h2>${result.name}</h2>
                                                    <a href="${result.html_url}">${result.login}</a>
                                                    <p>${result.bio}</p>
                                                </div>
                                            </div>
                                            <div class="date">
                                                Created At :-
                                                ${new Date(data.created_at).toLocaleDateString('en-US')}
                                            </div>
                                        </div>
                                        <div class="secondRow">
                                            <div class="follower">
                                                Followers
                                                <p>${result.followers}</p></div>
                                            <div class="following">
                                                Following 
                                                <p>${result.following}</p></div>
                                            <div class="repo">
                                                Repo 
                                                <p>${result.public_repos}</p></div>
                                        </div>
                                        <div class="thirdRow">
                                            <div class="thirdRow_data">
                                                <div class="location"><i class="fa-solid fa-location-dot"></i>${result.location}</div>
                                                <div class="company"><i class="fa-solid fa-building"></i>${result.company}</div>
                                            </div>
                                        </div>`;
                                       
                // const card1 = document.createElement("div")
                // const card2 = document.createElement("div")
                // const imagediv = document.createElement("div")
                // const userDiv = document.createElement("div")
                // const dateDiv = document.createElement("div")
                // const heading = document.createElement("h2")
                // const bio = document.createElement("p")
                // const date = document.createElement("p")
                // const image = document.createElement("img")
                // const link = document.createElement("a")
                // const repo = document.createElement("div")
                // const follower = document.createElement("div")
                // const following = document.createElement("div")

                // card1.classList.add("firstRow")
                // userDiv.classList.add("userId")
                // card2.classList.add("secondRow")
                // imagediv.classList.add("firstRow_image")
                // dateDiv.classList.add("date")

                // image.src = result.avatar_url
                // link.href = result.html_url 
                // link.innerHTML = result.login
                // date.innerText = result.created_at
                // bio.innerText = result.bio
                // heading.innerText = result.name
                // repo.innerText = result.public_repos
                
                // follower.innerText = result.followers
                
                // following.innerText = result.following
                
                // imagediv.appendChild(image)
                // userDiv.appendChild(heading)  
                // userDiv.appendChild(link)
                // dateDiv.appendChild(date)
                // userDiv.appendChild(bio)
                // card2.appendChild(repo)
                // card2.appendChild(follower)
                // card2.appendChild(following)
                // card1.appendChild(imagediv) 
                // cardContainer.appendChild(card1) 
                // card1.appendChild(imagediv)
                // imagediv.appendChild(userDiv)
                // card1.appendChild(dateDiv)
                // cardContainer.appendChild(card2)       

            }
        }
       
    })
   
}

const but = document.createElement("p")
but.innerText = "Searching your id ...... !!"
cardContainer.appendChild(but)
but.classList.add("list")

searchButton.addEventListener("click",(e)=>{
 
    e.preventDefault();
    const searchValue = searchBar.value
    getUser(searchValue)
   
})


