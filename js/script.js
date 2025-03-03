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

let count_of_hearth = 5
console.log('countofhearths ' + count_of_hearth)
document.getElementById('count_of_hearth').innerText = '💊'.repeat(count_of_hearth)

document.getElementById('btn_wishes').addEventListener('click', () => {
    console.log('button clicked');
    let index = Math.floor(Math.random() * arrayOfLoveWishes.length)
    document.getElementById('p_wishes').innerText = arrayOfLoveWishes[index];
    count_of_hearth--
    console.log('count_of_hearths' + count_of_hearth)
    document.getElementById('count_of_hearth').innerText = '💊'.repeat(count_of_hearth) + '⚪'.repeat(5-count_of_hearth)
    if(count_of_hearth == 0) {
        document.getElementById('btn_wishes').style.display = 'none'

    }
})

document.getElementById('btn_buy_hearths').addEventListener('click', () => {
    
    count_of_hearth = 5
    document.getElementById('count_of_hearth').innerText = '💊'.repeat(count_of_hearth)
    document.getElementById('btn_wishes').style.display = 'inline-block'
    document.getElementById(p_wishes).innerText = ''
    console.log('all done')
})
