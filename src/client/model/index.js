import flyd from 'flyd';
import _ from 'lodash';

const colors = [
  '#F34235', '#E81D62', '#9B26AF', '#6639B6', '#3E50B4', '#2095F2', '#02A8F3',
  '#00BBD3', '#009587', '#4BAE4F', '#FE5621', '#785447', '#9D9D9D', '#5F7C8A',
];

const icons = [
  'ambulance', 'automobile', 'bicycle', 'bus', 'cab', 'car', 'fighter-jet',
  'motorcycle', 'plane', 'paper-plane','rocket', 'ship', 'space-shuttle', 'subway',
  'train', 'truck',
];

const random = (max) => Math.floor((Math.random() * max) + 1);

const fruitFactory = id => flyd.stream({ id, icon: 'start', color: 'start' });

const fruitsFactory = (count) => _.times(count, fruitFactory);

const fruits = fruitsFactory(_.random(5, 10));

const checkFruit = (fruit) => (fruit.icon == 'paper-plane') ? true : false;

const combinedFruits = flyd.combine(
  (...params) => _.map(params.slice(0, -2), fruit => fruit()),
  fruits
);

function on(fn) {
  flyd.on(fn, combinedFruits);
}

function rollFruit(fruit) {
  setTimeout(
    () => {
      const color = colors[random(colors.length - 1)];
      const icon = icons[random(icons.length - 1)];
      const id = fruit().id;
      fruit({ color, icon, id });
      if (icon !== 'paper-plane') rollFruit(fruit);
      else fruit().end;
    }, 500);
}

const rollFruits = () => _.each(fruits, rollFruit);

export default { on, rollFruits };

// while status != true, stream the shit out of it.
// how to check status efficiently;
// lancer s'abonné écouté