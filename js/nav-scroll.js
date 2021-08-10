document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
});

const links = [
  {
    id: 1,
    title: 'Home',
    location: './index.html'
  },
  {
    id: 2,
    title: 'About me',
    location: './index.html',
  },
  {
    id: 3,
    title: 'Contact me',
    location: './index.html'
  },
]

const renderLinks = (data) => {
  const linkHolder = document.querySelector('.nav')
  const link = document.createElement('a')

  link.textContent = data.title
  link.href = data.location

  linkHolder.appendChild(link)
}

links.forEach(link => {
  renderLinks(link)
})