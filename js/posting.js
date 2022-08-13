const postsSection = document.querySelector(".posts");

function renderPosts() {
  posts.forEach((post) => {
    postsSection.innerHTML += `
        <div class="row row-cols-1 row-cols-md-2 m-3">
            <div class="col"
                style="background-image: url(img/${post.img}); background-size: cover; background-position: center; height: 350px;">
            </div>
            <div class="col">
                <h2>${post.title}</h2>
                <hr class="text-danger">
                <p>${post.shortText}</p>
                <p><small class="text-muted">Date: ${post.date}</small></p>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-danger btn-more" onclick="renderModal(${post.id})" data-bs-toggle="modal" data-bs-target="#blog-post-modal">
                    More...
                </button>
            </div>
        </div>
      `;
  });
}
renderPosts();

function renderModal(id) {
  const modal = document.querySelector("#blog-post-modal");
  const postModal = posts.find((post) => post.id === id);
  modal.querySelector(".modal-title").innerHTML = postModal.title;
  modal.querySelector(".post-image").src = `img/${postModal.img}`;
  modal.querySelector(".post-image").alt = `${postModal.img}`;
  modal.querySelector(".post-text").innerHTML = postModal.longText;
  modal.querySelector(".post-date").innerHTML = `Date: ${postModal.date}`;
}

// document.querySelectorAll(".btn-more").forEach((btn) => {
//   btn.addEventListener("click");
// });
