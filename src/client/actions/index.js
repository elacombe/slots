export const MAKE_FRUIT = 'MAKE_FRUIT';
export const FINAL_FRUIT = 'FINAL_FRUIT';

const colors = [
  '#F34235', '#E81D62', '#9B26AF', '#6639B6', '#3E50B4', '#2095F2', '#02A8F3',
  '#00BBD3', '#009587', '#4BAE4F', '#FE5621', '#785447', '#9D9D9D', '#5F7C8A',
];

const icons = [
  'ambulance', 'automobile', 'bicycle', 'bus', 'cab', 'car', 'fighter-jet',
  'motorcycle', 'plane', 'rocket', 'ship', 'space-shuttle', 'subway',
  'train', 'truck',
];

const random = (max) => Math.floor((Math.random() * max) + 1);

export const makeFruit = (color, icon, id) => ({
  type: MAKE_FRUIT,
  color,
  icon,
  id,
});

export const finalFruit = () => ({ type: FINAL_FRUIT });

export const loadFruits = () => {
  return (dispatch) => {
    Promise.all([
      loadFruit(0).then(fruit => dispatch(makeFruit(...fruit))),
      loadFruit(1).then(fruit => dispatch(makeFruit(...fruit))),
      loadFruit(2).then(fruit => dispatch(makeFruit(...fruit))),
      loadFruit(3).then(fruit => dispatch(makeFruit(...fruit))),
      loadFruit(4).then(fruit => dispatch(makeFruit(...fruit))),
      ]).then(() => setTimeout(() => dispatch(finalFruit()), 3000));
  };
};

export const loadFruit = (id) => {
  return new Promise(resolve => {
    const fruit = [
      colors[random(13)],
      icons[random(14)],
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