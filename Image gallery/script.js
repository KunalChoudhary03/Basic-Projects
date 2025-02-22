const galleryItems = document.getElementsByClassName("gallery-item");
        const lightBoxContainer = document.createElement("div");
        const lightBoxContent = document.createElement("div");
        const lightBoxImg = document.createElement("img");
        const lightBoxPrev = document.createElement("div");
        const lightBoxNext = document.createElement("div");

        lightBoxContainer.classList.add("lightbox");
        lightBoxContent.classList.add("lightbox-content");
        lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
        lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

        lightBoxContainer.appendChild(lightBoxContent);
        lightBoxContent.appendChild(lightBoxImg);
        lightBoxContent.appendChild(lightBoxPrev);
        lightBoxContent.appendChild(lightBoxNext);
        document.body.appendChild(lightBoxContainer);

        let index = 1;

        function showLightBox(n) {
            if (n > galleryItems.length) {
                index = 1;
            } else if (n < 1) {
                index = galleryItems.length;
            }
            let imageLocation = galleryItems[index - 1].children[0].getAttribute("src");
            lightBoxImg.setAttribute("src", imageLocation);
        }

        function currentImage() {
            lightBoxContainer.style.display = "block";
            let imageIndex = parseInt(this.getAttribute("data-index"));
            showLightBox(index = imageIndex);
        }

        for (let i = 0; i < galleryItems.length; i++) {
            galleryItems[i].addEventListener("click", currentImage);
        }

        function sliderImage(n) {
            showLightBox(index += n);
        }

        function prevImage() {
            sliderImage(-1);
        }

        function nextImage() {
            sliderImage(1);
        }

        lightBoxPrev.addEventListener("click", prevImage);
        lightBoxNext.addEventListener("click", nextImage);

        function closeLightBox(event) {
            if (event.target === lightBoxContainer) {
                lightBoxContainer.style.display = "none";
            }
        }

        lightBoxContainer.addEventListener("click", closeLightBox);