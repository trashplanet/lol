/* =========================================================
   site.js — global <site-header> and <site-footer>.
   Defined once, dropped onto any page with a single tag.
   Loaded in <head> so elements upgrade during parse (no flash).
   ========================================================= */

class SiteHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<header class="site-head">
			<div class="bar">
				<a class="brand" href="https://www.laura.lol/">Laura Ferruggia</a>
				<nav aria-label="Social">
					<a href="https://x.com/lauregg" rel="me" target="_blank" title="Follow me on X">
						<img src="/img/twitter-icon.png" alt="X (Twitter)"></a>
					<a href="https://www.linkedin.com/in/lauregg" rel="me" target="_blank" title="Connect on LinkedIn">
						<img src="/img/linkedin-icon.png" alt="LinkedIn"></a>
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
				<a href="https://x.com/lauregg" rel="me" target="_blank" title="Follow me on X">
					<img src="/img/amber-twitter-icon.png" alt="X (Twitter)"></a>
				<a href="https://www.linkedin.com/in/lauregg" rel="me" target="_blank" title="Connect on LinkedIn">
					<img src="/img/amber-linkedin-icon.png" alt="LinkedIn"></a>
			</div>
			<small>&copy; ${year} Laura Ferruggia</small>
		</footer>`;
	}
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
