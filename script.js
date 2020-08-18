const accordionItems = document.querySelectorAll(".accordion__item");
accordionItems.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(!btn.classList.contains("show")) {
            accordionItems.forEach((btn) => btn.classList.remove("show"));
            btn.classList.add("show");
        } else {
            btn.classList.remove("show");
        }
    });
});


const carouselItems = document.querySelectorAll(".carousel-item-dot");
carouselItems.forEach((btn, i) => {
	const carousel = document.querySelector(".product__carousel-item");
	let imageWidth = document.querySelector(".product-image").offsetWidth;

	// för att bilderna ska flyttas helt när skärmen ändras.
	window.addEventListener(
		"resize",
		() =>
			(imageWidth = document.querySelector(".product-image").offsetWidth)
	);

	btn.addEventListener("click", () => {
		carousel.scrollTo({
			top: 0,
			left: i * imageWidth,
			behavior: "smooth",
		});
		carouselItems.forEach((btn) => btn.classList.remove("selected"));
		btn.classList.add("selected");
	});
});