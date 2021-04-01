
const root = document.getElementById('root');

// books
    
const books = [
    {
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        description: `
            The story of a life full of passions and doubts, the famous novel Anna Karenina tells the tragedy of a woman under the destructive empire of an adulterous passion. 
            Against the background on which, together with Anna, special characters evolve by their nature, Tolstoy divulges the hypocrisy of the high society, 
            paints the decomposition of the patriarchal way of life and the degradation of the family institution.
        `,
        image: 'https://i.imgur.com/wpggfQv.jpg',
        price: 4.00,
        currency: '£'
    },
    {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        description: `
            Does a superior being have the right to commit a crime if it is for the benefit of all humanity? Here is the question that constantly grinds Raskolnikov, a former idealistic, 
            eccentric and misanthropic student, in the long meditation hours in his cramped attic room. Under the pressure of terrible poverty, loneliness, and the futility of all his aspirations, 
            this bold theory is put into practice overnight, leading to a savage assassination that shakes the entire city of St. Petersburg. Dostoevsky analyzes with the intuition of a fine 
            psychologist the causes of crime, his character's dilemmas, his inner oscillations between good and evil, rational and irrational, the psychology of the killer and the investigator, 
            finally advancing the possibility of salvation through love, humility and self-sacrifice.
        `,
        image: 'https://i.imgur.com/CJkKk7X.jpg',
        price: 5.50,
        currency: '£'
    },
    {
        title: 'Don Quixote of La Mancha',
        author: 'Miguel de Cervantes',
        description: `
            Luck guides our steps better than we could wish, because you have in front of you, friend Sancho Panza, a view that reveals us thirty and better than giants, immeasurably large, 
            with which I intend to fight and I do all partying, and what we take from them as prey may be the clot of our enrichment; that it is a just battle, and it means to serve God if 
            you extinguish their accursed seed from the face of the earth. What giants? said Sancho Panza. Acestia pe care-i vezi, raspunse stapanul sau, acestia cu brate cat toate zilele, 
            ca sunt unii la care masoara cat doua leghe. Notice, Your Enlightenment, returned Sancho Panza, that those who are seen here are not giants, but windmills, and what you take as 
            arms are the wings, which, turned by the wind, move the stones of the mill. It can be seen from there, answered Don Quixote, that you are not very well read when it comes to 
            chivalric adventures; they are huge, and if you are afraid of them, erase them from here and pray, as long as I am included with them in the fierce and right-wing struggle.
        `,
        image: 'https://i.imgur.com/KKbAQiX.jpg',
        price: 8.00,
        currency: '£'
    },
    {
        title: 'The Brothers Karamazov',
        author: 'Fyodor Dostoevsky',
        description: `
            The Brothers Karamazov, Dostoevsky's last and most complex novel, is at once the masterfully written story of a paricide and a philosophical meditation on the essential questions of humanity: 
            the existence of God, free will, the collective nature of guilt and the disastrous consequences. of rationalism. Incarnating four fundamental hypostases of the individual, 
            the Karamazov brothers each have well-founded reasons, albeit of different natures, to kill their father, the landowner Fyodor Pavlovich Karamazov, who leads an amoral and debauched life. 
            His unexpected death casts suspicion on all four brothers and gives rise to numerous theories, Dostoevsky exploiting with remarkable ability the police vein of the story.
        `,
        image: 'https://i.imgur.com/N9wnj8D.jpg',
        price: 3.50,
        currency: '£'
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: `
            A young man fascinated by the American dream, newly arrived in New York and wishing success, Nick Carraway, shares the story of James Gatz's transformation into Jay Gatsby. 
            Against the background of a prosperous but chaotic America, Gatz, driven by the mirage of love for Daisy Buchanan, changes his life, becoming a student at Oxford gangster, alcoholic trafficker and then millionaire. 
            But his love for Daisy does not come true; remains the Don Quixote story of the Great Gatsby, unfolding with an illusory, endless American dream.
        `,
        image: 'https://i.imgur.com/GOMxcp3.jpg',
        price: 4.00,
        currency: '£'
    },
    {
        title: 'The Idiot',
        author: 'Fyodor Dostoevsky',
        description: `
            The young Prince Miskin, just arrived from the sanatorium, rediscovers a perterburg society in full decline. He falls in love, receives an inheritance, helps his so-called friends, 
            is frightened by their greed and is indignant at the lack of humanity. The Idiot is the novel of a perpetual surprise, of the indecision and of the convulsive reaction of the human 
            being towards the deeds of a violent society which, in the absence of reason, is guided by instincts and passions.
        `,
        image: 'https://i.imgur.com/UGgtZr1.jpg',
        price: 6.75,
        currency: '£'
    },
    {
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        description: `
            Basil Hallward one day paints a disturbing portrait of Dorian Gray. It's just that, with the passage of time, the young man in the painting ages, while his model, Dorian, remains unchanged. 
            Every deed, every past year leaves another mark on the painted face, without this detail being known by the others; only its creator, Basil Hallward, knows, and for that he is killed by Dorian Gray. 
            The latter will also reach the fatal confrontation with his painted reflection and will end up, aged without news, the mysterious victim of the image in the painting he cherished so much.
        `,
        image: 'https://i.imgur.com/TLhPmf4.jpg',
        price: 6.50,
        currency: '£'
    },
    {
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        description: `
            Rostov got up and started to wander among the fires and dream of the happiness of dying, of dying without caring about life, simply of dying under the eyes of the emperor. 
            He was indeed in love with the tsar, with the glory of Russian weapons, and with his hope in the victory to come. And he was not the only one to experience this feeling in 
            the memorable days before the battle of Austerlitz; In the Russian army, nine out of ten people were in love at the time, though perhaps less madly than Rostov, with their tsar and the glory of Russian weapons.
        `,
        image: 'https://i.imgur.com/2E3vFOx.jpg',
        price: 12.50,
        currency: '£'
    }
];

