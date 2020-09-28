# guk-krasnodar
Небольшая утилита для взаимодействия с ГУК "Краснодар",к сожалению, у меня не получилось найти api интерфейс для автоматизации обмена данными. 
Писалось в угаре на коленке, просьба использовать если понимаете что делаете.

### Установка 
Нужно установить проект,
`npm i guk`
после чего можно юзать
```JavaScript
const gukClass = require("guk-krasnodar")
const gukInstance = new gukClass("accoundId")
```
### Example
#### Получение данных водомеров
```JavaScript
const guk= require("./src/guk")

const accountNumber = 'свой номер из квитанции'
const g = new guk(accountNumber);
g.getValues().then((v) => {
    console.log(v)
}).catch(e => e)
```
#### Результат
```
[ '584', '294', '50', '68' ]
```
### TODO
- [X] CSRF tokens
- [X] Подстановка Cookie
- [x] Получение данных о значениях водомеров
- [ ] Отправка данных о водомерах
- [ ] Динамическое количество водомеров
