
fetch("https://jsonplaceholder.typicode.com/users")
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {

        //Creating a variable to store HTML table headers
        let li = `<tr><th>ID</th><th>Name</th><th>User Name</th><th>Posts</th></tr>`;

        // Looping through each data and add a table row
        json.forEach((user) => {
            li += `<tr>
            <td>${user.id}</td>
            <td>${user.name} </td>
            <td>${user.username}</td>
            <td><button onclick="loadPosts()">Get Posts</button></td>
            </tr>`;
        });

        //Getting the table from html file and displaying the result
        document.getElementById("users").innerHTML = li;
    });

// function to load posts after user clicks the button
function loadPosts() {

    deletePosts();

    const postEl = document.getElementById("posts")

    let Id = event.target.dataset.userId

    fetch(`https://jsonplaceholder.typicode.com/posts?${Id}`)
        .then((data) => data.json())
        .then((data) => {
            for (let { body, title } of data) {
                const postTitle = document.createElement("Strong")
                const postBody = document.createElement("p")
                postBody.innerText = body
                postEl.append(postBody)
                postTitle.innerText = title
                postEl.append(postTitle)
            }
        })

}

//function to clear displayed posts after user selects a different account.
function deletePosts() {
    let users = document.querySelectorAll("p, Strong");
    for (let i = 0; i < users.length; i++) {
        if (users[i]) {
            users[i].style.display = 'none';
        }
    }

}

