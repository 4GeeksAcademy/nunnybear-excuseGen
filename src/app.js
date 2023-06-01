
window.onload = () => {
  document.querySelector("#Excuse").innerHTML = genExcuse();
};

let genExcuse = () => {

  let who = ['A bear', 'The Mayor', 'My cat', 'My Grandfather' ];
  let action = ['ate', 'threw away', 'sold', 'flushed'];
  let what = ['my iPad', 'my lunch', 'the assignment', 'my bike'];
  let when = ['this morning', 'yesterday', 'last night', '10 minutes ago'];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);


  return who[whoIndex] + ' ' + action[actionIndex] + ' ' + what [whatIndex] + ' ' + when[whenIndex] + '!';

};