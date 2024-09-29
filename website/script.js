const parallax_el = document.querySelectorAll('.parallax');

let xValue = 0,
    yValue = 0;


window.addEventListener('mousemove', (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;


    parallax_el.forEach((element) => {
        let speedX = element.getAttribute('data-speedx');
        let speedY = element.getAttribute('data-speedy');
        let speedZ = element.getAttribute('data-speedz');

        rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

        let isInLeft = parseFloat(getComputedStyle(element).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (e.clientX - parseFloat(getComputedStyle(element).left)) * isInLeft * 0.1;

        element.style.transform =
            `translateX(calc(-50% + ${-xValue * speedX}px)) 
        translateY(calc(-50% + ${-yValue * speedY}px))
        perspective(2920px) translateZ(${zValue * speedZ}px)
        `;
    });
})