// Player data
const players = [
    {
        name: 'Engjull Sollova',
        position: 'Guard',
        number: 5,
        image: 'https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/455269347_492822346835254_7137038761659227684_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hJt2r1he2msQ7kNvgG5hnoT&_nc_zt=23&_nc_ht=scontent.fprn13-1.fna&_nc_gid=AyvAdYh__QkI6gcAVKLU05r&oh=00_AYDUgGfP8TjlxbjH3f2DvLwQ-0-ndX1asl7Qqiglpu-g-g&oe=679C6A2E',
        stats: {
            ppg: '15.5',
            rpg: '3.2',
            apg: '4.8'
        }
    },
    {
        name: 'Adrian Ibishi',
        position: 'Forward',
        number: 7,
        image: 'https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/437541608_3591155871150195_8183665735640789138_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WwcH6qOp468Q7kNvgGRaSlZ&_nc_zt=23&_nc_ht=scontent.fprn13-1.fna&_nc_gid=Ao_0kgAwxd1UiLCRSfkgqbT&oh=00_AYD2z1LneFv_TMdrmWiJ3sLVM9-xhXbwTbKPiWEcY4fvNw&oe=679C939A',
        stats: {
            ppg: '18.2',
            rpg: '7.5',
            apg: '2.1'
        }
    },
    {
        name: 'Rinor Zhdrella',
        position: 'Center',
        number: 11,
        image: 'https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/455251672_494093026708186_6416070201667918715_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5aZ7IXvs0awQ7kNvgGaNUHi&_nc_zt=23&_nc_ht=scontent.fprn13-1.fna&_nc_gid=AnISeJ5m3W6Oy0K7tN1__G0&oh=00_AYB2YmF4c7KJmHBHrxdMWONekzHCu0k4UuJZabpdtFL4xQ&oe=679C88BE',
        stats: {
            ppg: '12.8',
            rpg: '9.3',
            apg: '1.5'
        }
    },
    {
        name: 'Erin Grosha',
        position: 'Center',
        number: 11,
        image: 'https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/455063133_492953690155453_3408396872052379816_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qX0i96ftQH0Q7kNvgH7LPw9&_nc_zt=23&_nc_ht=scontent.fprn13-1.fna&_nc_gid=A8pRLnQJE2a3JTGi8zBiN__&oh=00_AYB1N2DveP8pSlqHDumGRSGenplrps38AxDZaOTWNAS7Vg&oe=679C8F71',
        stats: {
            ppg: '12.8',
            rpg: '9.3',
            apg: '1.5'
        }
    },
    {
        name: 'Eris Zeneli',
        position: 'Center',
        number: 11,
        image: 'https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/455675222_494544239996398_6715005977544186474_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IAko9dKFH3IQ7kNvgEFHzak&_nc_zt=23&_nc_ht=scontent.fprn13-1.fna&_nc_gid=Aw35essHfRHE0mAKoTpC6tQ&oh=00_AYBAtKzHLsScEaI4dBNOTeCx4z8GT4_fZls0Rg2Kqve1sg&oe=679C8AD6',
        stats: {
            ppg: '12.8',
            rpg: '9.3',
            apg: '1.5'
        }
    },
    {
        name: 'Donat Rexhepi',
        position: 'Center',
        number: 11,
        image: 'https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/455848028_495358976581591_1463956364226356003_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9vRWL5OsSqUQ7kNvgHevEe7&_nc_zt=23&_nc_ht=scontent.fprn13-1.fna&_nc_gid=ABbCXH7voncc14aDcYKxDqa&oh=00_AYABxUlVkUdlk31Nbdl0wet-qZ6qYQRG4xFXy4cOUyyDFg&oe=679C6BCA',
        stats: {
            ppg: '12.8',
            rpg: '9.3',
            apg: '1.5'
        }
    },
    {
        name: 'Ismail Voca',
        position: 'Center',
        number: 11,
        image: 'https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/455288130_493291303455025_8799417319862695549_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PLISy17zPWUQ7kNvgE7O2QY&_nc_zt=23&_nc_ht=scontent.fprn13-1.fna&_nc_gid=AyMqgZUiqCYOw4vHLJ9fGJE&oh=00_AYBy2WEBHojly6iDHCzn68wovOItW--yfZoQT7nccbodKg&oe=679C5BDA',
        stats: {
            ppg: '12.8',
            rpg: '9.3',
            apg: '1.5'
        }
    },
    {
        name: 'Endrit Qovanaj',
        position: 'Center',
        number: 11,
        image: 'https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/455269279_493370026780486_8261054524503071756_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=snSxerqWYX8Q7kNvgHQHd1z&_nc_zt=23&_nc_ht=scontent.fprn13-1.fna&_nc_gid=AcSS0hsnRT8Z88HDR-1o-gM&oh=00_AYCM4MBzndIB8WzTi80omw5ZnFaQYB71q7qnaW1ZFv-QxA&oe=679C90BB',
        stats: {
            ppg: '12.8',
            rpg: '9.3',
            apg: '1.5'
        }
    },
    {
        name: 'Reggie Clark',
        position: 'Center',
        number: 11,
        image: 'https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/455813524_494904673293688_2705169614447804865_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bNwk3d2jL7oQ7kNvgG5uxXW&_nc_zt=23&_nc_ht=scontent.fprn13-1.fna&_nc_gid=AhTdCblDnuA9JBKP8OD6PCN&oh=00_AYCp7BAM6T08ZtlScZga7HF6l04wE33ttukXJbx-DOIaJQ&oe=679C689A',
        stats: {
            ppg: '12.8',
            rpg: '9.3',
            apg: '1.5'
        }
    },

    {
        name: 'Visar Ejupi',
        position: 'Center',
        number: 11,
        image: 'https://rahoveci24.com/wp-content/uploads/2024/12/visar-ejupi-e1734360676522.jpg',
        stats: {
            ppg: '12.8',
            rpg: '9.3',
            apg: '1.5'
        }
    },
    {
        name: 'Denis Zenelaj',
        position: 'Center',
        number: 11,
        image: 'https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/289027635_3178256629156593_5023376860013978029_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Z6ZnVGB7H9kQ7kNvgHpF7QU&_nc_zt=23&_nc_ht=scontent.fprn13-1.fna&_nc_gid=AGBLjS0ftD0MDl7ZBDLnLG7&oh=00_AYDnmDtbkRYp34Ctk_fjc3tckWx2xWtesBBeE7-9hQofTA&oe=679C676A',
        stats: {
            ppg: '12.8',
            rpg: '9.3',
            apg: '1.5'
        }
    },
    {
        name: 'Yll Pllana',
        position: 'Center',
        number: 11,
        image: 'https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/466379602_562210403229781_1045723953968014388_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kQQIIW1b1wUQ7kNvgEDqZQz&_nc_zt=23&_nc_ht=scontent.fprn13-1.fna&_nc_gid=A6ARpOZnJsHiuVlUvJFbToP&oh=00_AYBO5gwJT5L_kTPsPrYBKBfqUpJEjtHxUkuEpqQZKVtAwQ&oe=679C82CA',
        stats: {
            ppg: '12.8',
            rpg: '9.3',
            apg: '1.5'
        }
    },
];

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation link on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // Create player cards
    createPlayerCards();
    initializeSwiper();
});

// Create player cards with stats
function createPlayerCards() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    
    players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'swiper-slide';
        playerCard.innerHTML = `
            <div class="player-card">
                <img src="${player.image}" alt="${player.name}">
                <h3>${player.name}</h3>
                <p>Pozita: ${player.position}</p>
                <p>Numri: ${player.number}</p>
                <div class="player-stats">
                    <p>PPG: ${player.stats.ppg}</p>
                    <p>RPG: ${player.stats.rpg}</p>
                    <p>APG: ${player.stats.apg}</p>
                </div>
            </div>
        `;
        swiperWrapper.appendChild(playerCard);
    });
}

// Initialize custom swiper
function initializeSwiper() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.swiper-slide');
    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');
    
    function updateSlides() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.style.display = 'block';
                slide.style.opacity = '1';
            } else {
                slide.style.display = 'none';
                slide.style.opacity = '0';
            }
        });
    }
    
    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    });
    
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    });
    
    // Show initial slide
    updateSlides();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});