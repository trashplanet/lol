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
				<nav aria-label="Primary">
					<a class="navlink" href="/blog/">Blog</a>
					<a class="icon" href="https://x.com/lauregg" rel="me noopener" target="_blank" aria-label="Follow Laura Ferruggia on X">
						<img src="/img/twitter-icon.png" alt=""></a>
					<a class="icon" href="https://www.linkedin.com/in/lauregg" rel="me noopener" target="_blank" aria-label="Connect with Laura Ferruggia on LinkedIn">
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
				<h2>Connect with me on social media.</h2>
				<div class="social-icons">
					<a href="https://x.com/lauregg" rel="me noopener" target="_blank" aria-label="Follow Laura Ferruggia on X">
						<img src="/img/amber-twitter-icon.png" alt=""></a>
					<a href="https://www.linkedin.com/in/lauregg" rel="me noopener" target="_blank" aria-label="Connect with Laura Ferruggia on LinkedIn">
						<img src="/img/amber-linkedin-icon.png" alt=""></a>
				</div>
			</div>
			<div class="copyright">
				<nav aria-label="Footer navigation"><a href="/links">Links</a><span aria-hidden="true">•</span><a href="/blog/">Blog</a></nav>
				<small>&copy; ${year} Laura Ferruggia</small>
			</div>
		</footer>`;
	}
}

class AuthorBio extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<aside class="author-card" aria-labelledby="author-name">
			<img src="/img/laura-ferruggia-author.png?v=3" alt="Laura Ferruggia">
			<div>
				<p class="eyebrow">About the author</p>
				<h2 id="author-name">Laura Ferruggia</h2>
				<p>Laura is a Marketing Services Director specializing in SEO, marketing technology, WordPress development, and AI-driven workflows.</p>
				<div class="author-social">
					<a href="https://x.com/lauregg" rel="me noopener" target="_blank" aria-label="Follow Laura Ferruggia on X"><img src="/img/amber-twitter-icon.png" alt=""></a>
					<a href="https://www.linkedin.com/in/lauregg" rel="me noopener" target="_blank" aria-label="Connect with Laura Ferruggia on LinkedIn"><img src="/img/amber-linkedin-icon.png" alt=""></a>
				</div>
			</div>
		</aside>`;
	}
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
customElements.define("author-bio", AuthorBio);
