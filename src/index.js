import posts from '../menu.json';
import postsItemTemplate from './templates/menu-item.hbs';
import './js/theme_changer'
import './styles.css';



const menuList = document.querySelector('ul.js-menu');




function buildPost(posts) {
    const markup = posts.map( post => postsItemTemplate(post)).join('')
    return markup


}
menuList.insertAdjacentHTML('beforeend', buildPost(posts));