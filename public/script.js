
fetch("https://jsonplaceholder.typicode.com/users")
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {

        // 2. Create a variable to store HTML table headers
        let li = `<tr><th>ID</th><th>Name</th><th>User Name</th><th>Posts</th></tr>`;

        // 3. Loop through each data and add a table row
        json.forEach((user) => {
            li += `<tr>
        <td>${user.id}</td>
        <td>${user.name} </td>
        <td>${user.username}</td>
        <td><button onclick="loadPosts()">Get Posts</button></td>
      </tr>`;
        });

        // 4. DOM Display result
        document.getElementById("users").innerHTML = li;
    });

function loadPosts() {
    const postEl = document.getElementById("posts")
    let userId = event.target.userId
    fetch(`https://jsonplaceholder.typicode.com/posts?${userId}`)
    .then((data) => data.json())
    .then((data) => console.log(userId))
    .then((data) => {
        for (let {body,title} of data) {
            const postBody = document.createElement("p")
            const postTitle = document.createElement("p")
            postBody.innerText = body
            postEl.append(postBody)
            postTitle.innerText = title
            postEl.append(postTitle)
        }
    });

}

function deletePosts() {
    

}

