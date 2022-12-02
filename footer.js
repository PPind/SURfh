class AppFooter extends HTMLElement { //teeme class-i
    connectedCallback() { //siit tuleb footer-i html-i osa
        this.innerHTML = `
        <footer>
        <div class="footer-content">
            <h3>ÖKU KOHVIK</h3>
            <div class="text">
                <p>Lahtiolekuajad: </p>
            <p><mark>E-P 10:00-22:00</mark></p>
                </div>
            <div class="footer__phone">
                <a href="#"><i class="fa fa-phone"></i></a>
                <a href="tel:+37251234567">+37251234567</a> 
            </div>
            <div class="footer_email">
                <a href="#"><i class="fa fa-envelope"></i></a>
                <a href="mailto:okukohvik@gmail.com">okukohvik@gmail.com</a> 
            </div>
            
            
        </div>
    
        <div class="footer-bottom">
            <p>copyright &copy;2022 SURfh.</p>
        </div>
    </footer>
        `
    }
}
window.customElements.define('app-footer', AppFooter) //kasutame customElements.define, defineerime class-ile nime

// Kood saadud siit: https://stackoverflow.com/questions/69961205/insert-header-and-footer-on-all-webpages-using-javascript