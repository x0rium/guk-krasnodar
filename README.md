# guk-krasnodar
Небольшая утилита для взаимодействия с ГУК "Краснодар",к сожалению, у меня не получилось найти api интерфейс для автоматизации обмена данными. 
Писалось в угаре на коленке, просьба использовать если понимаете что делаете.

### Установка 
Нужно установить проект,
`npm i guk-krasnodar`

### Example
#### Получение данных водомеров
```JavaScript
const accountNumber = 'свой номер из квитанции';
const integration = require("guk-krasnodar");
const guk = new integration(accountNumber);
guk.getData().then(data => {console.log(data)}).catch(e=>e);
```
#### Результат
```
[
  {
    id: '38617',
    type: 'Холодная вода',
    hwId: '249709',
    nextCheckDate: '21.02.2021',
    waterId: '38451',
    lastPostDate: 'August 2020',
    value: '584'
  },
  {
    id: '38618',
    type: 'Горячая вода',
    hwId: '4000013',
    nextCheckDate: '21.02.2021',
    waterId: '38452',
    lastPostDate: 'August 2020',
    value: '294'
  },
  {
    id: '38619',
    type: 'Горячая вода',
    hwId: '52871',
    nextCheckDate: '06.02.2023',
    waterId: '38453',
    lastPostDate: 'August 2020',
    value: '50'
  },
  {
    id: '38620',
    type: 'Холодная вода',
    hwId: '55872',
    nextCheckDate: '06.02.2023',
    waterId: '38454',
    lastPostDate: 'August 2020',
    value: '68'
  }
]
```
### TODO
- [X] CSRF tokens
- [X] Подстановка Cookie
- [x] Получение данных о значениях водомеров
- [ ] Отправка данных о водомерах
- [X] Динамическое количество водомеров
