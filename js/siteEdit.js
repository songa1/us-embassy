

const renderLogo = () => {
    const brands = document.querySelector('.brand-logo')
    const siteLogo = document.createElement('img')
    siteLogo.className = 'brand-logo-img'
    const siteName = document.createElement('h1')

    siteLogo.src="../assets/images/AS-PNG.png"
    siteLogo.alt = `${siteName} logo`
    siteName.textContent = "Achille Songa Blog"

    brands.appendChild(siteLogo)
    brands.appendChild(siteName)
}

renderLogo()