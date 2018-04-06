# Мой проект (Thomas Rythm)
***
* Структура проекта.
***
**Файлы. Структура, содержание**

Название файла               | Содержание файла
-----------------------------|----------------------
www/                         |
css/                         |
                             |
et-line.css                  | Стили иконочного шрифта Et-Line <https://www.npmjs.com/package/et-line>
font-awesome.min.css         | Стили иконочного шрифта Font Awesome <https://fontawesome.com/>
grid.css                     | Стили оформления применяемые на классы .form и .col
lightbox.min.css             | Стили модальной галереии изображений - Lightbox <http://lokeshdhakar.com/projects/lightbox2/>
slicknav.css                 | Стили мобильной менюшки - Slicknav <http://slicknav.io/>
style.css                    | Стили применяемые в данном проекте, также содержет элементы стилей guide.html 
                             |
fonts/                       |
et-line.eot                  | =>
et-line.svg                  | =>
et-line.ttf                  | =>
et-line.woff                 | Файлы шрифтов Et-Line, подключенных к проекту
FontAwesome.otf              | =>
fontawesome-webfont.eot      | =>
fontawesome-webfont.svg      | =>
fontawesome-webfont.ttf      | =>
fontawesome-webfont.woff     | Файлы шрифтов Font Awesome, подключенных к проекту
			     |
img/                         |
*.jpg                        | Изображения данного формата применяемые в проекте
*.png                        | Логотипы и изображания данного формата применяемые в проекте
			     |
js/                          |
google-maps.js               | Файл кастомизации подключенных Google maps
header-scroll.js             | Файл настроек скрипта header scroll (прокрутка хедера страницы вслед за окном браузера)
init.js                      | Файл инициализации, доп. настроек, скриптов данного проекта
jquery.slicknav.min.js       | Файл настроек плагина Slicknav (минифицированная версия)
lightbox.min.js              | Файл настроек плагина Lightbox (минифицированная версия)
scroll-to.js		     | Файл настроек скрипта Scroll to 
			     |
guide.html                   | Гайд по проекту с примерами (разметкой) стандартных элементов
index.html                   | Разметка проекта
README.md                    | Вы его читаете

**Подключенные билиотеки и их описание**
1. Google Fonts - шрифты применяемые в проекте взятые из библиотеки Google <https://fonts.google.com/> 

Пример подключения проекте:
``` html 
<head> 
     <!-- Google Fonts --> 
     <link href="https://fonts.googleapis.com/css?family=Dosis:300,400|Open+Sans:300,400" rel="stylesheet">
</head> 
```
2. Lightbox - плагин для работы с галереей, добовляет визуальные стили для просмотра изображений 
![screenshot of sample](http://4.bp.blogspot.com/-ygm4IWsVgmI/Ugj3_lf9IOI/AAAAAAAAAOE/I7ZbcmVUrv8/s1600/lightbox+effect.jpg)

Для ознакомления:
<http://lokeshdhakar.com/projects/lightbox2/>

Пример подключения в проекте:
``` html
<head> 
    <!-- Lightbox -->
    <link rel="stylesheet" href="css/lightbox.min.css">
</head>
<body>
    <!-- Lightbox -->
    <script src="js/lightbox.min.js"></script>
</body>
```
3. Slick - плагин для построения карусели с нужным контентом
![screenshot of sample](https://ps.w.org/wp-slick-slider-and-image-carousel/assets/screenshot-1.png?rev=1287562)

Для ознакомления:
<http://kenwheeler.github.io/slick/>

Пример подключения в проекте:
``` html
<head> 
    <!-- Slick styles -->
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"/>
</head>
<body>
    <!-- Plagins -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
</body>
```
4. Slick nav - мобильное меню (бургер). Служит навигацией по сайту в мобильной версии.
![screenshot of sample](https://anythinggraphic.net/wp-content/uploads/2015/03/slick-nav-js.jpg)
Для ознакомления:
<http://slicknav.io/>

Пример подключения в проекте:
``` html
<head> 
    <!-- Slick nav -->
    <link rel="stylesheet" href="css/slicknav.css">
</head>
<body>
    <!-- Slick nav -->
    <script src="js/jquery.slicknav.min.js"></script>
</body>
```
5. Et-line and Font awesome - иконочные шрифты. Используются в проекте в виде иконок для соц-сетей, а также навигационных иконок по сайту.

![screenshot of sample](http://phdesign.com.au/assets/img/blog/fa-in-google-icons.png)

Для ознакомления:

Font Awesome <https://fontawesome.com/>
	
Et-Line <https://www.npmjs.com/package/et-line>

Пример подключения в проекте:
``` html
<head> 
    <!-- Et-line icons -->
    <link rel="stylesheet" href="css/et-line.css">

    <!-- Font awesome -->
    <link rel="stylesheet" href="css/font-awesome.min.css">
</head>
```
6. Header on scroll - скрипт для .header позволяющий плавно выводить .header после прокрутки "приветственного экрана (inner)" с изминениями в визуальном стиле.

![screenshot of sample](https://s3.amazonaws.com/ionic-marketplace/ionic2-hide-and-show-header-with-scrolling/icon.png)

Пример подключения в проекте:
``` html
<body> 
    <!-- Header on scroll -->
    <script src="js/header-scroll.js"></script>
</body>
```
7. Scroll to - скрипт для плавного перемещения по сайту (smooth scroll) с приминением якорей, в проекте используется для меню сайта. Как в desktop режиме, так и в мобильной. Также для .arrow-up для быстрого возврата к шапке. Обязательным является применение атрибута data-scroll с указанием класса элемента к торому нужно будет перейти
``` html
<ul class="header-nav text-uppercase">
	<li><a href="#" data-scroll='.inner'>Home</a></li>
        <li><a href="#" data-scroll='.about-studio'>About</a></li>
        <li><a href="#" data-scroll='.services'>Services</a></li>
	<li><a href="#" data-scroll='.portfolio'>Works</a></li>
	<li><a href="#" data-scroll='.contacts'>Contact</a></li>
</ul>
```
Пример подключения в проекте:
``` html
<body> 
   <!-- Scroll to -->
   <script src="js/scroll-to.js"></script>
</body>
```
8. В проекте были применены "гриды" для более удобного построения колонок с текстом и формирования различных частей сайта. 
Часть кода в примере
``` html
/* Grid layout */
.col-1 {
    width: 8.33333333%;
}
.col-2 {
    width: 16.66666667%;
}
.col-3 {
    width: 25%;
}
.col-4 {
    width: 33.33333333%;
}
.col-5 {
    width: 41.66666667%;
```
Приминение в разметке:
``` html
<div class="col col-4">
```
Пример подключения в проекте:
``` html
<head> 
   <!-- Grid style -->
   <link rel="stylesheet" href="css/grid.css">
</head>
```