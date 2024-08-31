const loadData = () => {
const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.github.com/users/imxandx")
xhr.send(null)
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        const res = JSON.parse(xhr.responseText)

        const name = res.name
        const avatarUrl = res.avatar_url
        const followers = res.followers
        const blogUrl = res.blog
        // console.log({ name, avatarUrl, followers, blogUrl })

        // <img src="https://avatars.githubusercontent.com/u/130688319?v=4" width="128" />
        const avatarEl = document.createElement("img")
        avatarEl.setAttribute("src", avatarUrl)
        avatarEl.setAttribute("width", "128")
        // console.log(avatarEl)

        // <h1>Alexandre Delaboneta</h1>
        const nameEl = document.createElement("h1")
        nameEl.innerHTML = `<h3 class="name">${name}</h3>`

        // <p>Followers: 8</p>
        const followersEl = document.createElement("p")
        followersEl.innerHTML = `<p class="followers"> Followers: ${followers}</p>`

        // <a href="https://imxandx.github.io/Portfolio">imxandx.github.io/Portfolio</a>
        const blogEl = document.createElement("a")
        blogEl.setAttribute("href", `https://${blogUrl}`)
        blogEl.innerHTML = `<a class="blogurl">${blogUrl}</a>`

        document.body.appendChild(avatarEl)
        document.body.appendChild(nameEl)
        document.body.appendChild(followersEl)
        document.body.appendChild(blogEl)
        }
    }
}

const buttonEl = document.querySelector("button")
buttonEl.addEventListener("click", loadData)