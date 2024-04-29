import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'

const book = {
  title: 'Володар перснів. Братство персня.',
  author: 'Дж. Р. Р. Толкін',
  genre: 'Фентезі',
  pages: 704,
  reviews: 
      'Дана книга є першою з трьох частин знаменитої саги про Середземномор’я та про його незвичайних жителів.' +
      'Багато років зло чекало слушної можливості щоб нанести удар. Більше шістдесяти років пройшло з тих пір як армії орків були знищенні, а злий чаклун переможений.' +
      'Кільце яке багато в чому може вирішити доля майбутньої битви раптом знову дало про себе знати.' +
      'Тому його власнику за будь-яку ціну необхідно його знищити, для цього потрібно відправитися в далеку дорогу.' +
      'Але слуги зла його всюди розшукують і довго його ховати не вдасться. Назріває грандіозна битва, результат якої ніхто не може вгадати.' +
      'Ще ніколи армія орків не була такою потужною. Однак і жителі Середземномор’я вирішують об’єднатися у спільній битві з ворогом, тому що розуміють що це єдиний шанс на порятунок.' +
      'Книга справді варта тих позитивних відгуків, які залишають читачі після її прочитання. Додала книзі популярності її екранізація.' + 
      'Мабуть саме завдяки їй багато хто захотів прочитати книгу. Книга припаде до душі всім шанувальникам незвичайних світів, а також тим хто хоче хоч на деякій час втекти від буденної рутини.' + 
      'У книзі багато цікавих персонажів, тому я впевнений що в кожного читача буде свій улюблений персонаж.',
};

const musicGroup = {
  title: 'Scorpions.',
  participants: [
    {name: 'Клаус Майне', url: 'https://uk.wikipedia.org/wiki/%D0%9A%D0%BB%D0%B0%D1%83%D1%81_%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5'},
    {name: 'Рудольф Шенкер', url: 'https://uk.wikipedia.org/wiki/%D0%A0%D1%83%D0%B4%D0%BE%D0%BB%D1%8C%D1%84_%D0%A8%D0%B5%D0%BD%D0%BA%D0%B5%D1%80'},
    {name: 'Маттіас Ябс', url: 'https://uk.wikipedia.org/wiki/%D0%9C%D0%B0%D1%82%D1%82%D1%96%D0%B0%D1%81_%D0%AF%D0%B1%D1%81'},
    {name: 'Павел Мачівода', url: 'https://uk.wikipedia.org/wiki/%D0%9F%D0%B0%D0%B2%D0%B5%D0%BB_%D0%9C%D0%BE%D0%BD%D1%86%D1%96%D0%B2%D0%BE%D0%B4%D0%B0'},
    {name: 'Міккі Ді', url: 'https://uk.wikipedia.org/wiki/%D0%9C%D1%96%D0%BA%D0%BA%D1%96_%D0%94%D1%96'},
 ],
 albums: ['Lonesome Crow (1972)', 'Fly to the Rainbow (1974)', 'In Trance (1975)', 'Taken by Force (1978)', 'Lovedrive (1979)',
  'Animal Magnetism (1980)', 'Blackout (1982)', 'Love at First Sting (1984)', 'Savage Amusement (1988)', 'Crazy World (1990)',
  'Face the Heat (1993)', 'Pure Instinct (1996)', 'Eye II Eye (1999)', 'Unbreakable (2004)', 'Humanity: Hour I (2007)',
  'Sting in the Tail (2010)', 'Comeblack (2011)', 'Return to Forever (2015)', 'Rock Believer (2022)'],
  albumsImg: [
      'https://upload.wikimedia.org/wikipedia/ru/6/6b/RTF-Cover.jpg', 
      'https://upload.wikimedia.org/wikipedia/ru/7/7a/ScorpionsBlackout.jpeg', 
      'https://upload.wikimedia.org/wikipedia/uk/0/0c/Scorpions-Lonesome_Crow.jpg', 
      'https://upload.wikimedia.org/wikipedia/uk/a/ae/Scorpions-Fly_To_The_Rainbow.jpg',
      'https://upload.wikimedia.org/wikipedia/ru/d/d9/Lonesome_Crow.jpg'
  ],
};




