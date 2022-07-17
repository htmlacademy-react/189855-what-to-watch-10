import getRandomIntInclusive from './utils';

const cardsData = [
  {
    description: 'Fantastic Beasts: The Crimes of Grindelwald',
    image: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'
  },
  {
    description: 'Bohemian Rhapsody',
    image: 'img/bohemian-rhapsody.jpg'
  },
  {
    description: 'Macbeth',
    image: 'img/macbeth.jpg'
  },
  {
    description: 'Aviator',
    image: 'img/aviator.jpg'
  },
  {
    description: 'We need to talk about Kevin',
    image: 'img/we-need-to-talk-about-kevin.jpg'
  },
  {
    description: 'What We Do in the Shadows',
    image: 'img/what-we-do-in-the-shadows.jpg'
  },
  {
    description: 'Revenant',
    image: 'img/revenant.jpg'
  },
  {
    description: 'Johnny English',
    image: 'img/johnny-english.jpg'
  },
  {
    description: 'Shutter Island',
    image: 'img/shutter-island.jpg'
  },
  {
    description: 'Pulp Fiction',
    image: 'img/pulp-fiction.jpg'
  },
  {
    description: 'No Country for Old Men',
    image: 'img/no-country-for-old-men.jpg'
  },
  {
    description: 'Snatch',
    image: 'img/snatch.jpg'
  },
  {
    description: 'Moonrise Kingdom',
    image: 'img/moonrise-kingdom.jpg'
  },
  {
    description: 'Seven Years in Tibet',
    image: 'img/seven-years-in-tibet.jpg'
  },
  {
    description: 'Midnight Special',
    image: 'img/midnight-special.jpg'
  },
  {
    description: 'War of the Worlds',
    image: 'img/war-of-the-worlds.jpg'
  },
  {
    description: 'Dardjeeling Limited',
    image: 'img/dardjeeling-limited.jpg'
  },
  {
    description: 'Orlando',
    image: 'img/orlando.jpg'
  },
  {
    description: 'Mindhunter',
    image: 'img/mindhunter.jpg'
  },
  {
    description: 'Midnight Special',
    image: 'img/midnight-special.jpg'
  },
];

const genres = ['Comedy', 'Crime', 'Documentary', 'Drama', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thriller'];

const years = ['2014', '2015', '2016', '2017', '2020', '2021', '2022'];

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const filmData = {
  id: getRandomIntInclusive(1, 200),
  name: getRandomArrayElement(cardsData).description,
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/the-grand-budapest-hotel.jpg',
  backgroundImage: 'img/the-grand-budapest-hotel-bg.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://some-link',
  previewVideoLink: 'https://some-link',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&acute;s friend and protege.',
  rating: 8.9,
  scoresCount: 240,
  director: 'Wes Anderson',
  starring: [
    'Bill Murray'
  ],
  runTime: 99,
  genre: getRandomArrayElement(genres),
  released: getRandomIntInclusive(1999, 2022),
  isFavorite: false
};

export {cardsData, genres, years, filmData};
