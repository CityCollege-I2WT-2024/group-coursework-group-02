//Angel Plloca
//Dropdown menu popup
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
//Map area popup
document.querySelectorAll('area[alt="Ceres"], area[alt="Pluto"]').forEach(area => {
    area.addEventListener('click', function (e) {
        e.preventDefault();
        const mapMessage = document.querySelector('#map-message');
        mapMessage.textContent = 'Look at the bullying! Try the footer!';
        mapMessage.style.display = 'block';
        //Popup timeout
        setTimeout(() => {
            mapMessage.style.display = 'none';
        }, 4000);
    });
});
