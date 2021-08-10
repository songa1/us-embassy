// const posts = [
//     {
//         id: 1,
//         title: 'Lorem ipsum doler',
//         body: "Lorem ipsum doler, this is a lorem ipsum text that we don't know anything about even though we use it a lot. Help me learn more about it.",
//         image: './assets/images/Advantages-and-Disadvantages-of-Technology-wearandcheer.com_.jpg',
//         category: 'entertainment',
//         createdAt: "a month ago",
//         createdBy: 'Achille Songa',
//     },
//     {
//         id: 2,
//         title: 'I have never felt like this before',
//         body: "Lorem ipsum doler, this is a lorem ipsum text that we don't know anything about even though we use it a lot. Help me learn more about it.",
//         image: './assets/images/Advantages-and-Disadvantages-of-Technology-wearandcheer.com_.jpg',
//         category: 'entertainment',
//         createdAt: "2 days ago",
//         createdBy: 'Achille Songa',
//     },
//     {
//         id: 3,
//         title: 'What changes my life',
//         body: "Lorem ipsum doler, this is a lorem ipsum text that we don't know anything about even though we use it a lot. Help me learn more about it.",
//         image: './assets/images/Advantages-and-Disadvantages-of-Technology-wearandcheer.com_.jpg',
//         category: 'entertainment',
//         createdAt: "a few seconds ago",
//         createdBy: 'Achille Songa',
//     },
//     {
//         id: 4,
//         title: 'Lorem ipsum doler',
//         body: "Lorem ipsum doler, this is a lorem ipsum text that we don't know anything about even though we use it a lot. Help me learn more about it.",
//         image: './assets/images/Advantages-and-Disadvantages-of-Technology-wearandcheer.com_.jpg',
//         category: 'entertainment',
//         createdAt: "a month ago",
//         createdBy: 'Achille Songa',
//     },
//     {
//         id: 5,
//         title: 'I have never felt like this before',
//         body: "Lorem ipsum doler, this is a lorem ipsum text that we don't know anything about even though we use it a lot. Help me learn more about it.",
//         image: './assets/images/Advantages-and-Disadvantages-of-Technology-wearandcheer.com_.jpg',
//         category: 'entertainment',
//         createdAt: "2 days ago",
//         createdBy: 'Achille Songa',
//     },
//     {
//         id: 6,
//         title: 'What changes my life',
//         body: "Lorem ipsum doler, this is a lorem ipsum text that we don't know anything about even though we use it a lot. Help me learn more about it.",
//         image: './assets/images/Advantages-and-Disadvantages-of-Technology-wearandcheer.com_.jpg',
//         category: 'entertainment',
//         createdAt: "a few seconds ago",
//         createdBy: 'Achille Songa',
//     },
// ];

let posts;

const elem = document.getElementById("post-changing");
const inst = setInterval(change, 5000);
elem.addEventListener("mouseover", ()=>{
    elem.style.textDecoration = 'underline';
    setTimeout(()=>{
        elem.style.textDecoration = 'none';
    }, 3000)
})

function change(posts) {
    let counter = 0;
    elem.innerHTML = posts[counter].title;
    counter++;
    if (counter >= posts.length) {
        counter = 0;
    }
}

const renderPosts = (posts) => {
    posts.forEach(data => {
    
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
        const rmBtn = document.createElement('button')
        rmBtn.className = 'rm-btn'
        
        rmBtn.innerHTML = "Read more"
        img.src = './assets/images/Advantages-and-Disadvantages-of-Technology-wearandcheer.com_.jpg',
        titleLink.style.color = 'blue'
        titleLink.style.textDecoration = 'underline'
        titleLink.addEventListener('click',() => {
            window.location.assign(`post.html#${data.id}`)
        })
        rmBtn.addEventListener('click',() => {
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
        postDetails.appendChild(rmBtn)

        post.appendChild(img)
        post.appendChild(postDetails)
        postCollection.appendChild(post)
    })
}

const featuredPosts = (data) => {
    const navigateFeaturedPosts = document.querySelector('.navigate-featured')
    const postLink = document.createElement('a')
    postLink.className = 'featured-nav'

    postLink.textContent = data.title
    postLink.addEventListener('click', () => {
        console.log('f')
    })

    navigateFeaturedPosts.appendChild(postLink)
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then(json => )

  console.log(posts)

posts.forEach(post => {
    renderPosts(post)
})