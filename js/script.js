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
        "photo":"img/vitamin-c.png",
        "description":"Найкращий вітамін, який підтримує імунітет, покращує здоров'я шкіри, волосся та нігтів.",
        "rating": "",
        "useful": "",
    },

    {
        "id":"2",
        "title": "Омега Д3",
        "photo":"img/supplement.png",
        "description":"Також відомий як холекальциф, відіграє важливу роль у підтримці здоров'я кісток та зубів, підтримує імунітет.",
        "rating": "",
        "useful": "",
    },

    {
        "id":"3",
        "title": "Вітамін В3",
        "photo":"img/vitamins.png",
        "description":"Допомагає зі шкірою, волоссям, нігтями, підтримує нервову систему, покращує пам'ять.",
        "rating": "",
        "useful": "",
    },

    {  
    "id":"4",
    "title": "Вітамін B12(x2)",
    "photo":"img/supplementes.png",
    "description":"Допомагає підтримувати зорову функцію, зміцнює імунітет, покращує стан шкіри, волосся та нігтів.",
    "rating": "",
    "useful": "",
    }
]

console.log(arrayOfVitaminObjects);

arrayOfVitaminObjects.forEach((item) => {
    console.log(item);

    // Створюємо контейнер для вітаміну
    let divVitamin = document.createElement('div');
    divVitamin.classList.add('vitamin');

    // Додаємо HTML-структуру з фото і заголовком
    divVitamin.innerHTML = `
        <img src="${item.photo}" alt="${item.title}" class="vitamin-photo">
        <p class="vitamin-title">${item.title}</p>
    `;

    // Додаємо подію для зміни тексту і приховування фото при наведенні
    divVitamin.addEventListener('mouseover', () => {
        divVitamin.querySelector('.vitamin-photo').style.opacity = '0'; // Приховуємо фото
        divVitamin.querySelector('.vitamin-title').style.opacity = '0'; // Приховуємо заголовок
        setTimeout(() => {
            divVitamin.querySelector('.vitamin-title').innerText = item.description; // Змінюємо текст на опис
            divVitamin.querySelector('.vitamin-photo').style.display = 'none'; // Повністю прибираємо фото
            divVitamin.querySelector('.vitamin-title').style.opacity = '1'; // Показуємо опис
        }, 150); // Час для плавного переходу
    });

    // Додаємо подію для повернення тексту і фото при відведенні курсора
    divVitamin.addEventListener('mouseout', () => {
        divVitamin.querySelector('.vitamin-title').style.opacity = '0'; // Приховуємо опис
        setTimeout(() => {
            divVitamin.querySelector('.vitamin-title').innerText = item.title; // Повертаємо заголовок
            divVitamin.querySelector('.vitamin-photo').style.display = 'block'; // Повертаємо фото
            divVitamin.querySelector('.vitamin-photo').style.opacity = '1'; // Показуємо фото
            divVitamin.querySelector('.vitamin-title').style.opacity = '1'; // Показуємо заголовок
        }, 150); // Час для плавного переходу
    });

    // Додаємо елемент до контейнера
    document.getElementById('p_vitamins').appendChild(divVitamin);
});