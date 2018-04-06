# Мой проект (Thomas Rythm)
***
* Структура проекта.
***
**Файлы. Структура, содердание**

Название файла               | Содержание файла
-----------------------------|----------------------
www/                         | 
css/                         | 
et-line.css                  | Стили иконочного шрифта Et-Line <https://www.npmjs.com/package/et-line>
font-awesome.min.css         | Стили иконочного шрифта Font Awesome <https://fontawesome.com/>
grid.css                     | Стили сетки для быстрого формирования ширины на .form и .col
lightbox.min.css             | Стили модальной галереии изображений - Lightbox <http://lokeshdhakar.com/projects/lightbox2/>
slicknav.css                 | Стили мобильной менюшки - Slicknav <http://slicknav.io/>
style.css                    | Стили применяемые в данном проекте
fonts/                       |
et-line.eot                  | +
et-line.svg                  | +
et-line.ttf                  | +
et-line.woff                 | Файлы шрифтов Et-Line, подключенных к проекту
FontAwesome.otf              | +
fontawesome-webfont.eot      | +
fontawesome-webfont.svg      | +
fontawesome-webfont.ttf      | +
fontawesome-webfont.woff     | Файлы шрифтов Font Awesome, подключенных к проекту
img/                         |
*.jpg                        | Изображения данного формата применяемые в проекте
*.png                        | Логотипы и изображания данного формата применяемые в проекте
js/                          |
google-maps.js               | Файл кастомизации подключенных Google maps
header-scroll.js             | Файл настроек скрипта header scroll (прокрутка хедера страницы вслед за окном браузера)
init.js                      | Файл инициализации, доп. настроек, скриптов данного проекта
jquery.slicknav.min.js       | Файл настроек плагина Slicknav (минифицированная версия)
lightbox.min.js              | Файл настроек плагина Lightbox (минифицированная версия)
scroll-to.js                 | Файл настроек скрипта Scroll to 
\                            |
guide.html                   | Гайд по проекту с примерами (разметкой) стандартных элементов
index.html                   | Разметка проекта
README.md                    | Вы его читаете

***
**Подключенные билиотеки и их описание**
1. **Google Fonts** - шрифты применяемые в проекте взятые из библиотеки Google <https://fonts.google.com/> 

Пример подключения проекте:
``` html 
<head> 
	<!-- Google Fonts --> 
	<link href="https://fonts.googleapis.com/css?family=Dosis:300,400|Open+Sans:300,400" rel="stylesheet">
</head> 
```
2. **Lightbox** - плагин для работы с галереей, добовляет визуальные стили для просмотра изображений 
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
3. **Slick** - плагин для построения карусели с нужным контентом
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
4. **Slick nav** - мобильное меню (бургер). Служит навигацией по сайту в мобильной версии.
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
5. **Et-line and Font awesome** - иконочные шрифты. Используются в проекте в виде иконок для соц-сетей, а также навигационных иконок по сайту.

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
6. **Header on scroll** - скрипт для .header позволяющий плавно выводить .header после прокрутки "приветственного экрана (inner)" с изминениями в визуальном стиле.

