import flyd from 'flyd';
export const MAKE_FRUIT = 'MAKE_FRUIT';
export const FINAL_FRUIT = 'FINAL_FRUIT';

const colors = [
  '#F34235', '#E81D62', '#9B26AF', '#6639B6', '#3E50B4', '#2095F2', '#02A8F3',
  '#00BBD3', '#009587', '#4BAE4F', '#FE5621', '#785447', '#9D9D9D', '#5F7C8A',
];

const icons = [
  'ambulance', 'automobile', 'bicycle', 'bus', 'cab', 'car', 'fighter-jet',
  'motorcycle', 'plane', 'paper-plane','rocket', 'ship', 'space-shuttle', 'subway',
  'train', 'truck',
];

const random = (max) => Math.floor(Math.random() * max);

export const makeFruit = (color, icon, id) => ({
  type: MAKE_FRUIT,
  color,
  icon,
  id,
});

export const finalFruit = () => ({ type: FINAL_FRUIT });

export const loadFruits = () => {
      let fruit1 = flyd.stream(loadFruit(0));
      let fruit2 = flyd.stream(loadFruit(1));
      let fruit3 = flyd.stream(loadFruit(2));
      let fruit4 = flyd.stream(loadFruit(3));
      let fruit5 = flyd.stream(loadFruit(4));
};

export const loadFruit = (id) => {
  return new Promise(resolve => {
    const fruit = [
      colors[random(13)],
      icons[random(15)],
      id,
    ];
    setTimeout(() => resolve(fruit), random(5000));
  });
};


/*  Promise.all([
      loadFruit(0),
      loadFruit(1),
      loadFruit(2),
      loadFruit(3),
      loadFruit(4),
    ]).then(res => res.forEach((fruit) => dispatch(makeFruit(...fruit))));
*/