function ScreenBook () {
  return (
<div>
  <div className='d-flex text-start'>
    <div className='col-4'>
      <h5><strong>Назва книги:</strong> {book.title}</h5>
      <p><strong>Автор:</strong> {book.author}</p>
      <p><strong>Жанр:</strong> {book.genre}</p>
      <p><strong>Сторінки:</strong> {book.pages}</p>
    </div>
    <div>
      <h3>Рецензія:</h3>
      <p>{book.reviews}</p>
    </div>
  </div>
</div>
  );
}

function ScreenMusicGroup () {
  return (
    <div className='d-flex text-start justify-content-between'>
      <div>
        <h5>Назва групи - {musicGroup.title}</h5>
        <p><strong>Список учасників:</strong></p>
        <ul>
          {musicGroup.participants.map((participant, index) => (
          <li key={index}>
            <a target='_blank' href={participant.url}>{participant.name}</a>
          </li>
          ))}
        </ul>
      </div>
      <div className='col-3'>
        <p><strong>Назви альбомів:</strong></p>
        <ul>
          {musicGroup.albums.map((album, index) => (
            <li key={index}>{album}</li>
          ))}
        </ul>
      </div>
      <div className='d-flex justify-content-around flex-wrap'>
        {musicGroup.albumsImg.map((img, index) => (
          <img key={index} src={img} className='rounded m-3' style={{width: '200px', height: '200px'}}></img>
        ))}
      </div>
    </div>
  );
}
const dish = {
  title: 'Запечена картопля з часниковим маслом',
  ingredients: ['картопля невелика - 6 шт.', 'рослинна олія - для змащування картоплі', 'вершкове масло - 40 г',
                'часник - 3 зубчики', 'зелень кропу', 'сіль - за смаком'],
  cooking: ['Картоплю помити. Надрізати навхрест до половини картоплі.', 'Картоплю залити водою, посолити, довести до кипіння і варити 10 хв.',
            'Потім картоплю викласти на деко надрізом догори, змастити рослинною олією і помістити у заздалегідь розігріту до 190°С духовку на 30 хв.',
            'Готуємо часникове масло. Зелень кропу подрібнити ножем.', 'В мисочку викласти розм’якле вершкове масло', 'До масла додати зелень кропу, посолити.',
            'Вичавити часник.', 'Все ретельно перемішати. Часникове масло готове.', 'Запечену картоплю вийняти з духовки. В середину кожної ще гарячої картоплини викласти часникове масло і одразу подавати до столу.',
            'Запечена картопля з часниковим маслом готова.'],
  img: 'https://www.smachno.in.ua/files/2022/drugi/Pechena-kartoplia-chasnykovym-maslom/Pechena-kartoplia-chasnykovym-maslom.jpg',
  video: 'https://www.youtube.com/embed/lkDx1z2vcA0',
}
function ScreenDish () {
  return (
    <div className='d-flex text-start'>
      <div className='col-3'>
        <h5>{dish.title}</h5>
        <p className='mb-0'>Інгридієнти:</p>
        <ul>
          {dish.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className='col-4'>
        <h6>Послідовність приготування:</h6>
        <ol>
          {dish.cooking.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center col-5'>
        <img className='mb-5' src={dish.img} style={{width: '250px'}}></img>
        <iframe allowFullScreen src={dish.video} style={{width: '250px'}}></iframe>
      </div>
    </div>
    
  );
}





ReactDOM.createRoot(document.getElementById('root')).render(
<>
  <ScreenBook />
  <ScreenMusicGroup />
  <ScreenDish />
</>
)
