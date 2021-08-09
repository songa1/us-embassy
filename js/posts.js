const posts = [
    {
        id: 1,
        title: 'Lorem ipsum doler',
        body: "Lorem ipsum doler, this is a lorem ipsum text that we don't know anything about even though we use it a lot. Help me learn more about it.",
        image: './assets/images/Advantages-and-Disadvantages-of-Technology-wearandcheer.com_.jpg',
        category: 'entertainment',
        createdAt: "a month ago",
        createdBy: 'Achille Songa',
    },
    {
        id: 2,
        title: 'I have never felt like this before',
        body: "Lorem ipsum doler, this is a lorem ipsum text that we don't know anything about even though we use it a lot. Help me learn more about it.",
        image: './assets/images/Advantages-and-Disadvantages-of-Technology-wearandcheer.com_.jpg',
        category: 'entertainment',
        createdAt: "2 days ago",
        createdBy: 'Achille Songa',
    },
    {
        id: 3,
        title: 'What changes my life',
        body: "Lorem ipsum doler, this is a lorem ipsum text that we don't know anything about even though we use it a lot. Help me learn more about it.",
        image: './assets/images/Advantages-and-Disadvantages-of-Technology-wearandcheer.com_.jpg',
        category: 'entertainment',
        createdAt: "a few seconds ago",
        createdBy: 'Achille Songa',
    },
];

const renderPosts = (data) => {
    const postCollection = document.querySelector('.post-collection');
    const post = document.createElement('div');
    post.className = 'post'
    const img = document.createElement('img');
    const postDetails = document.createElement('div');
    postDetails.className = 'post-details'
    const titleLink = document.createElement('a')
    const title = document.createElement('h2')
    const metadata = document.createElement('p')
    const category = document.createElement('span')
    const categoryLink = document.createElement('a')
    const excerpt = document.createElement('p')
    

    img.src = data.image
    titleLink.style.color = 'blue'
    titleLink.style.textDecoration = 'underline'
    titleLink.addEventListener('click',() => {
        window.location.assign(`post.html#${data.id}`)
    })
    title.textContent = data.title
    metadata.textContent = `${data.createdAt} | `
    categoryLink.textContent = data.category
    categoryLink.href = '#'
    excerpt.textContent = data.body

    category.appendChild(categoryLink)
    metadata.appendChild(category)
    titleLink.appendChild(title)
    postDetails.appendChild(titleLink)
    postDetails.appendChild(metadata)
    postDetails.appendChild(excerpt)

    post.appendChild(img)
    post.appendChild(postDetails)
    postCollection.appendChild(post)
}

posts.forEach(post => {
    renderPosts(post)
})