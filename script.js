document.addEventListener('DOMContentLoaded', function () {
  const themeToggleButton = document.getElementById('theme-toggle');

  themeToggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      themeToggleButton.textContent = 'Switch to Light Mode';
    } else {
      themeToggleButton.textContent = 'Switch to Dark Mode';
    }
  });

  const blogList = document.getElementById('blog-list');

  fetch('Data/posts.json')
    .then(response => response.json())
    .then(posts => {
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.content}</p>
        `;
        blogList.appendChild(postElement);
      });
    })
    .catch(error => console.error('Error loading blog posts:', error));
});
