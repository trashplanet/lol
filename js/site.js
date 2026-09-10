/* =========================================================
   site.js — global <site-header> and <site-footer>.
   Defined once, dropped onto any page with a single tag.
   Loaded with defer so page parsing is never blocked.
   ========================================================= */

class SiteHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<header class="site-head">
			<div class="bar">
				<a class="brand" href="https://www.laura.lol/">Laura Ferruggia</a>
				<nav aria-label="Social media">
					<a href="https://x.com/lauregg" rel="me noopener" target="_blank" aria-label="Follow Laura Ferruggia on X">
						<img src="/img/twitter-icon.png" alt=""></a>
					<a href="https://www.linkedin.com/in/lauregg" rel="me noopener" target="_blank" aria-label="Connect with Laura Ferruggia on LinkedIn">
						<img src="/img/linkedin-icon.png" alt=""></a>
				</nav>
			</div>
		</header>`;
	}
}

class SiteFooter extends HTMLElement {
	connectedCallback() {
		const year = new Date().getFullYear();
		this.innerHTML = `
		<footer class="site-foot">
			<div class="social">
				<a href="https://x.com/lauregg" rel="me noopener" target="_blank" aria-label="Follow Laura Ferruggia on X">
					<img src="/img/amber-twitter-icon.png" alt=""></a>
				<a href="https://www.linkedin.com/in/lauregg" rel="me noopener" target="_blank" aria-label="Connect with Laura Ferruggia on LinkedIn">
					<img src="/img/amber-linkedin-icon.png" alt=""></a>
			</div>
			<small>&copy; ${year} Laura Ferruggia</small>
		</footer>`;
	}
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
