let body = document.querySelector('body');
let page = document.querySelector('.page');
let menuBtn = document.querySelector('.menu-btn');
let overlay = document.createElement('div');
const accordions = document.querySelectorAll('.accordion');
    
overlay.classList.add('site-overlay');
if (page){
    page.appendChild(overlay);
}
	

// Додаємо обробник події 'click' для елементів з класом '.menu-btn' в 'body'
body.addEventListener('click', function(event){
    // Перевіряємо, чи був клік на елементі з класом '.menu-btn'
    if (event.target.classList.contains('menu-btn') || event.target.closest('.menu-btn')) {
        
        body.classList.toggle('menuActive');
        // Перевіряємо, чи тепер елемент має клас 'btnActive'
        if (body.classList.contains('menuActive')) {
            
        } else {
            // Видаляємо клас 'menuActive' з 'body'
            body.classList.remove('menuActive');
        }
    }
    // Перевіряємо, чи був клік на елементі з класом '.site-overlay'
    if (event.target.classList.contains('site-overlay')) {
        // Видаляємо клас 'menuActive' з 'body'
        body.classList.remove('menuActive');
    }    

});

// Добавляем обработчик события 'click' для каждого аккордеона
accordions.forEach(accordion => {
    accordion.addEventListener('click', (event) => {
        if (event.target.classList.contains('accordion-button') || event.target.closest('.accordion-button')) {
            const accordionItem = event.target.closest('.accordion-item');
    
            if (accordionItem) {
                const allAccordionItems = accordion.querySelectorAll('.accordion-item');
        
                allAccordionItems.forEach(item => {
                    if (item !== accordionItem) {
                        item.classList.remove('show', 'collapsing');
                    }
                });

                // Переключаем класс 'show' у текущего элемента аккордеона
                accordionItem.classList.toggle('show');
            }
        }
    });
});

window.addEventListener('resize', function() {
    document.body.classList.remove('menuActive');
    document.body.classList.remove('basketActive');
});

document.addEventListener('DOMContentLoaded', function() {
    const navElement = document.querySelector('.main__nav');
    let navHeight;
    const navLinks = document.querySelectorAll('.main__nav_a, .link');
    const navItems = document.querySelectorAll('.main__nav_li');
    const sections = document.querySelectorAll('.mainNav');
    
    if (navElement) {
        navHeight = navElement.offsetHeight;
    } else {
        navHeight = 0;
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // active class of menu items onscroll
    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;

        document.querySelectorAll('.mainNav').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('.main__nav').clientHeight <= scrollDistance) {
                document.querySelectorAll('.main__nav_li').forEach((el) => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active');
                    }
                });

                document.querySelectorAll('.main__nav_li')[i].classList.add('active');
            }
        });
    });


    let swiper1 = new Swiper(".swiperCtg", {
        slidesPerView: "auto",
        spaceBetween: 10,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            300: {
                slidesPerView: 1.3,
                freeMode: false
            },
            350: {
                slidesPerView: 1.7,
                freeMode: false
            },
            500: {
                slidesPerView: 3.3,
                freeMode: false
            },
            992: {
                slidesPerView: 3,
                freeMode: false
            },
            1250: {
                slidesPerView: 4,
                freeMode: false
            },
            1480: {
                slidesPerView: 4,
                freeMode: false
            },
            1680: {
                slidesPerView: 5,
                freeMode: false
            },
        },
    });

    let swiper2 = new Swiper(".swiperAction", {
        slidesPerView: "auto",
        spaceBetween: 10,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
                freeMode: false
            },
            1100: {
                slidesPerView: 4.6,
                freeMode: false
            },
            1480: {
                slidesPerView: 5,
                freeMode: false
            },
            1680: {
                slidesPerView: 6,
                freeMode: false
            },
        }
    });

    document.querySelectorAll('.swiperBuy').forEach(swiperElement => {
        if (swiperElement.closest('.modal-buy')) {
            let swiper3 = new Swiper(swiperElement, {
                slidesPerView: "auto",
                spaceBetween: 10,
                freeMode: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    992: {
                        slidesPerView: 2,
                        freeMode: false
                    },
                    1100: {
                        slidesPerView: 3,
                        freeMode: false
                    }
                }
            });
        } else {
            let swiper3 = new Swiper(swiperElement, {
                slidesPerView: "auto",
                spaceBetween: 10,
                freeMode: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    992: {
                        slidesPerView: 3,
                        freeMode: false
                    },
                    1100: {
                        slidesPerView: 4,
                        freeMode: false
                    },
                    1480: {
                        slidesPerView: 5,
                        freeMode: false
                    },
                    1680: {
                        slidesPerView: 6,
                        freeMode: false
                    },
                }
            });
        }
    });

    var swiper4 = new Swiper(".swiperModal", {
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            clickable: true,
            el: ".swiper-pagination",
        },
    });

    let swiper5 = new Swiper(".swiperBuy-modal", {
        slidesPerView: "auto",
        spaceBetween: 10,
        freeMode: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
                freeMode: false
            },
            992: {
                slidesPerView: 3,
                freeMode: false
            }
        }
    });

