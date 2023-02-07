
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{ // tc is stands for tablecontent
            tc.classList.remove('filter__active')
        })
        target.classList.add('filter__active')

        tabs.forEach(t => { // t stands for tab
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

//  THIS WILL BE FOR THE ANIMATION PART FOR SCROLL
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.profile__border')
sr.reveal('.profile__name', {delay: 500})
sr.reveal('.profile__course',{delay: 600})
sr.reveal('.profile__social', {delay: 700})
sr.reveal('.profile__info-group',{interval:100, delay:700})
sr.reveal('.filter__content', {delay:900})
sr.reveal('.filter',{delay: 1000})



VanillaTilt.init(document.querySelector(".aboutme__box"), {
    max: 25,
    speed: 400
});

VanillaTilt.init(document.querySelector(".profile"), {
    max: 10,
    speed: 100,
    glare: true,
    glare:1,
    gyroscope:  true,
    gyroscopeMinAngleX:     -45,  
});