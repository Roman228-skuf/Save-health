console.log('Sript connected');

const arrayOfLoveWishes = [
    "Пий достатньо води – не менше 1,5–2 літрів на день.",
    "Дотримуйся збалансованого харчування – більше овочів, фруктів та корисних жирів.",
    "Роби фізичні вправи щодня – хоча б 30 хвилин активності.",
    "Спи не менше 7–9 годин на добу для відновлення організму.",
    "Уникай стресу – медитація, йога або прогулянки допоможуть розслабитися.",
    "Регулярно мий руки та дотримуйся особистої гігієни.",
    "Проходь медичні обстеження хоча б раз на рік для профілактики.",
    "Обмежуй використання гаджетів, щоб зменшити навантаження на очі.",
    "Проводь більше часу на свіжому повітрі – це покращує роботу легенів і настрій.",
    "Відмовся від шкідливих звичок, таких як куріння та надмірне вживання алкоголю."
];

let count_of_hearth = 5;
console.log('countofhearths ' + count_of_hearth);
document.getElementById('count_of_hearth').innerText = '💊'.repeat(count_of_hearth);

document.getElementById('btn_wishes').addEventListener('click', () => {
    console.log('button clicked');
    let index = Math.floor(Math.random() * arrayOfLoveWishes.length);
    document.getElementById('p_wishes').innerText = arrayOfLoveWishes[index];
    count_of_hearth--;
    console.log('count_of_hearths ' + count_of_hearth);
    document.getElementById('count_of_hearth').innerText = '💊'.repeat(count_of_hearth) + '⚪'.repeat(5 - count_of_hearth);
    if (count_of_hearth == 0) {
        document.getElementById('btn_wishes').disabled = true;
    }
});

document.getElementById('btn_buy_hearths').addEventListener('click', () => {
    count_of_hearth = 5;
    document.getElementById('count_of_hearth').innerText = '💊'.repeat(count_of_hearth);
    document.getElementById('btn_wishes').disabled = false;
    document.getElementById('p_wishes').innerText = '';
    console.log('all done');
});

document.addEventListener('DOMContentLoaded', function() {
    const images = ['img/gallery/4.png', 'img/gallery/5.png', 'img/gallery/6.png'];
    let currentIndex = 0;

    const mainImage = document.getElementById('main-image');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    function changeImage(index) {
        mainImage.classList.add('hidden');
        setTimeout(() => {
            mainImage.src = images[index];
            mainImage.classList.remove('hidden');
        }, 500);
    }

    leftArrow.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        changeImage(currentIndex);
    });

    rightArrow.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        changeImage(currentIndex);
    });
});

const arrayOfVitaminObjects = [
    {
        "id": "1",
        "title": "Вітамін С",
        "photo":"img/vitamins/vitamin-c.png",
        "description":"Найкращий вітамін, який підтримує імунітет, покращує здоров'я шкіри, волосся та нігтів.",
        "rating": "3",
        "schema": "img/schema/c-schema.png",
    },

    {
        "id":"2",
        "title": "Омега Д3",
        "photo":"img/vitamins/supplement.png",
        "description":"Також відомий як холекальциф, відіграє важливу роль у підтримці здоров'я кісток та зубів, підтримує імунітет.",
        "rating": "2",
        "schema": "img/schema/omega-d3.png",
    },

    {
        "id":"3",
        "title": "Вітамін В3",
        "photo":"img/vitamins/vitamins.png",
        "description":"Допомагає зі шкірою, волоссям, нігтями, підтримує нервову систему, покращує пам'ять.",
        "rating": "5",
        "schema": "img/schema/b3.png",
    },

    {  
    "id":"4",
    "title": "Вітамін B12(x2)",
    "photo":"img/vitamins/supplementes.png",
    "description":"Допомагає підтримувати зорову функцію, зміцнює імунітет, покращує стан шкіри, волосся та нігтів.",
    "rating": "4",
    "schema": "img/schema/b12.png",
    }
]

console.log(arrayOfVitaminObjects);

arrayOfVitaminObjects.forEach((item) => {
    console.log(item);

    let divVitamin = document.createElement('div');
    divVitamin.classList.add('vitamin');

    let ratingEmojis = '🧡'.repeat(item.rating) + '🤍'.repeat(5 - item.rating);

    divVitamin.innerHTML = `
        <img src="${item.photo}" alt="${item.title}" class="vitamin-photo">
        <p class="vitamin-title">${item.title}</p>
        <p class="vitamin-rating">${ratingEmojis}</p>
    `;

    divVitamin.addEventListener('mouseover', () => {
        divVitamin.querySelector('.vitamin-photo').style.opacity = '0';
        divVitamin.querySelector('.vitamin-title').style.opacity = '0';
        divVitamin.querySelector('.vitamin-rating').style.opacity = '0';
        setTimeout(() => {
            divVitamin.querySelector('.vitamin-title').innerText = item.description;
            divVitamin.querySelector('.vitamin-photo').style.display = 'none';
            divVitamin.querySelector('.vitamin-rating').style.display = 'none';
            divVitamin.querySelector('.vitamin-title').style.opacity = '1';
        }, 150);
    });

    divVitamin.addEventListener('mouseout', () => {
        divVitamin.querySelector('.vitamin-title').style.opacity = '0';
        setTimeout(() => {
            divVitamin.querySelector('.vitamin-title').innerText = item.title;
            divVitamin.querySelector('.vitamin-photo').style.display = 'block';
            divVitamin.querySelector('.vitamin-rating').style.display = 'block';
            divVitamin.querySelector('.vitamin-photo').style.opacity = '1';
            divVitamin.querySelector('.vitamin-title').style.opacity = '1';
            divVitamin.querySelector('.vitamin-rating').style.opacity = '1';
        }, 150);
    });

    divVitamin.addEventListener('click', () => {
        const schemaContainer = document.getElementById('vitamin-schema-container');
        schemaContainer.innerHTML = `<img src="${item.schema}" alt="Схема ${item.title}" class="vitamin-schema">`;
    });

    document.getElementById('p_vitamins').appendChild(divVitamin);
});