import { FAV_INGREDIENTS } from './fav_ingredients';
import sprite from '../../../../images/svg/sprite.svg';
import { searchIngrByName } from '../../modal/modalIngr';

const refIngrList = document.querySelector('.ingredients-list');
const actArr = JSON.parse(localStorage.getItem(FAV_INGREDIENTS)) || [];

refIngrList.addEventListener('click', chooseBtnIngr);

function chooseBtnIngr(e) {
  if (e.target.tagName !== 'BUTTON') return;
  if (e.target.dataset.name) {
    searchIngrByName(e.target.dataset.name);
  }
  if (e.target.dataset.fav) {
    deleteFavIngrFromLS(e.target.dataset.fav);
    e.target.parentNode.parentNode.remove();
  }
}

if (actArr.length) {
  renderMarkup(actArr);
} else {
  renderErrorMarkup();
}

function renderMarkup(data = []) {
  const mark = data
    .map(({ strIngredient, strType }) => {
      return `<li class="ingredients-card">
          <h3 class="ingredients__name">${strIngredient}</h3>
          <h5 class="ingredients__type">${strType}</h5>
          <div class="ingredients-card__options">
            <button class="button-learn_more" data-name="${strIngredient}">Learn more</button>
            <button class="button-remove" data-fav=${strIngredient}>
              Remove
              <svg class="heart-icon" width="18" height="18">
                <use href="${sprite}#icon-heart_full" ></use>
              </svg>
            </button>
          </div>
        </li>`;
    })
    .join('');
  refIngrList.innerHTML = mark;
}

function renderErrorMarkup() {
  const mark = `<li class="f-coctails__item">
              You haven't added any favorite cocktails yet
            </li>`;
  refIngrList.innerHTML = mark;
}

function deleteFavIngrFromLS(id) {
  const actArr = JSON.parse(localStorage.getItem(FAV_INGREDIENTS)) || [];
  for (let i = 0; i < actArr.length; i++) {
    if (actArr[i].strIngredient === id) {
      actArr.splice(i, 1);
      localStorage.setItem(FAV_INGREDIENTS, JSON.stringify(actArr));
      return;
    }
  }
}