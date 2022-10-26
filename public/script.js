
fetch("https://jsonplaceholder.typicode.com/users")
    // Converting received data to JSON
    .then((data) => data.json())
    .then((data) => {

        //Creating a variable to store HTML table headers
        let li = `<tr><th>ID</th><th>Name</th><th>User Name</th><th>Posts</th></tr>`;

        // Looping through each data and add a table row
        data.forEach((user) => {
            li += `<tr>
            <td>${user.id}</td>
            <td>${user.name} </td>
            <td>${user.username}</td>
            <td><button data-id="${user.id}" onclick="loadPosts(event)">Get Posts</button></td>
            </tr>`;
        });

        //Getting the table from html file and displaying the result
        document.getElementById("users").innerHTML = li;
    });

// function to load posts after user clicks the button
function loadPosts(event) {
    //to delete the preveious posts
    deletePosts();

    // grabing the posts div to inject the new data from api into it
    const postEl = document.getElementById("posts")
    //grabbing user id
    let Id = event.target.dataset.id
    console.log(Id, 'Id from event obj')


    //making api call
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${Id}`)
        .then((data) => data.json())
        .then((data) => {
            // console.log(data)
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

