import join from 'lodash/join';

function component() {
  const element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack', 'From Jay 3'], ' ');

  return element;
}

document.body.appendChild(component());
