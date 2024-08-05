const giftArr = [
    {
      title: "Скидка 20% на первую покупку в нашем магазине!",
      icon: "img/discount.svg"
    },
    {
      title: "Скидка 10% на всё!",
      icon: "img/discount_2.svg"
    },
    {
      title: "Подарок при первой покупке в нашем магазине!",
      icon: "img/gift.svg"
    },
    {
      title: "Бесплатная доставка для вас!",
      icon: "img/delivery.svg"
    },
    {
      title: "Сегодня день больших скидок!",
      icon: "img/discount_3.svg"
    }
   ]

const cardEl = document.querySelector('.content--visible');
const buttonEl = document.querySelector('.content__button');
const textEl = document.querySelector('.content__text');
const photoEl = document.querySelector('.content__image');

function randomGift(giftArr) {
    
    const randomTitle = Math.floor(Math.random() * giftArr.length)
    return giftArr[randomTitle];
};

const result = randomGift(giftArr);
for (const key in result) {
    if (key === 'title') {
        textEl.textContent = result[key];
        continue;
    }
    else if (key === 'icon') {
        photoEl.setAttribute('src', result[key]);    
    }
    
}


const createCard = setInterval(() => {
    cardEl.classList.remove('content--visible');
}, 3000)

const stopCard = setTimeout(() => {
    clearInterval(createCard);
}, 3000)

buttonEl.addEventListener('click', function () {
    cardEl.classList.add('content--visible');
})