let book;

window.addEventListener('load', () => {
    root.innerHTML = `
        <nav class="container">
            <div id="navigation">
                <div id="toggle-div">
                    <button id="menu-toggle"><ion-icon name="menu-sharp" size="large"></ion-icon></button>
                </div>
            </div>
            <ul>
                <li><a href="" id="home">Home</a></li>
                <li><a href="" id="favorite-button">Favorites</a></li>
                <li><a href="" id="basket-button">Basket</a></li>
            </ul>
        </nav>

        <section id="header"></section>

        <div class="container" id="filters">
            <select id="my-select">
                <option value="" disabled selected hidden>Sort by:</option>
                <option value="option-name-atoz">Name, A to Z</option>
                <option value="option-name-ztoa">Name, Z to A</option>
                <option value="option-author-atoz">Author, A to Z</option>
                <option value="option-author-ztoa">Author, Z to A</option>
            </select>
        </div>

        <section class="container" id="products-page">
            <div class="" id="products"></div>
            <div class="name-atoz" id="div-name-atoz"></div>
            <div class="name-ztoa" id="div-name-ztoa"></div>
            <div class="author-atoz" id="div-author-atoz"></div>
            <div class="author-ztoa" id="div-author-ztoa"></div>       
        </section>

        <section class="container favorites-section">
            <h2>Favorites</h2>
        </section>

        <section class="container basket-section">
            <h2>Basket</h2>
            <p id="total">0</p>
        </section>
    `;

    const mySelects = document.getElementById('my-select');
    const divNameAtoZ = document.getElementById('div-name-atoz');
    const divNameZtoA = document.getElementById('div-name-ztoa');
    const divAuthorAtoZ = document.getElementById('div-author-atoz');
    const divAuthorZtoA = document.getElementById('div-author-ztoa');
    let product = document.getElementsByClassName('product');
    let nameAtoZ = document.querySelector('.name-atoz');
    let nameZtoA = document.querySelector('.name-ztoa');
    let authorAtoZ = document.querySelector('.author-atoz');
    let authorZtoA = document.querySelector('.author-ztoa');
    const nav = document.querySelector('nav');

    
    const sectionProducts = document.getElementById('products');

    for (let i = 0; i < books.length; i++) {
        book = books[i];

        sectionProducts.innerHTML += `
            <div class="product">
                <div class="favorite-div">
                    <ion-icon name="heart" class="favorites"></ion-icon>              
                </div>
                <img src="` + book.image + `">
                <h3 class="title">` + book.title + `<h3>
                <h5 class="author">` + book.author + `</h5>
                <p class="description">` + book.description + `</p>
                <div>
                    <p>` + books[i].currency + `</p>
                    <p id="product-price">` + books[i].price + `</p>
                    <!-- <p>Quantity</p>
                    <button id="increase">+</button>
                    <p id="pieces">0</p>
                    <button id="decrease">-</button> -->           
                </div>
                <button class="adds-basket">Add to basket</button>        
            </div>
        `;
    }

    const home = document.getElementById('home');
    const favoriteButton = document.getElementById('favorite-button');
    const basketButton = document.getElementById('basket-button');
    const header = document.getElementById('header');
    const filters = document.getElementById('filters');
    let favoritesSection = document.querySelector('.favorites-section');
    let basketsSection = document.querySelector('.basket-section');


    home.addEventListener('click', () => {

        header.classList.remove('unseen');
        sectionProducts.classList.remove('unseen');
        nav.classList.add('seen');
        header.classList.add('seen');
        sectionProducts.style.display = 'flex';
    });

    favoriteButton.addEventListener('click', (event) => {
        event.preventDefault();

        favoritesSection.style.display = 'block';
        basketsSection.style.display = 'none';
        sectionProducts.style.display = 'none';
        favoritesSection.classList.add('seen');
        nav.classList.add('seen');
        header.classList.add('unseen');
        sectionProducts.classList.add('unseen');
        filters.style.display = 'none';
        nameAtoZ.style.display = 'none';
        nameZtoA.style.display = 'none';
        authorAtoZ.style.display = 'none';
        authorZtoA.style.display = 'none';
    });

    let favorites = document.querySelectorAll('.favorites');

        for (let i = 0; i < favorites.length; i++) {
            let favorite = favorites[i];
    
            favorite.addEventListener('click', (event) => {
                event.preventDefault();
    
                
    
                if (favoritesSection.innerHTML.indexOf(books[i].title) != -1) {
                    console.log('este');
                } else {
                    console.log('adaugat');
    
                    favoritesSection.innerHTML += `
                        <div>
                            <ion-icon name="close-outline" id="delete"></ion-icon>
                            <h3>` + books[i].title + `<h3>
                        </div>
                    `;
    
                    let deleteButtons = document.querySelectorAll('#delete');
    
                    for (let i = 0; i < deleteButtons.length; i++) {
                        let deleteButton = deleteButtons[i];
    
                        deleteButton.addEventListener('click', (event) => {
    
                            let element = event.target;
                            let elementListItem = element.parentNode;
                            elementFullList = elementListItem.parentNode;
                            elementFullList.removeChild(elementListItem);
                        });
                    }
                }
    
            });
        }

    let addsBasket = document.querySelectorAll('.adds-basket');

    for (let i = 0; i < addsBasket.length; i++) {
        let addBasket = addsBasket[i];

        addBasket.addEventListener('click', (event) => {
            event.preventDefault();
            


            if (basketsSection.innerHTML.indexOf(books[i].title) != -1) {
                console.log('este in basket');
            } else {
                console.log('adaugat in basket');

                basketsSection.innerHTML += `
                    <div>
                        <ion-icon name="close-outline" id="delete"></ion-icon>
                        <h3>` + books[i].title + `</h3>
                        <div>
                            <p>` + books[i].currency + `</p>
                            <p id="product-price">` + books[i].price + `</p>
                            <p>Quantity</p>
                            <button id="increase-basket">+</button>
                            <p id="pieces-basket">1</p>
                            <button id="decrease-basket">-</button>   
                        </div>
                    </div>
                `;

                let totalResult = document.querySelector('#total');
                console.log(totalResult);
                totalResult.innerHTML = Number(totalResult.innerHTML) + Number(books[i].price);

                let increaseBaskets = document.querySelectorAll('#increase-basket');
                let decreaseBaskets = document.querySelectorAll('#decrease-basket');

                for (let i = 0; i < increaseBaskets.length; i++) {
                    let increaseBasket = increaseBaskets[i];

                    increaseBasket.addEventListener('click', (event) => {
                        let element = event.target;
                        let elementListItem = element.parentNode;
                        console.log(elementListItem);

                        let pieceBasket = elementListItem.querySelector('#pieces-basket');
                        let piecesBasket = pieceBasket.innerHTML;
                        piecesBasket++;

                        console.log(pieceBasket);
                        console.log(piecesBasket);

                        pieceBasket.innerHTML = piecesBasket;

                        let productPrice =  elementListItem.querySelector('#product-price');

                        totalResult.innerHTML = Number(totalResult.innerHTML) + Number(productPrice.innerHTML);
                    });
                }

                for (let i = 0; i < decreaseBaskets.length; i++) {
                    let decreaseBasket = decreaseBaskets[i];

                    decreaseBasket.addEventListener('click', (event) => {
                        let element = event.target;
                        let elementListItem = element.parentNode;
                        let pieceBasket = elementListItem.querySelector('#pieces-basket');
                        let piecesBasket = pieceBasket.innerHTML;
                        piecesBasket--;

                        if (piecesBasket >= 1) {
                            pieceBasket.innerHTML = piecesBasket;

                            let productPrice =  elementListItem.querySelector('#product-price');

                            totalResult.innerHTML = Number(totalResult.innerHTML) - Number(productPrice.innerHTML);
                        } else {
                            pieceBasket.innerHTML = '1';
                        }
                    });
                }

                let deleteButtons = document.querySelectorAll('#delete');
    
                    for (let i = 0; i < deleteButtons.length; i++) {
                        let deleteButton = deleteButtons[i];
    
                        deleteButton.addEventListener('click', (event) => {
    
                            let element = event.target;
                            let elementListItem = element.parentNode;
                            console.log(elementListItem);
                            elementFullList = elementListItem.parentNode;
                            elementFullList.removeChild(elementListItem);

                            let productPrice = elementListItem.querySelector('#product-price');

                            console.log(totalResult);
                            console.log(productPrice);

                            let pieceBasket = elementListItem.querySelector('#pieces-basket');

                            totalResult.innerHTML = Number(totalResult.innerHTML) - (Number(productPrice.innerHTML) * Number(pieceBasket.innerHTML));

                        });
                    }

                
            }

            
        });
    }

    basketButton.addEventListener('click', (event) => {
        event.preventDefault();

        basketsSection.style.display = 'block';
        favoritesSection.style.display = 'none';
        sectionProducts.style.display = 'none';
        basketsSection.classList.add('seen');
        nav.classList.add('seen');
        favoritesSection.classList.add('unseen');
        header.classList.add('unseen');
        sectionProducts.classList.add('unseen');
        filters.style.display = 'none';
        nameAtoZ.style.display = 'none';
        nameZtoA.style.display = 'none';
        authorAtoZ.style.display = 'none';
        authorZtoA.style.display = 'none';

        
    });

    // FILTER OPTIONS
    
    mySelects.addEventListener('change', (event) => {
        if (event.target.value === 'option-name-atoz') {
            for (let i = 0; i < books.length; i++) {
                if (divNameAtoZ.innerHTML.indexOf(books[i].title) != -1) {
                    nameAtoZ.style.display = 'flex';
    
                    for (let i =0; i < product.length; i++) {
                        let products = product[i];
                        products.style.display = 'none';
                    }
    
                    nameZtoA.style.display = 'none';
                    authorAtoZ.style.display = 'none';
                    authorZtoA.style.display = 'none';
                } else {
                    books.sort((a, b) => {
                        let titleA = a.title.toLowerCase();
                        let titleB = b.title.toLowerCase();
    
                        if (titleA < titleB) {
                            return -1;
                        } else if (titleA > titleB) {
                            return 1;
                        } else {
                            return 0;
                        }
                    });
    
                    for (let i = 0; i < books.length; i++) {
                        book = books[i];
                        divNameAtoZ.innerHTML += `
                            <div class="atoz">
                                <div class="favorite-div">
                                    <ion-icon name="heart" class="favorites-atoz"></ion-icon>              
                                </div>
                                <img src="` + book.image + `">
                                <h3 class="title">` + book.title + `<h3>
                                <h5 class="author">` + book.author + `</h5>
                                <p class="description">` + book.description + `</p>
                                <p>` + book.currency + `</p>
                                <p id="product-price">` + book.price + `</p>
                                <button class="basket-atoz">Add to basket</button>   
                            </div>
                        `;

                        console.log(books[0].title);

                            let favoritesAtoZ = document.querySelectorAll('.favorites-atoz');

                            for (let i = 0; i < favoritesAtoZ.length; i++) {
                                let favoriteAtoZ = favoritesAtoZ[i];
                        
                                favoriteAtoZ.addEventListener('click', (event) => {
                                    event.preventDefault();
                        
                                    
                        
                                    if (favoritesSection.innerHTML.indexOf(books[i].title) != -1) {
                                        console.log('este din titleAtoZ');
                                    } else {
                                        console.log('adaugat din titleAtoZ');
                        
                                        favoritesSection.innerHTML += `
                                            <div>
                                                <ion-icon name="close-outline" id="delete"></ion-icon>
                                                <h3>` + books[i].title + `<h3>
                                            </div>
                                        `;
                        
                                        let deleteButtons = document.querySelectorAll('#delete');
                        
                                        for (let i = 0; i < deleteButtons.length; i++) {
                                            let deleteButton = deleteButtons[i];
                        
                                            deleteButton.addEventListener('click', (event) => {
                        
                                                let element = event.target;
                                                let elementListItem = element.parentNode;
                                                elementFullList = elementListItem.parentNode;
                                                elementFullList.removeChild(elementListItem);
                                            });
                                        }
                                    }
                        
                                });
                            }


                            let basketAtoz = document.querySelectorAll('.basket-atoz');
    
                            for (let i = 0; i < basketAtoz.length; i++) {
                                let basketAtozs = basketAtoz[i];
    
                                basketAtozs.addEventListener('click', (event) => {
                                    event.preventDefault();
    
                                        
                                    if (basketsSection.innerHTML.indexOf(books[i].title) != -1) {
                                        console.log('este in basket');
                                    } else {
                                        console.log('adaugat in basket');
    
                                        basketsSection.innerHTML += `
                                            <div>
                                                <ion-icon name="close-outline" id="delete"></ion-icon>
                                                <h3>` + books[i].title + `</h3>
                                                <div>
                                                    <p>` + books[i].currency + `</p>
                                                    <p id="product-price">` + books[i].price + `</p>
                                                    <p>Quantity</p>
                                                    <button id="increase-basket">+</button>
                                                    <p id="pieces-basket">1</p>
                                                    <button id="decrease-basket">-</button>   
                                                </div>
                                            </div>
                                        `;
    
                                        let totalResult = document.querySelector('#total');
                                        console.log(totalResult);
                                        totalResult.innerHTML = Number(totalResult.innerHTML) + Number(books[i].price);
    
                                        let increaseBaskets = document.querySelectorAll('#increase-basket');
                                        let decreaseBaskets = document.querySelectorAll('#decrease-basket');
    
                                        for (let i = 0; i < increaseBaskets.length; i++) {
                                            let increaseBasket = increaseBaskets[i];

                                            increaseBasket.addEventListener('click', (event) => {
                                                let element = event.target;
                                                let elementListItem = element.parentNode;
                                                console.log(elementListItem);
    
                                                let pieceBasket = elementListItem.querySelector('#pieces-basket');
                                                let piecesBasket = pieceBasket.innerHTML;
                                                piecesBasket++;
    
                                                console.log(pieceBasket);
                                                console.log(piecesBasket);
    
                                                pieceBasket.innerHTML = piecesBasket;
    
                                                let productPrice =  elementListItem.querySelector('#product-price');
    
                                                totalResult.innerHTML = Number(totalResult.innerHTML) + Number(productPrice.innerHTML);
                                            });
                                        }
    
                                        for (let i = 0; i < decreaseBaskets.length; i++) {
                                            let decreaseBasket = decreaseBaskets[i];
    
                                            decreaseBasket.addEventListener('click', (event) => {
                                                let element = event.target;
                                                let elementListItem = element.parentNode;
                                                let pieceBasket = elementListItem.querySelector('#pieces-basket');
                                                let piecesBasket = pieceBasket.innerHTML;
                                                piecesBasket--;
    
                                                if (piecesBasket >= 1) {
                                                    pieceBasket.innerHTML = piecesBasket;
    
                                                    let productPrice =  elementListItem.querySelector('#product-price');
    
                                                    totalResult.innerHTML = Number(totalResult.innerHTML) - Number(productPrice.innerHTML);
                                                } else {
                                                    pieceBasket.innerHTML = '1';
                                                }
                                            });
                                        }
    
                                        let deleteButtons = document.querySelectorAll('#delete');
                                
                                            for (let i = 0; i < deleteButtons.length; i++) {
                                                let deleteButton = deleteButtons[i];
                                
                                                deleteButton.addEventListener('click', (event) => {
                                
                                                    let element = event.target;
                                                    let elementListItem = element.parentNode;
                                                    console.log(elementListItem);
                                                    elementFullList = elementListItem.parentNode;
                                                    elementFullList.removeChild(elementListItem);
    
                                                    let productPrice = elementListItem.querySelector('#product-price');
    
                                                    console.log(totalResult);
                                                    console.log(productPrice);
    
                                                    let pieceBasket = elementListItem.querySelector('#pieces-basket');
    
                                                    totalResult.innerHTML = Number(totalResult.innerHTML) - (Number(productPrice.innerHTML) * Number(pieceBasket.innerHTML));
    
                                                });
                                            }
    
                                            
                                    }
                                                                               
                                });
                            }

                    }
    
                    nameAtoZ.style.display = 'flex';
    
                    for (let i =0; i < product.length; i++) {
                        let products = product[i];
                        products.style.display = 'none';
                    }
    
                    nameZtoA.style.display = 'none';
                    authorAtoZ.style.display = 'none';
                    authorZtoA.style.display = 'none';
                }
            }
        } else if (event.target.value === 'option-name-ztoa') {
            for (let i = 0; i < books.length; i++) {
                if (divNameZtoA.innerHTML.indexOf(books[i].title) != -1) {
                    nameZtoA.style.display = 'flex';
    
                    for (let i =0; i < product.length; i++) {
                        let products = product[i];
                        products.style.display = 'none';
                    }
    
                    nameAtoZ.style.display = 'none';
                    authorAtoZ.style.display = 'none';
                    authorZtoA.style.display = 'none';
                } else {
                    books.sort((a, b) => {
                        let titleA = a.title.toLowerCase();
                        let titleB = b.title.toLowerCase();
    
                        if (titleA < titleB) {
                            return 1;
                        } else if (titleA > titleB) {
                            return -1;
                        } else {
                            return 0;
                        }
                    });
    
                    for (let i = 0; i < books.length; i++) {
                        book = books[i];
                        divNameZtoA.innerHTML += `
                            <div class="ztoa">
                                <div class="favorite-div">
                                    <ion-icon name="heart" class="favorites-ztoa"></ion-icon>              
                                </div>
                                <img src="` + book.image + `">
                                <h3 class="title">` + book.title + `<h3>
                                <h5 class="author">` + book.author + `</h5>
                                <p class="description">` + book.description + `</p>
                                <p>` + book.currency + `</p>
                                <p id="product-price">` + book.price + `</p>
                                <button class="basket-ztoa">Add to basket</button>     
                            </div>
                        `;

                        let favoritesZtoA = document.querySelectorAll('.favorites-ztoa');

                            for (let i = 0; i < favoritesZtoA.length; i++) {
                                let favoriteZtoA = favoritesZtoA[i];
                        
                                favoriteZtoA.addEventListener('click', (event) => {
                                    event.preventDefault();
                                              
                                    if (favoritesSection.innerHTML.indexOf(books[i].title) != -1) {
                                        console.log('este din titleZtoA');
                                    } else {
                                        console.log('adaugat din titleZtoA');
                        
                                        favoritesSection.innerHTML += `
                                            <div>
                                                <ion-icon name="close-outline" id="delete"></ion-icon>
                                                <h3>` + books[i].title + `<h3>
                                            </div>
                                        `;
                        
                                        let deleteButtons = document.querySelectorAll('#delete');
                        
                                        for (let i = 0; i < deleteButtons.length; i++) {
                                            let deleteButton = deleteButtons[i];
                        
                                            deleteButton.addEventListener('click', (event) => {
                        
                                                let element = event.target;
                                                let elementListItem = element.parentNode;
                                                elementFullList = elementListItem.parentNode;
                                                elementFullList.removeChild(elementListItem);
                                            });
                                        }
                                    }
                        
                                });
                            }

                            let basketZtoa = document.querySelectorAll('.basket-ztoa');
    
                            for (let i = 0; i < basketZtoa.length; i++) {
                                let basketZtoas = basketZtoa[i];
    
                                basketZtoas.addEventListener('click', (event) => {
                                    event.preventDefault();
    
                                        
                                    if (basketsSection.innerHTML.indexOf(books[i].title) != -1) {
                                        console.log('este in basket');
                                    } else {
                                        console.log('adaugat in basket');
    
                                        basketsSection.innerHTML += `
                                            <div>
                                                <ion-icon name="close-outline" id="delete"></ion-icon>
                                                <h3>` + books[i].title + `</h3>
                                                <div>
                                                    <p>` + books[i].currency + `</p>
                                                    <p id="product-price">` + books[i].price + `</p>
                                                    <p>Quantity</p>
                                                    <button id="increase-basket">+</button>
                                                    <p id="pieces-basket">1</p>
                                                    <button id="decrease-basket">-</button>   
                                                </div>
                                            </div>
                                        `;
    
                                        let totalResult = document.querySelector('#total');
                                        console.log(totalResult);
                                        totalResult.innerHTML = Number(totalResult.innerHTML) + Number(books[i].price);
    
                                        let increaseBaskets = document.querySelectorAll('#increase-basket');
                                        let decreaseBaskets = document.querySelectorAll('#decrease-basket');
    
                                        for (let i = 0; i < increaseBaskets.length; i++) {
                                            let increaseBasket = increaseBaskets[i];

                                            increaseBasket.addEventListener('click', (event) => {
                                                let element = event.target;
                                                let elementListItem = element.parentNode;
                                                console.log(elementListItem);
    
                                                let pieceBasket = elementListItem.querySelector('#pieces-basket');
                                                let piecesBasket = pieceBasket.innerHTML;
                                                piecesBasket++;
    
                                                console.log(pieceBasket);
                                                console.log(piecesBasket);
    
                                                pieceBasket.innerHTML = piecesBasket;
    
                                                let productPrice =  elementListItem.querySelector('#product-price');
    
                                                totalResult.innerHTML = Number(totalResult.innerHTML) + Number(productPrice.innerHTML);
                                            });
                                        }
    
                                        for (let i = 0; i < decreaseBaskets.length; i++) {
                                            let decreaseBasket = decreaseBaskets[i];
    
                                            decreaseBasket.addEventListener('click', (event) => {
                                                let element = event.target;
                                                let elementListItem = element.parentNode;
                                                let pieceBasket = elementListItem.querySelector('#pieces-basket');
                                                let piecesBasket = pieceBasket.innerHTML;
                                                piecesBasket--;
    
                                                if (piecesBasket >= 1) {
                                                    pieceBasket.innerHTML = piecesBasket;
    
                                                    let productPrice =  elementListItem.querySelector('#product-price');
    
                                                    totalResult.innerHTML = Number(totalResult.innerHTML) - Number(productPrice.innerHTML);
                                                } else {
                                                    pieceBasket.innerHTML = '1';
                                                }
                                            });
                                        }
    
                                        let deleteButtons = document.querySelectorAll('#delete');
                                
                                            for (let i = 0; i < deleteButtons.length; i++) {
                                                let deleteButton = deleteButtons[i];
                                
                                                deleteButton.addEventListener('click', (event) => {
                                
                                                    let element = event.target;
                                                    let elementListItem = element.parentNode;
                                                    console.log(elementListItem);
                                                    elementFullList = elementListItem.parentNode;
                                                    elementFullList.removeChild(elementListItem);
    
                                                    let productPrice = elementListItem.querySelector('#product-price');
    
                                                    console.log(totalResult);
                                                    console.log(productPrice);
    
                                                    let pieceBasket = elementListItem.querySelector('#pieces-basket');
    
                                                    totalResult.innerHTML = Number(totalResult.innerHTML) - (Number(productPrice.innerHTML) * Number(pieceBasket.innerHTML));
    
                                                });
                                            }
    
                                            
                                    }
                                                                               
                                });
                            }
                    }
    
                    nameZtoA.style.display = 'flex';
    
                    for (let i =0; i < product.length; i++) {
                        let products = product[i];
                        products.style.display = 'none';
                    }
    
                    nameAtoZ.style.display = 'none';
                    authorAtoZ.style.display = 'none';
                    authorZtoA.style.display = 'none';
                }
            }
        } else if (event.target.value === 'option-author-atoz') {
            for (let i = 0; i < books.length; i++) {
                if (divAuthorAtoZ.innerHTML.indexOf(books[i].author) != -1) {
                    authorAtoZ.style.display = 'flex';
    
                    for (let i =0; i < product.length; i++) {
                        let products = product[i];
                        products.style.display = 'none';
                    }
    
                    nameAtoZ.style.display = 'none';
                    nameZtoA.style.display = 'none';
                    authorZtoA.style.display = 'none';
                } else {
                    books.sort((a, b) => {
                        let authorA = a.author.toLowerCase();
                        let authorB = b.author.toLowerCase();
    
                        if (authorA < authorB) {
                            return -1;
                        } else if (authorA > authorB) {
                            return 1;
                        } else {
                            return 0;
                        }
                    });
    
                    for (let i = 0; i < books.length; i++) {
                        book = books[i];
                        divAuthorAtoZ.innerHTML += `
                            <div class="atoz-author">
                                <div class="favorite-div">
                                    <ion-icon name="heart" class="favorites-author-atoz"></ion-icon>              
                                </div>
                                <img src="` + book.image + `">
                                <h3 class="title">` + book.title + `<h3>
                                <h5 class="author">` + book.author + `</h5>
                                <p class="description">` + book.description + `</p>
                                <p>` + book.currency + `</p>
                                <p id="product-price">` + book.price + `</p>
                                <button class="basket-author-atoz">Add to basket</button>      
                            </div>
                        `;

                        let favoritesAuthorAtoZ = document.querySelectorAll('.favorites-author-atoz');

                            for (let i = 0; i < favoritesAuthorAtoZ.length; i++) {
                                let favoriteAuthorAtoZ = favoritesAuthorAtoZ[i];
                        
                                favoriteAuthorAtoZ.addEventListener('click', (event) => {
                                    event.preventDefault();
                                              
                                    if (favoritesSection.innerHTML.indexOf(books[i].title) != -1) {
                                        console.log('este din authorAtoZ');
                                    } else {
                                        console.log('adaugat din authorAtoZ');
                        
                                        favoritesSection.innerHTML += `
                                            <div>
                                                <ion-icon name="close-outline" id="delete"></ion-icon>
                                                <h3>` + books[i].title + `<h3>
                                            </div>
                                        `;
                        
                                        let deleteButtons = document.querySelectorAll('#delete');
                        
                                        for (let i = 0; i < deleteButtons.length; i++) {
                                            let deleteButton = deleteButtons[i];
                        
                                            deleteButton.addEventListener('click', (event) => {
                        
                                                let element = event.target;
                                                let elementListItem = element.parentNode;
                                                elementFullList = elementListItem.parentNode;
                                                elementFullList.removeChild(elementListItem);
                                            });
                                        }
                                    }
                        
                                });
                            }

                            let basketAuthorAtoz = document.querySelectorAll('.basket-author-atoz');
    
                            for (let i = 0; i < basketAuthorAtoz.length; i++) {
                                let basketAuthorAtozs = basketAuthorAtoz[i];
    
                                basketAuthorAtozs.addEventListener('click', (event) => {
                                    event.preventDefault();
    
                                        
                                    if (basketsSection.innerHTML.indexOf(books[i].title) != -1) {
                                        console.log('este in basket');
                                    } else {
                                        console.log('adaugat in basket');
    
                                        basketsSection.innerHTML += `
                                            <div>
                                                <ion-icon name="close-outline" id="delete"></ion-icon>
                                                <h3>` + books[i].title + `</h3>
                                                <div>
                                                    <p>` + books[i].currency + `</p>
                                                    <p id="product-price">` + books[i].price + `</p>
                                                    <p>Quantity</p>
                                                    <button id="increase-basket">+</button>
                                                    <p id="pieces-basket">1</p>
                                                    <button id="decrease-basket">-</button>   
                                                </div>
                                            </div>
                                        `;
    
                                        let totalResult = document.querySelector('#total');
                                        console.log(totalResult);
                                        totalResult.innerHTML = Number(totalResult.innerHTML) + Number(books[i].price);
    
                                        let increaseBaskets = document.querySelectorAll('#increase-basket');
                                        let decreaseBaskets = document.querySelectorAll('#decrease-basket');
    
                                        for (let i = 0; i < increaseBaskets.length; i++) {
                                            let increaseBasket = increaseBaskets[i];

                                            increaseBasket.addEventListener('click', (event) => {
                                                let element = event.target;
                                                let elementListItem = element.parentNode;
                                                console.log(elementListItem);
    
                                                let pieceBasket = elementListItem.querySelector('#pieces-basket');
                                                let piecesBasket = pieceBasket.innerHTML;
                                                piecesBasket++;
    
                                                console.log(pieceBasket);
                                                console.log(piecesBasket);
    
                                                pieceBasket.innerHTML = piecesBasket;
    
                                                let productPrice =  elementListItem.querySelector('#product-price');
    
                                                totalResult.innerHTML = Number(totalResult.innerHTML) + Number(productPrice.innerHTML);
                                            });
                                        }
    
                                        for (let i = 0; i < decreaseBaskets.length; i++) {
                                            let decreaseBasket = decreaseBaskets[i];
    
                                            decreaseBasket.addEventListener('click', (event) => {
                                                let element = event.target;
                                                let elementListItem = element.parentNode;
                                                let pieceBasket = elementListItem.querySelector('#pieces-basket');
                                                let piecesBasket = pieceBasket.innerHTML;
                                                piecesBasket--;
    
                                                if (piecesBasket >= 1) {
                                                    pieceBasket.innerHTML = piecesBasket;
    
                                                    let productPrice =  elementListItem.querySelector('#product-price');
    
                                                    totalResult.innerHTML = Number(totalResult.innerHTML) - Number(productPrice.innerHTML);
                                                } else {
                                                    pieceBasket.innerHTML = '1';
                                                }
                                            });
                                        }
    
                                        let deleteButtons = document.querySelectorAll('#delete');
                                
                                            for (let i = 0; i < deleteButtons.length; i++) {
                                                let deleteButton = deleteButtons[i];
                                
                                                deleteButton.addEventListener('click', (event) => {
                                
                                                    let element = event.target;
                                                    let elementListItem = element.parentNode;
                                                    console.log(elementListItem);
                                                    elementFullList = elementListItem.parentNode;
                                                    elementFullList.removeChild(elementListItem);
    
                                                    let productPrice = elementListItem.querySelector('#product-price');
    
                                                    console.log(totalResult);
                                                    console.log(productPrice);
    
                                                    let pieceBasket = elementListItem.querySelector('#pieces-basket');
    
                                                    totalResult.innerHTML = Number(totalResult.innerHTML) - (Number(productPrice.innerHTML) * Number(pieceBasket.innerHTML));
    
                                                });
                                            }
    
                                            
                                    }
                                                                               
                                });
                            }
                    }
    
                    authorAtoZ.style.display = 'flex';
    
                    for (let i =0; i < product.length; i++) {
                        let products = product[i];
                        products.style.display = 'none';
                    }
    
                    nameAtoZ.style.display = 'none';
                    nameZtoA.style.display = 'none';
                    authorZtoA.style.display = 'none';
                }
            }
        } else {
            for (let i = 0; i < books.length; i++) {
                if (divAuthorZtoA.innerHTML.indexOf(books[i].author) != -1) {
                    authorZtoA.style.display = 'flex';
    
                    for (let i =0; i < product.length; i++) {
                        let products = product[i];
                        products.style.display = 'none';
                    }
    
                    nameAtoZ.style.display = 'none';
                    nameZtoA.style.display = 'none';
                    authorAtoZ.style.display = 'none';
                } else {
                    books.sort((a, b) => {
                        let authorA = a.author.toLowerCase();
                        let authorB = b.author.toLowerCase();
    
                        if (authorA < authorB) {
                            return 1;
                        } else if (authorA > authorB) {
                            return -1;
                        } else {
                            return 0;
                        }
                    });
    
                    for (let i = 0; i < books.length; i++) {
                        book = books[i];
                        divAuthorZtoA.innerHTML += `
                            <div class="ztoa-author">
                                <div class="favorite-div">
                                    <ion-icon name="heart" class="favorites-author-ztoa"></ion-icon>              
                                </div>
                                <img src="` + book.image + `">
                                <h3 class="title">` + book.title + `<h3>
                                <h5 class="author">` + book.author + `</h5>
                                <p class="description">` + book.description + `</p>
                                <p>` + book.currency + `</p>
                                <p id="product-price">` + book.price + `</p>
                                <button class="basket-author-ztoa">Add to basket</button>      
                            </div>
                        `;

                        let favoritesAuthorZtoA = document.querySelectorAll('.favorites-author-ztoa');

                            for (let i = 0; i < favoritesAuthorZtoA.length; i++) {
                                let favoriteAuthorZtoA = favoritesAuthorZtoA[i];
                        
                                favoriteAuthorZtoA.addEventListener('click', (event) => {
                                    event.preventDefault();
                                              
                                    if (favoritesSection.innerHTML.indexOf(books[i].title) != -1) {
                                        console.log('este din authorZtoA');
                                    } else {
                                        console.log('adaugat din authorZtoA');
                        
                                        favoritesSection.innerHTML += `
                                            <div>
                                                <ion-icon name="close-outline" id="delete"></ion-icon>
                                                <h3>` + books[i].title + `<h3>
                                            </div>
                                        `;
                        
                                        let deleteButtons = document.querySelectorAll('#delete');
                        
                                        for (let i = 0; i < deleteButtons.length; i++) {
                                            let deleteButton = deleteButtons[i];
                        
                                            deleteButton.addEventListener('click', (event) => {
                        
                                                let element = event.target;
                                                let elementListItem = element.parentNode;
                                                elementFullList = elementListItem.parentNode;
                                                elementFullList.removeChild(elementListItem);
                                            });
                                        }
                                    }
                        
                                });
                            }

                            let basketAuthorZtoa = document.querySelectorAll('.basket-author-ztoa');
    
                            for (let i = 0; i < basketAuthorZtoa.length; i++) {
                                let basketAuthorZtoas = basketAuthorZtoa[i];
    
                                basketAuthorZtoas.addEventListener('click', (event) => {
                                    event.preventDefault();
    
                                        
                                    if (basketsSection.innerHTML.indexOf(books[i].title) != -1) {
                                        console.log('este in basket');
                                    } else {
                                        console.log('adaugat in basket');
    
                                        basketsSection.innerHTML += `
                                            <div>
                                                <ion-icon name="close-outline" id="delete"></ion-icon>
                                                <h3>` + books[i].title + `</h3>
                                                <div>
                                                    <p>` + books[i].currency + `</p>
                                                    <p id="product-price">` + books[i].price + `</p>
                                                    <p>Quantity</p>
                                                    <button id="increase-basket">+</button>
                                                    <p id="pieces-basket">1</p>
                                                    <button id="decrease-basket">-</button>   
                                                </div>
                                            </div>
                                        `;
    
                                        let totalResult = document.querySelector('#total');
                                        console.log(totalResult);
                                        totalResult.innerHTML = Number(totalResult.innerHTML) + Number(books[i].price);
    
                                        let increaseBaskets = document.querySelectorAll('#increase-basket');
                                        let decreaseBaskets = document.querySelectorAll('#decrease-basket');
    
                                        for (let i = 0; i < increaseBaskets.length; i++) {
                                            let increaseBasket = increaseBaskets[i];

                                            increaseBasket.addEventListener('click', (event) => {
                                                let element = event.target;
                                                let elementListItem = element.parentNode;
                                                console.log(elementListItem);
    
                                                let pieceBasket = elementListItem.querySelector('#pieces-basket');
                                                let piecesBasket = pieceBasket.innerHTML;
                                                piecesBasket++;
    
                                                console.log(pieceBasket);
                                                console.log(piecesBasket);
    
                                                pieceBasket.innerHTML = piecesBasket;
    
                                                let productPrice =  elementListItem.querySelector('#product-price');
    
                                                totalResult.innerHTML = Number(totalResult.innerHTML) + Number(productPrice.innerHTML);
                                            });
                                        }
    
                                        for (let i = 0; i < decreaseBaskets.length; i++) {
                                            let decreaseBasket = decreaseBaskets[i];
    
                                            decreaseBasket.addEventListener('click', (event) => {
                                                let element = event.target;
                                                let elementListItem = element.parentNode;
                                                let pieceBasket = elementListItem.querySelector('#pieces-basket');
                                                let piecesBasket = pieceBasket.innerHTML;
                                                piecesBasket--;
    
                                                if (piecesBasket >= 1) {
                                                    pieceBasket.innerHTML = piecesBasket;
    
                                                    let productPrice =  elementListItem.querySelector('#product-price');
    
                                                    totalResult.innerHTML = Number(totalResult.innerHTML) - Number(productPrice.innerHTML);
                                                } else {
                                                    pieceBasket.innerHTML = '1';
                                                }
                                            });
                                        }
    
                                        let deleteButtons = document.querySelectorAll('#delete');
                                
                                            for (let i = 0; i < deleteButtons.length; i++) {
                                                let deleteButton = deleteButtons[i];
                                
                                                deleteButton.addEventListener('click', (event) => {
                                
                                                    let element = event.target;
                                                    let elementListItem = element.parentNode;
                                                    console.log(elementListItem);
                                                    elementFullList = elementListItem.parentNode;
                                                    elementFullList.removeChild(elementListItem);
    
                                                    let productPrice = elementListItem.querySelector('#product-price');
    
                                                    console.log(totalResult);
                                                    console.log(productPrice);
    
                                                    let pieceBasket = elementListItem.querySelector('#pieces-basket');
    
                                                    totalResult.innerHTML = Number(totalResult.innerHTML) - (Number(productPrice.innerHTML) * Number(pieceBasket.innerHTML));
    
                                                });
                                            }
    
                                            
                                    }
                                                                               
                                });
                            }
                    }
    
                    authorZtoA.style.display = 'flex';
    
                    for (let i =0; i < product.length; i++) {
                        let products = product[i];
                        products.style.display = 'none';
                    }
    
                    nameAtoZ.style.display = 'none';
                    nameZtoA.style.display = 'none';
                    authorAtoZ.style.display = 'none';
                }
            }
        }
    });

});

