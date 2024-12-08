const axios = require('axios');
const cheerio = require('cheerio');

// Інтервал перевірки (в мілісекундах)
const INTERVAL = 60000;

// URL-адреса товару, який наразі недоступний
const PRODUCT_URL = 'https://rozetka.com.ua/ua/1stcharger-bn1st6027/p437111474/';

// URL-адреса товару, який доступний (для тестування)
// const PRODUCT_URL = 'https://rozetka.com.ua/ua/lenovo-82vg00rgra/p450313244/';

const fetchAndParse = async () => {
  try {
    const { data } = await axios.get(PRODUCT_URL);
    const $ = cheerio.load(data);

    const status = $('.status-label').text()

    console.log(status)
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
  }
};

// Початкова перевірка
fetchAndParse();

// Періодична перевірка кожні X секунд
setInterval(fetchAndParse, INTERVAL);


