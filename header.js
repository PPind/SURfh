class AppHeader extends HTMLElement { //teeme class-i
    connectedCallback() { //siit tuleb header-i html-i osa
        this.innerHTML = ` 
        <div class="headerbase">

        <div class="sidediv">
            <div class="button">
                <a href="kontakt.html">
                    <p class="headerfont">KONTAKT</p>
                </a>
            </div>
    
            <div class="button">
                <a href="hinnakiri.html">
                    <p class="headerfont">HINNAKIRI</p>
                </a>
            </div>
    
            <div class="button">
                <a href="linnud2.html">
                    <p class="headerfont">MEIE LINNUD</p>
                </a>
            </div>
    
            <div class="button">
                <a href="menyy.html">
                    <p class="headerfont">MENÜÜ</p>
                </a>
            </div>
    
            <div class="button">
                <a href="meist.html">
                    <p class="headerfont">MEIST</p>
                </a>
            </div>
        </div>
    
        <div class="logodiv">
            <a href="avaleht.html">
                <img id="logo" alt="avaleht" src="linnud/logo.png">
            </a>
        </div>
    
        `
    }
}
window.customElements.define('app-header', AppHeader) //kasutame customElements.define, defineerime class-ile nime

// Kood saadud siit: https://stackoverflow.com/questions/69961205/insert-header-and-footer-on-all-webpages-using-javascript