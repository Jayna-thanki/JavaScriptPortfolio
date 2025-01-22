// Sample blog posts data
const blogPosts = [
    {
        title: "Understanding JavaScript Closures",
        content: "Closures are a fundamental concept in JavaScript that can help you manage private data and create powerful abstractions. In this post, we'll explore closures in detail.",
        date: "2023-10-01"
    },
    {
        title: "A Guide to Promises in JavaScript",
        content: "JavaScript promises offer a cleaner alternative to callbacks for handling asynchronous operations. This guide breaks down how to use promises effectively.",
        date: "2023-10-05"
    },
    {
        title: "Building Responsive Web Applications",
        content: "In today's mobile-first world, responsive design is essential. In this blog, I discuss strategies and techniques for creating responsive web applications.",
        date: "2023-10-10"
    }
];

// Function to display blog posts
function displayBlogPosts() {
    const postContainer = document.getElementById("post-container");
    blogPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p><em>${post.date}</em></p>
            <p>${post.content}</p>
        `;
        postContainer.appendChild(postElement);
    });
}

// Function to handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here you would typically send the data to a server
    alert(`Thank you for your message, ${name}! We will get back to you soon.`);
    
    // Clear the form
    this.reset();
});

// Initialize the blog posts on page load
window.onload = displayBlogPosts;