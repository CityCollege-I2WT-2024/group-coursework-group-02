let currentSlide = 0;
            const slides = document.getElementsByClassName("slide");
            console.log(slides);
            slides[currentSlide].style.display="block";
            const nextButton = document.getElementById("next");
            const nextSlide = function(){
                slides[currentSlide].style.display="none";
                currentSlide++;
                if(currentSlide > slides.length-1){
                    currentSlide = 0;
                }
                slides[currentSlide].style.display="block";
            }
            nextButton.addEventListener("click", nextSlide);

            const previousButton = document.getElementById("previous");
            const previousSlide = function(){
                slides[currentSlide].style.display="none";
                currentSlide--;
                if(currentSlide < 0){
                    currentSlide = slides.length-1;
                }
                slides[currentSlide].style.display="block";
            }
            previousButton.addEventListener("click", previousSlide);
            // navbar joke

            document.querySelectorAll('.broken-link').forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const message = this.nextElementSibling;
                    message.style.display = 'block';
                    this.addEventListener('mouseleave', function () {
                        message.style.display = 'none';
                    });
                });
            });