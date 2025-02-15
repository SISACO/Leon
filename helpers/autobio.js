const config = require('../config');

async function date() {
  const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  var data = new Date().toLocaleDateString(config.LANG, get_localized_date)
  return data;
}

async function time(number) {
  var data = ''
  if (number.startsWith('90')) { // Turkey
    data = new Date().toLocaleString('TR', { timeZone: 'Europe/Istanbul' }).split(' ')[1]
  } else if (number.startsWith('994')) { // Azerbayjan
    data = new Date().toLocaleString('AZ', { timeZone: 'Asia/Baku' }).split(' ')[1]
  } else if (number.startsWith('94')) { // Sri Lanka
    data = new Date().toLocaleString('LK', { timeZone: 'Asia/Colombo' }).split(' ')[1]
  } else if (number.startsWith('351')) { // Portugal
    data = new Date().toLocaleString('AZ', { timeZone: 'Europe/Lisbon' }).split(' ')[1]
  } else if (number.startsWith('7')) { // Russia - Same As Turkey
    data = new Date().toLocaleString('RU', { timeZone: 'Europe/Istanbul' }).split(' ')[1]
  } else if (number.startsWith('91')) { // India
    data = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
  } else if (number.startsWith('62')) { // Indonesia
    data = new Date().toLocaleString('ID', { timeZone: 'Asia/Jakarta' }).split(' ')[1]
  } else if (number.startsWith('49')) { // Germany
    data = new Date().toLocaleString('DE', { timeZone: 'Europe/Berlin' }).split(' ')[1]
  } else if (number.startsWith('61')) { // Australia
    data = new Date().toLocaleString('AU', { timeZone: 'Australia/Lord_Howe' }).split(' ')[1]
  } else if (number.startsWith('55')) { // Brazil
    data = new Date().toLocaleString('BR', { timeZone: 'America/Noronha' }).split(' ')[1]
  } else if (number.startsWith('33')) { // France
    data = new Date().toLocaleString('FR', { timeZone: 'Europe/Paris' }).split(' ')[1]
  } else if (number.startsWith('44')) { // UK
    data = new Date().toLocaleString('GB', { timeZone: 'Europe/London' }).split(' ')[1]
  } else if (number.startsWith('39')) { // Italy
    data = new Date().toLocaleString('IT', { timeZone: 'Europe/Rome' }).split(' ')[1]
  } else if (number.startsWith('998')) { // Uzbekistan
    data = new Date().toLocaleString('UZ', { timeZone: 'Asia/Samarkand' }).split(' ')[1]
  } else if (number.startsWith('993')) { // Turkmenistan
    data = new Date().toLocaleString('TM', { timeZone: 'Asia/Ashgabat' }).split(' ')[1]
  } else {
    data = new Date().toLocaleString('EN', { timeZone: 'America/New_York' }).split(' ')[1]
  }
  return data;
}

module.exports = { date, time }
