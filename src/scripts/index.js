import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../public/data/DATA.json';

// Hamburger Menu
const appbarList = document.querySelector('.appbar__list');
const active = () => {
    appbarList.classList.toggle('active');
};
const menuMobile = document.querySelector('#appbar__hamburger-menu').onclick = active;

// Restaurant List
const content = document.querySelector(".restaurant-list");
const restaurantList = () => {
    const list = data.restaurants.map((restaurant) => {
        const {pictureId, city, name, description, rating} = restaurant;
        const _list =         
        `
        <div class="restaurant-card">
            <img class="restaurant-card__image" src=${pictureId}>
            <div class="restaurant-card__wrapper">

                <div class="restaurant-card__city">
                    ${city}
                </div>
            
                <div class="restaurant-card__name">
                    ${name}
                </div>

                <div class="restaurant-card__rating">
                    ${rating}
                </div>
            
                <div class="restaurant-card__description">
                    ${description.slice(0, 100)}
                </div>

                <a href="#" class="restaurant-card__button">
                    <h5>Read more</h5>
                </a>
            </div>
        </div>
        `
        return _list
    }).join("")
    content.innerHTML = list;
}

menuMobile();
restaurantList();