![screenshot of sample](https://s3.amazonaws.com/ionic-marketplace/ionic2-hide-and-show-header-with-scrolling/icon.png)

Пример подключения в проекте:
``` html
<body> 
   <!-- Header on scroll -->
   <script src="js/header-scroll.js"></script>
</body>
```
7. **Scroll to** - скрипт для плавного перемещения по сайту (smooth scroll) с приминением якорей, в проекте используется для меню сайта. Как в desktop режиме, так и в мобильной. Также для .arrow-up для быстрого возврата к шапке. Обязательным является применение атрибута data-scroll с указанием класса элемента к торому нужно будет перейти
``` html
<ul class="header-nav">
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
8. В проекте были применены **Grid style ("гриды")** для более удобного построения колонок с текстом и формирования различных частей сайта. 
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
9. **jQuery и jQuery ui:** 

JQuery - библиотека JavaScript, фокусирующаяся на взаимодействии JavaScript и HTML.

Для ознакомления:
<https://jquery.com/>

jQuery ui - настройка пользовательского интерфейса в веб-приложениях, часть проекта jQuery. Построена поверх главной библиотеки jQuery и предоставляет разработчику упрощенный доступ к её функциям взаимодействия, анимации и эффектов, а также набор виджетов. Простыми словами - это готовые плагины для jQuery при помощи которых облегчаются поставленные задачи перед разработчиком.

Для ознакомления:
<https://jqueryui.com/>

В данном проекте применено для создания "карусели" - Slick.

Примененте в разметке:
``` html
<div class="reviews-carousel">
					<div>
						<div class="slide-content text-center">
							<span class="icon icon-quote"></span>
							<div class="title section-title-light title-white">
								<span>What people say?</span>
							</div>
							<!-- / title -->
							<p>Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue,
								risus utaliquam dapibus. Thanks!</p>
							<span class="reviews-author">— John Doe, doodle inc.</span>
						</div>
						<!-- / slide-content -->
					</div>
					<!-- / slide -->
					<div>
						<div class="slide-content text-center">
							<span class="icon icon-quote"></span>
							<div class="title section-title-light title-white">
								<span>What people say?</span>
							</div>
							<!-- / title -->
							<p>Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue,
								risus utaliquam dapibus. Thanks!</p>
							<span class="reviews-author">— John Doe, doodle inc.</span>
						</div>
						<!-- / slide-content -->
					</div>
					<!-- / slide -->
					
				</div>
				<!-- / reviews-carousel -->
```
Пример подключения в проекте:
``` html
<body> 
   <!-- jQuery -->
		<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
		<!-- jQuery ui -->
		<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
</body>
```
10. **Google map api** - картографический сервис Goole. Создание и подключение карт для страницы проекта.

Для ознакомления:
<https://developers.google.com/maps/?hl=ru>

Примененте в разметке:
``` html
	<div class="map-container">
	        <div id="map"></div>
		<div class="on-map-block text-center">
		        <div class="rhomb-title-wrapper">
		                <div class="rhomb-icon white-icon">
			        <i class="fa fa-map-marker"></i>
		                </div>
		        <span class="title title-white">Open the map<i class="fa fa-chevron-down"></i></span>
	                </div>
	                <!-- / rhomb-title-wrapper -->
	        </div>
	        <!-- / on-map-block -->
	</div>
	<!-- / map -->
```

Пример подключения в проекте:
``` html
<body> 
   <!-- Google map api -->
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDzinoGqN_l50-osFUy2pdPlOMRf2MuaO4&callback=initMap" async defer></script>
		<!-- Init google map -->
		<script src="js/google-maps.js"></script>
</body>
```
***
**Описание стандартных классов и компонентов**
***
**Стандартные классы**

В проекте были использованны такие классы:

Название класса | Действие
----------------|----------------------
.text-center    | выравние текста по центру
.text-right     | выравнивание текста по правому краю
.text-justify   | выравнивание текста во всю ширину строки
.text-uppercase | делает все буквы заглавными
.bg-grey        | серый цвет фона для секций
.bg-black       | черный цвет фона для секций
.m-auto         | отмена свойства float у єлементов и віставление левого и правого margin - auto
.pull-left		| применение свойства float: left
.pull-right		| применение свойства float: right
--------------------------------------------
Описаны в файле style.css

**Стандартные компоненты**

В проекте были использованны такие компоненты:

Название компонента		| Описание
------------------------|---------------
.default-section | Задает размер секции путем выставления внутренних верзних и нижних отступов
.small-section | Компактный вариация .default-section
.container | Выставление ширины контенту, в структуре сайта
.title | =>
.title.title-white | =>
.title.section-title | =>
.title.section-title-light | Стандартные компоненты заголовка текста
.default-text | Стандартный текст сайта
blockquote, .blockquote | Станлартная цитата
blockquote span, .blockquote span | Стандартная подпись цитаты
.btn | Стандартная кнопка
.rhomb-icon | Стандартные стили для элемента страницы - ромбовидная иконка
--------------------------------------------
Описаны в файле style.css

Также применяется стандартный копонент - **сетка (Grid)** который включает себя стандартные классы **.row** и **.col** (.col1 - .col12) Что позволяет упростить создание разметки страницы

Описаны в файле **grid.css**

***

**Гайд по проекту**

***

Для данного проекта написан **guide.html** в котором представлены примеры получения нужных компонентов.

Примеры гайда:

**Стандартная секция(default-section):**

Разметка
``` html
<!-- Default section -->
		<div class="default-section">
			<div class="container">
				<div class="title section-title">
					<span>Default section title</span>
				</div>
				<div class="title section-title-light">
					<span>Default section title light</span>
				</div>
				<div class="title section-title-light text-right">
					<span>Default section title right</span>
				</div>
				<div class="title section-title-light text-center">
					<span>Default section title center</span>
				</div>
			</div>
		</div>
```
Стили
``` html
.default-section {
 	padding: 135px 0;
 }
 .container {
 	max-width: 1200px;
 	padding: 0 15px;
 	margin: 0 auto;
 }
 .title {
 	font-family: 'Dosis', sans-serif;
 	text-transform: uppercase;
 	color: #111;
 }
 .title.section-title {
 	font-size: 18px;
 	letter-spacing: .5em;
 	margin-bottom: 75px;
 	font-weight: 400;
 }
 .title.section-title-light {
 	font-size: 18px;
 	letter-spacing: .3em;
 	margin-bottom: 20px;
 	font-weight: 300;
 }
 .text-center {
 	text-align: center;
 }
 .text-right {
 	text-align: right;
 }
```

**Стандартная цитата с текстом (default-text and blockquote)**

Разметка
``` html
<!-- Default text and blockquote -->
		<div class="default-section">
			<div class="container">
				<div class="title section-title-light text-center">
					<span>Default text and blockquote</span>
				</div>
				<p class="default-text">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque illum similique voluptatibus enim explicabo facilis voluptas, dolorum molestias assumenda nam ex illo vero laboriosam, optio adipisci possimus quisquam dolore magni.
				</p>
				<blockquote class="blockquote">
					<p>A brand for a company is like 
					a reputation for a person. You earn reputation by trying to do hard things well.</p>
					<span>- Louis Kahn</span>
				</blockquote>
			</div>
		</div>
```
Стили 
``` html
.default-section {
 	padding: 135px 0;
 }
 .container {
 	max-width: 1200px;
 	padding: 0 15px;
 	margin: 0 auto;
 }
 .title {
 	font-family: 'Dosis', sans-serif;
 	text-transform: uppercase;
 	color: #111;
 }
 .title.section-title-light {
 	font-size: 18px;
 	letter-spacing: .3em;
 	margin-bottom: 20px;
 	font-weight: 300;
 }
 .text-center {
 	text-align: center;
 }
 .default-text {
 	font-size: 15px;
 	line-height: 1.7333;
 	font-weight: 300;
 }
 blockquote, .blockquote {
 	font-size: 24px;
 	font-weight: 300;
 	line-height: 1.6;
 }
 blockquote span, .blockquote span, .skill-name {
 	font-size: 11px;
 	text-transform: uppercase;
 	letter-spacing: .2em;
 }
```
**Кнопки (buttons)**

Разметка
``` html
<!-- Buttons -->
		<div class="default-section">
			<div class="container">
				<div class="title section-title-light">
					<span>Default buttons</span>
				</div>
				<a href="#" class="btn btn-default">Default button</a>
				<a href="#" class="btn btn-black">Black button</a>
				<button class="btn btn-default btn-xs">Xs button</button>
			</div>
		</div>
```
Стили
``` html
.default-section {
 	padding: 135px 0;
 }
 .container {
 	max-width: 1200px;
 	padding: 0 15px;
 	margin: 0 auto;
 }
 .title {
 	font-family: 'Dosis', sans-serif;
 	text-transform: uppercase;
 	color: #111;
 }
 .title.section-title-light {
 	font-size: 18px;
 	letter-spacing: .3em;
 	margin-bottom: 20px;
 	font-weight: 300;
 }
 .btn {
 	display: inline-block;
 	padding: 12px 20px;
 	border-radius: 2px;
 	font-family: 'Open Sans';
 	font-size: 12px;
 	font-weight: 400;
 	text-transform: uppercase;
 	letter-spacing: .2em;
 }
 .btn.btn-default {
 	background-color: #e5e5e5;
 	color: #777;
 }
 .btn.btn-default:hover {
 	background-color: #d1d0d0;
 }
 .btn.btn-black {
 	background-color: #323232;
 	color: #fff;
 }
 .btn.btn-black:hover {
 	background-color: #000;
 }
 .btn.btn-xs {
 	padding: 7px 15px;
 	font-size: 11px;
 }
```
Более подробное ознакомление в файле **guide.html**
***
**Адаптив**
В проекте использован адаптив по средстам медиа запросов (@media) для следующих разрешений 

@media (max-width: 1200px) {} - Нетбуки и новые Ipad PRO єкран которых от 10' до 12'

@media (max-width: 991px) {} - Планшеты 10'

@media (max-width: 767px) {} - Планшеты 7' и Фаблеты

@media (max-width: 576px) {} - Смартфоны со средним и маленим экраном

@media (max-width: 479px) {} - Смартфоны с экраном меньше 5' и айфон 4