// Function to handle decrease button clicks
    document.querySelectorAll('.decreaseVal').forEach(function(button) {
        button.addEventListener('click', function() {
            let inputEl = this.nextElementSibling;
            if (inputEl && inputEl.tagName === 'INPUT') {
                let v = parseInt(inputEl.value) - 1;
                if (v >= parseInt(inputEl.min)) {
                    inputEl.value = v;
                    updateBasketNumber(inputEl, v);
                }
            }
        });
    });

    // Function to handle increase button clicks
    document.querySelectorAll('.increaseVal').forEach(function(button) {
        button.addEventListener('click', function() {
            let inputEl = this.previousElementSibling;
            if (inputEl && inputEl.tagName === 'INPUT') {
                let v = parseInt(inputEl.value) + 1;
                if (v <= parseInt(inputEl.max)) {
                    inputEl.value = v;
                    updateBasketNumber(inputEl, v);
                }
            }
        });
    });

    // Function to update the basket number based on the input value
    function updateBasketNumber(inputEl, value) {
        let basketItem = inputEl.closest('.basket-item');
        if (basketItem) {
            let basketNumber = basketItem.querySelector('.basketNumber');
            if (basketNumber) {
                basketNumber.textContent = value;
            }
            updateBasketTotal();
        }
    }

    // Function to update the basket total
    function updateBasketTotal() {
        const basketItems = document.querySelectorAll('.basket-item');
        let total = 0;

        basketItems.forEach(item => {
            const basketNumber = item.querySelector('.basketNumber');
            const basketPrice = item.querySelector('.basketPrice');

            const number = parseInt(basketNumber.textContent, 10);
            const price = parseInt(basketPrice.textContent.replace(/\s/g, ''), 10);

            total += number * price;
        });

        const basketDelivery = document.querySelector('.basketDelivery');
        if (basketDelivery){
            const deliveryCost = parseInt(basketDelivery.textContent.replace(/\s/g, ''), 10);
            total += deliveryCost;
        }
        
        const basketTotal = document.querySelector('.basketTotal');
        if (basketTotal){
            basketTotal.textContent = total.toLocaleString();
        }
    }

    // Function to initialize basket numbers from input values on page load
    function initializeBasketNumbers() {
        const basketItems = document.querySelectorAll('.basket-item');

        basketItems.forEach(item => {
            const inputEl = item.querySelector('.rangedInput');
            if (inputEl) {
                updateBasketNumber(inputEl, parseInt(inputEl.value));
            }
        });
    }

    // Function to handle basket item removal
    function handleBasketRemove() {
        document.querySelectorAll('.basket-remove').forEach(function(button) {
            button.addEventListener('click', function() {
                let basketItem = this.closest('.basket-item');
                if (basketItem) {
                    basketItem.remove();
                    updateBasketTotal();
                }
            });
        });
    }

    // Функция для обработки удаления элементов из корзины
    function handleBasketRemove() {
        document.querySelectorAll('.basket-remove').forEach(function(button) {
            button.addEventListener('click', function() {
                let basketItem = this.closest('.basket-item');
                if (basketItem) {
                    basketItem.remove();
                    updateBasketTotal();
                    checkIfbasketEmptyActive();
                }
            });
        });
    }

    // Функция для проверки, пустая ли корзина, и добавления класса basketEmptyActive
    function checkIfbasketEmptyActive() {
        let basketWrapper = document.querySelector('.basket-wrapper');
        let basketItems = document.querySelectorAll('.basket-item');
        if (basketItems.length === 0) {
            basketWrapper.classList.add('basketEmptyActive');
            document.getElementById('modalBasket').classList.add('modalBasketEmpty');
            document.querySelectorAll('.basketDelivery').forEach(function(element) {
                element.textContent = '0';
            });
            document.querySelectorAll('.basketCount').forEach(function(element) {
                element.textContent = '0';
            });
            document.querySelector('#modalBasket .basket-total .btn').classList.add('btn-disabled');
        } else {
            basketWrapper.classList.remove('basketEmptyActive');
            document.getElementById('modalBasket').classList.remove('modalBasketEmpty');
            document.querySelector('#modalBasket .basket-total .btn').classList.remove('btn-disabled');
        }
    }

    // Вызываем функцию для начальной установки обработчиков
    handleBasketRemove();

    // Call the function to initialize basket numbers and update the total on page load
    window.addEventListener('load', function() {
        initializeBasketNumbers();
        updateBasketTotal();
        handleBasketRemove();
    });

    const basketBtn = document.querySelector('.basket-btn');
    if (basketBtn){
        basketBtn.addEventListener('click', function() {
            document.body.classList.toggle('basketActive');
        });
    }

    const basketClose = document.querySelector('.basket-close');
    if (basketClose){
        basketClose.addEventListener('click', function() {
            document.body.classList.toggle('basketActive');
        });
    }


    const closeButtons = document.querySelectorAll('.message-box-close');

    if (closeButtons){
        closeButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const messageBox = this.closest('.message-box');
                if (messageBox) {
                    messageBox.remove();
                }
            });
        });
    }

    
    const increaseButtons = document.querySelectorAll('.increaseVal, .rangedVal-text');
    const decreaseButtons = document.querySelectorAll('.decreaseVal');

    increaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemBuynum = button.closest('.itemBuy').querySelector('.itemBuy-num');
            let currentNum = parseInt(itemBuynum.textContent);

            if (button.classList.contains('increaseVal-10')) {
                currentNum += 10;
            } else if (button.classList.contains('increaseVal-50')) {
                currentNum += 50;
            } else if (button.classList.contains('increaseVal-100')) {
                currentNum += 100;
            } else {
                currentNum += 1;
            }

            itemBuynum.textContent = currentNum;
            updateCtgItemClass(itemBuynum);
        });
    });

    decreaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemBuynum = button.closest('.itemBuy').querySelector('.itemBuy-num');
            let currentNum = parseInt(itemBuynum.textContent);
            if (currentNum > 0) {
                itemBuynum.textContent = currentNum - 1;
                updateCtgItemClass(itemBuynum);
            }
        });
    });

    function updateCtgItemClass(itemBuynum) {
        const ctgItem = itemBuynum.closest('.itemBuy');
        const num = parseInt(itemBuynum.textContent);
        
        if (num >= 1) {
            ctgItem.classList.add('ctg-item-increased');
        } else {
            ctgItem.classList.remove('ctg-item-increased');
        }
    }

    let readMoreElements = document.querySelectorAll('.read-more');

    readMoreElements.forEach(function(readMore) {
        let readMoreIn = readMore.querySelector('.read-more-in');
        if (readMoreIn && readMoreIn.offsetHeight < readMore.offsetHeight) {
            readMore.classList.add('read-more-active');
        }
    });

    document.querySelectorAll('.read-more-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            button.closest('.read-more').classList.add('read-more-active');
        });
    });

    const searchInputs = document.querySelectorAll('.main-search .form-control, .round-search-btn');
    const searchClose = document.querySelector('.main-search-close');
    
    if (searchClose) {
        searchClose.addEventListener('click', function() {
            document.body.classList.remove('searchActive');
        });
    }

    function addSearchActiveClass() {
        if (window.innerWidth < 992) {
            document.body.classList.add('searchActive');
        }
    }

    function removeSearchActiveClass() {
        if (window.innerWidth < 992) {
            document.body.classList.remove('searchActive');
        }
    }

    searchInputs.forEach(input => {
        input.addEventListener('focus', addSearchActiveClass);
    });

    // Обновление при изменении размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            document.body.classList.remove('searchActive');
        }
    });

    var favoriteElements = document.querySelectorAll('.addto-favorite');

    favoriteElements.forEach(function(element) {
        element.addEventListener('click', function() {
            this.classList.toggle('addto-favorite-active');
        });
    });

    /*document.querySelector('.headerCityYes').addEventListener('click', function() {
        body.classList.remove('cityActive');
    });*/

    if (document.body.classList.contains('cityActive')) {
        let modalBackdrop = document.createElement('div');
        modalBackdrop.className = 'modal-backdrop-city';
        
        let pageElement = document.querySelector('.page');
        if (pageElement) {
            pageElement.appendChild(modalBackdrop);
        }
    }

    /*const autoCompleteCity = new autoComplete({
        selector: "#autoCompleteCity",
        placeHolder: "Город",
        data: {
            src: ["Абаза", "Абакан", "Абдулино", "Абзаково", "Абинск", "Абрау-Дюрсо", "Авдеевка", "Агидель", "Агрыз", "Адлер", "Адыгейск", "Азнакаево", "Азов", "Ак-Довурак", "Аксай", "Алагир", "Яхрома"],
            cache: true,
        },
        resultsList: {
            element: (list, data) => {
                if (!data.results.length) {
                    const message = document.createElement("div");
                    message.setAttribute("class", "no_result");
                    message.innerHTML = `<span>Ничего не найдено для "${data.query}"</span>`;
                    list.prepend(message);
                }
            },
            noResults: true,
        },
        resultItem: {
            highlight: false
        },
        events: {
            input: {
                selection: (event) => {
                    const selection = event.detail.selection.value;
                    autoCompleteCity.input.value = selection;
                }
            }
        }
    });

    document.querySelector("#autoCompleteCity").addEventListener("selection", function (event) {
        document.querySelector('.autoComplete-in').classList.add('autoComplete-step2');
    });*/

    const streetNames = ["Ленина", "Советская", "Кирова", "Мира", "Московская", "Гагарина", "Пушкина"];

    if (document.getElementById('autoCompleteStreet')){
        const autoCompleteStreet = new autoComplete({
            selector: "#autoCompleteStreet",
            placeHolder: "Улица",
            data: {
                src: streetNames,
                cache: true,
            },
            resultsList: {
                element: (list, data) => {
                    if (!data.results.length) {
                        const message = document.createElement("div");
                        message.setAttribute("class", "no_result");
                        message.innerHTML = `<span>Ничего не найдено для "${data.query}"</span>`;
                        list.prepend(message);
                    }
                },
                noResults: true,
            },
            resultItem: {
                highlight: false
            },
            events: {
                input: {
                    selection: (event) => {
                        const selection = event.detail.selection.value;
                        autoCompleteStreet.input.value = selection;
                    }
                }
            }
        });
    }

    let btnAddAddr = document.querySelector('#modalCity .btnAddAddr');

    if (btnAddAddr) {
        const autoCompleteInput = document.querySelector("#autoCompleteStreet");

        // Обработчик события для выбора
        autoCompleteInput.addEventListener("selection", function (event) {
            btnAddAddr.classList.remove('btn-disabled');
        });

        // Обработчик события для потери фокуса
        autoCompleteInput.addEventListener("blur", function (event) {
            const inputValue = autoCompleteInput.value;
            if (!inputValue || !streetNames.includes(inputValue)) {
                btnAddAddr.classList.add('btn-disabled');
            } else {
                btnAddAddr.classList.remove('btn-disabled');
            }
        });

        btnAddAddr.addEventListener('click', function() {
            // Получаем значение из #autoCompleteStreet
            const streetValue = document.querySelector('#autoCompleteStreet').value;
        
            // Создаем новый элемент label
            const newLabel = document.createElement('label');
            newLabel.className = 'radio radio-select text-sm mb-4';
        
            // Создаем внутренний HTML для нового элемента label
            newLabel.innerHTML = `
                <input type="radio" class="radio-input" name="radio_addr" checked />
                <span class="radio-ico"></span>
                <span><span class="radio-select-caption">${streetValue}</span></span>
            `;
        
            // Добавляем новый элемент label в конец списка
            document.querySelector('#modalAddr .modal-addr-list').appendChild(newLabel);
        });
    }
    
    document.querySelectorAll('.star-rating').forEach(function(element) {
        if (element) {
            var stars = new StarRating(element);
        }
    });

    var starSelects = document.querySelectorAll('.star-rating-small');
    starSelects.forEach(function(starSelect) {
        var stars = new StarRating(starSelect, {
            clearable: false, // делаем так, чтобы нельзя было снять выбор
            maxStars: 5
        });
    });

    var starSelects = document.querySelectorAll('.star-rating-middle');
    starSelects.forEach(function(starSelect) {
        var stars = new StarRating(starSelect, {
            clearable: false, // делаем так, чтобы нельзя было снять выбор
            maxStars: 5
        });
    });

    var date = new Date();
    var nextDate = new Date();
        nextDate = nextDate.setDate(nextDate.getDate() + 1); // Устанавливаем дату на следующий день
        
    // Функция для получения массива дат, исключающих субботы и воскресенья
    function getDisabledDates(startDate, daysToExclude) {
        var disabledDates = [];
        var currentDate = new Date(startDate);

        for (var i = 0; i < 365; i++) { // На год вперед
            var day = currentDate.getDay();
            if (daysToExclude.includes(day)) {
                disabledDates.push(new Date(currentDate));
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return disabledDates;
    }

    var disabledDates = getDisabledDates(date, [0, 6]); 

    document.querySelectorAll('.form-control-datepicker').forEach(function(element) {
        if (element) {
            var datepicker = new Datepicker(element, {
                min: (function(){
                    return date;
                })(),
                //inline: true,
                without: disabledDates,
                fromValue: function(value) {
                    return nextDate;
                },
                onInit: function(element) {
                    
                },
            });
        }
    });

    document.querySelectorAll('.filter-datepicker').forEach(function(element) {
        if (element) {
            var datepicker = new Datepicker(element, {
                inline: true,
                ranged: true,
                without: disabledDates,
                min: (function(){
                    return date;
                })(),
                fromValue: function(value) {
                    return nextDate;
                },
                autoHide: false // Календарь не будет скрываться автоматически
            });
        }
    });
    
    // Инициализируем Datepicker для каждого элемента .radio-datepicker-el
    const datepickerElements = document.querySelectorAll('.radio-datepicker-el');
    datepickerElements.forEach(function(element) {
        new Datepicker(element, {
            inline: true,
            without: disabledDates,
            min: (function(){
                return date;
            })(),
            fromValue: function(value) {
                return nextDate;
            },
            autoHide: false // Календарь не будет скрываться автоматически
        });
    });

    // Получаем все элементы с классом .radio-datepicker
    const radioDatepickers = document.querySelectorAll('.radio-datepicker');

    // Добавляем обработчик события 'click' для каждого элемента
    radioDatepickers.forEach(function(radioDatepicker) {
        radioDatepicker.addEventListener('click', function(event) {
            if (!event.target.closest('.radio-datepicker-el')) {
                // Переходим к родителю с классом .datepicker-wrap
                const datepickerWrap = radioDatepicker.closest('.datepicker-wrap');
                if (datepickerWrap) {
                    // Находим элемент с классом .radio-datepicker-el внутри .datepicker-wrap
                    const datepickerEl = datepickerWrap.querySelector('.radio-datepicker-el');
                    if (datepickerEl) {
                        // Устанавливаем фокус на найденный элемент
                        datepickerEl.focus();
                        // Добавляем класс datepicker-wrapActive
                        datepickerWrap.classList.add('datepicker-wrapActive');
                        // Прокручиваем .modal-content-in так, чтобы .datepicker__wrapper оказался вверху
                        const datepickerWrapper = datepickerEl.closest('.datepicker-wrap');
                        const modalContentIn = datepickerWrap.closest('.modal-content-in');
                        if (datepickerWrapper && modalContentIn) {
                            datepickerWrapper.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                }
            }
        });
    });

    // Получаем все элементы с классом .radio-select, но не .radio-datepicker
    const radioSelects = document.querySelectorAll('.radio-select:not(.radio-datepicker)');

    // Добавляем обработчик события 'click' для каждого элемента
    radioSelects.forEach(function(radioSelect) {
        radioSelect.addEventListener('click', function() {
            // Убираем класс datepicker-wrapActive у всех .datepicker-wrap
            const datepickerWraps = document.querySelectorAll('.datepicker-wrap');
            datepickerWraps.forEach(function(datepickerWrap) {
                datepickerWrap.classList.remove('datepicker-wrapActive');
            });
        });
    });

    document.querySelectorAll('.modal .submit, .form .submit').forEach(function(submitButton) {
        submitButton.addEventListener('click', function() {
            var formValid = true;
            var form = this.closest('.form');
            var formSubmit = form.querySelector('.submit');
            
            if (form){
                form.querySelectorAll('.form-control').forEach(function(input) {
                    var formGroup = input.closest('.form-group');
                    if (input.checkValidity() && !formSubmit.classList.contains('btn-disabled')) {
                        formGroup.classList.add('has-success');
                        formGroup.classList.remove('has-error');
                    } else {
                        formGroup.classList.add('has-error');
                        formGroup.classList.remove('has-success');
                        formValid = false;
                    }
                });
            }
            
            setTimeout(function(){
                form.querySelectorAll('.form-group').forEach(function(input) {
                    if (input.classList.contains('has-error')) {
                        formValid = false;
                    }
                });
                if (formValid) { 
                    // Получаем все элементы с классом .modal
                    const modals = document.querySelectorAll('.modal');
    
                    // Проходимся по всем найденным модальным окнам
                    modals.forEach(function(modalElement) {
                        // Находим элемент с атрибутом data-bs-dismiss="modal" внутри текущего модального окна
                        const dismissButton = modalElement.querySelector('[data-bs-dismiss="modal"]');
                        
                        // Если элемент найден, выполняем по нему клик
                        if (dismissButton) {
                            dismissButton.click();
                        }
                    });
                }
            }, 1000);
            
        });
    });
    
   const phoneInputs = document.querySelectorAll('.form-control-phone');

    if (phoneInputs) {
        phoneInputs.forEach(function(input, index) {
            const iti = window.intlTelInput(input, {
                initialCountry: "lv",
                nationalMode: false, // Отключаем национальный режим
                separateDialCode: true, // Включаем отображение кода страны
                strictMode: true,
                utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.1.0/build/js/utils.js",
                //utilsScript: "/js/utils.js", // just for formatting/placeholders etc
                localizedCountries: { 'lv': 'Латвия' },
                customPlaceholder: function(selectedCountryPlaceholder) {
                    return selectedCountryPlaceholder;
                }
            });

            Inputmask({ "mask": '99 999 999' }).mask(input);
            
            input.addEventListener("countrychange", function (event) {
                
                Inputmask({ "mask": input.placeholder.replace(/\d/g, '9') }).mask(input);
                
                
            });

            // Используем плейсхолдер для установки маски
            //Inputmask({ "mask": '99 999 999' }).mask(input);

            const formGroup = input.closest('.form-group');

            if (formGroup) {
                const form = formGroup.closest('.form'); // Находим родительскую форму

                const submitButton = form.querySelector('.submit'); // Ищем кнопку submit внутри формы

                if (submitButton) {
                    submitButton.addEventListener('click', function() {
                        const isValid = iti.isValidNumber();

                        if (isValid) {
                            formGroup.classList.add('has-success');
                            formGroup.classList.remove('has-error');
                        } else {
                            formGroup.classList.add('has-error');
                            formGroup.classList.remove('has-success');
                        }
                    });
                }
            }
        });
    }
    
    document.querySelectorAll('.form-control-card').forEach(function(element) {
        if (element) {
            Inputmask("9999 9999 9999 9999").mask(element);
        }
    });
    
    document.querySelectorAll('.form-control-dm').forEach(function(element) {
        if (element) {
            Inputmask("99/99").mask(element);
        }
    });
    
    document.querySelectorAll('.form-control-cvv').forEach(function(element) {
        if (element) {
            Inputmask("999").mask(element);
        }
    });

    
    var buttonLook = document.querySelector('.input-look-btn');
    var inputLook = document.querySelector('.input-look-el');
    
    if (buttonLook && inputLook) {
        buttonLook.addEventListener('click', function() {
            var parentLook = this.parentElement;
            parentLook.classList.toggle('input-look-visible');
            
            if (inputLook.type === 'password') {
                inputLook.type = 'text';
            } else {
                inputLook.type = 'password';
            }
        });
    }

    // Находим все элементы с классом 'cabinetBtn'
    const cabinetBtns = document.querySelectorAll('.cabinetBtn');

    // Для каждого найденного элемента 'cabinetBtn'
    cabinetBtns.forEach(function(cabinetBtn) {
        // Добавляем обработчик события 'click'
        cabinetBtn.addEventListener('click', function() {
            // Если ширина окна меньше 992 пикселей
            if (window.innerWidth < 992) {
                // Переключаем класс 'cabinetActive' для элемента 'body'
                document.body.classList.toggle('cabinetActive');
            }
        });
    });

    document.querySelectorAll('.profile-images-li').forEach(function(item) {
        item.addEventListener('click', function() {
            document.querySelectorAll('.profile-images-li').forEach(function(el) {
                el.classList.remove('profile-images-li-active');
            });
            item.classList.add('profile-images-li-active');
        });
    });

    const fileInput = document.querySelector('.profile-images-li-file input[type="file"]');
    if (fileInput) {
        fileInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.querySelector('.profile-images-li-file img');
                    img.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Получаем все элементы с классом 'filter-col'
    var filterCols = document.querySelectorAll('.filter-col');
    
    if (filterCols){
        // Добавляем обработчик события 'click' на каждый элемент
        filterCols.forEach(function(filterCol) {
            filterCol.addEventListener('click', function() {
                // Добавляем класс 'filterColActive' к элементу body
                document.body.classList.toggle('filterColActive');
            });
        });
    }
    

    //document.querySelector('[data-bs-target="#modalCall"]').click();



});




/*==================================================seacrh-overlay================================*/


    const searchInput = document.getElementById('search');
    const searchOverlay = document.getElementById('search-overlay');

    // При клике на кнопку показываем затемнение
    searchInput.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      searchInput.focus(); // фокус на поле
      console.log('++')
    });

    // При клике на оверлей убираем затемнение
    searchOverlay.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
    });

    // Клик по инпуту не закрывает оверлей
    searchInput.addEventListener('click', (e) => {
      e.stopPropagation();
    });

/*===============================================faq===========================================*/
const faqItems = Array.from(document.querySelectorAll('[data-faq-item]'))
const faqItemOpenedClass = 'opened'

faqItems.forEach(faq => {
  const header = faq.querySelector('[data-faq-item-header]')

  header.addEventListener('click', function(){
    faq.classList.toggle(faqItemOpenedClass)
  })
})