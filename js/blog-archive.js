const archive = document.querySelector(".archive");
const cards = [...archive.querySelectorAll(".post-card")];
const filters = [...archive.querySelectorAll("[data-filter]")];
const count = archive.querySelector(".archive-count");
const more = archive.querySelector(".archive-more");
const pageSize = 9;
let category = "all";
let limit = pageSize;

function matchesCategory(card, filter) {
	return filter === "all" || card.dataset.category === filter;
}

function updateArchive() {
	const matching = cards.filter(card => matchesCategory(card, category));
	const visible = matching.slice(0, limit);
	const remaining = matching.length - visible.length;

	for (const card of cards) card.hidden = !visible.includes(card);

	count.textContent = `Showing ${visible.length} of ${matching.length}`;
	more.querySelector("span").textContent = `${remaining} left`;
	more.hidden = remaining === 0;
	return visible;
}

for (const filter of filters) {
	filter.querySelector("span").textContent = cards.filter(
		card => matchesCategory(card, filter.dataset.filter)
	).length;
	filter.addEventListener("click", () => {
		if (category === filter.dataset.filter) return;
		category = filter.dataset.filter;
		limit = pageSize;
		for (const button of filters) {
			button.setAttribute("aria-pressed", String(button === filter));
		}
		updateArchive();
	});
}

more.addEventListener("click", () => {
	const firstNew = limit;
	limit += pageSize;
	updateArchive()[firstNew]?.focus();
});

updateArchive();
archive.querySelector(".archive-toolbar").hidden = false;
