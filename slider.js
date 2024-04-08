
Splide.defaults = {
	autoWidth: "true",
	type: "loop",
	focus: "center",
	gap: ".5rem",
	cloneStatus: false,
	trimSpace: "true",
	easing: "cubic-bezier(0.25, 1, 0.5, 1)",
	lazyLoad: "nearby",
	preloadPages: "2",
	keyboard: "global",
	updateOnMove: "true",
	arrowPath: "M28.4,21.93H6.93c-.55,0-1-.18-1.37-.55s-.55-.83-.55-1.37.18-1,.55-1.37c.37-.37.83-.55,1.37-.55h21.48l-5.49-5.49c-.39-.39-.57-.83-.55-1.35s.2-.96.55-1.35c.39-.39.84-.59,1.37-.6s.99.17,1.37.55l8.81,8.81c.19.19.33.4.41.63s.12.47.12.72-.04.5-.12.72-.22.43-.41.63l-8.81,8.81c-.39.39-.84.57-1.37.55s-.99-.22-1.37-.6c-.35-.39-.54-.83-.55-1.35s.17-.96.55-1.35l5.49-5.49Z"
};

let splide = new Splide(".splide");
let bar = splide.root.querySelector(".my-carousel-progress-bar");


// Updates the bar width whenever the carousel moves:
splide.on("mounted move", function () {
	let end = splide.Components.Controller.getEnd() + 1;
	let rate = Math.min((splide.index + 1) / end, 1);
	bar.style.width = String(100 * rate) + "%";
});

splide.mount();