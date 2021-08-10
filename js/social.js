const socialSites = [
    {
        id: 1,
        title: 'Facebook',
        image: '../assets/icons/facebook-xxl.png',
        link: 'https://www.facebook.com/songa.achille.9',
        desc: "Facebook for blog"
    },
    {
        id: 2,
        title: 'Instagram',
        image: '../assets/icons/instagram-xxl copy.png',
        link: 'https://www.instagram.com/achille_songa',
        desc: "Instagram for blog"
    },
    {
        id: 2,
        title: 'Instagram',
        image: '../assets/icons/instagram-xxl copy.png',
        link: 'https://www.instagram.com/achille_songa',
        desc: "Instagram for blog"
    },
    {
        id: 2,
        title: 'Instagram',
        image: '../assets/icons/instagram-xxl copy.png',
        link: 'https://www.instagram.com/achille_songa',
        desc: "Instagram for blog"
    },
];

const renderSites = (data) => {
    const socials = document.querySelector('.brand-social')
    const link = document.createElement('a')
    const img = document.createElement('img')

    img.src = data.image
    img.alt = data.desc
    link.href = data.link
    link.target = '_blank'
    link.appendChild(img)

    socials.appendChild(link)
}


socialSites.forEach(site => {
    renderSites(site)
})