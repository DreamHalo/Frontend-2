"use strict";

const baseURL = "http://localhost:8888";

// ---------------- POST FETCHING ------------------------------

async function getPosts() {
  try {
    const response = await fetch(`${baseURL}/posts`);
    const result = await response.json();

    postRender(result);
  } catch (err) {
    alert(err.message);
  }
}

getPosts();

// ---------------- RENDER POST  ------------------------------

function postRender(data) {
  if (data.length) {
    data.forEach((element) => {
      const card = createElement(
        "div",
        "post-form",
        `
            <span class="red btn delete-btn" data-del="${element.id}"> delete </span>
            <span class="blue btn edit-btn" data-edit="${element.id}"> edit </span>
            <h5>${element.title}</h5>
             <hr>
            <strong>${element.author}</strong>
              
              
              `
      );

      $(".wrapper").append(card);
    });
  }
}

// ----------------  CREATE POST  ------------------------------

function createPost() {
  const newPost = {
    id: Date.now(),
    title: $("#text").value,
    author: "Davronbek",
  };

  if (!newPost.title.trim().length) {
    alert("Please fill the title");
  } else {
    fetch(`${baseURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
  }
}

$("#post").addEventListener("submit", (e) => {
  e.preventDefault();
  createPost();
});

// ----------------  DELETE POST  ------------------------------

function deletePost(id) {
  if (id) {
    fetch(`${baseURL}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

$(".wrapper").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const id = e.target.getAttribute("data-del");  
    deletePost(id);
  }
});

/// -------------------------- UPDATE POST  --------------------------------

let textPost = "";

$(".wrapper").addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    const id = e.target.getAttribute("data-edit");
    textPost = prompt("Enter  post text");
    updatePost(id);
  }
});

function updatePost(id) {
  const newPost = {
    id: Date.now(),
    title: textPost,
    author: "Davronbek",
  };  

  if (!newPost.title.trim().length) {
    alert("Please fill the title");
  } else {
    fetch(`${baseURL}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
  }
}
