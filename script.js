document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.skills li').forEach(skill => {
        skill.addEventListener('click', () => {
            const detail = skill.querySelector('.skill-detail');
            detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
        });
    });

    const blogPosts = {
        1: { title: "Post Title 1", content: "This is the full content of the first blog post." },
        2: { title: "Post Title 2", content: "This is the full content of the second blog post." }
    };

    document.querySelectorAll(".blog-post").forEach(post => {
        post.addEventListener("click", () => {
            const postId = post.getAttribute("data-id");
            const blogContent = document.getElementById("blog-content");
            blogContent.innerHTML = `
                <h3>${blogPosts[postId].title}</h3>
                <p>${blogPosts[postId].content}</p>
            `;
        });
    });
});
