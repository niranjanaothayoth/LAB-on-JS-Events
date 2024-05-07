// Challenge 1
window.onload = function () {
  document.getElementById('user').innerHTML = 'Niranjana O';
};

// Challenge 2
document.getElementById('btn-click').onclick = function () {
  document.getElementById('btn-click').style.backgroundColor = 'green';
};

// Challenge 3
function makeSentence() {
  var noun = document.getElementById('noun').value;
  var verb = document.getElementById('verb').value;
  var adverb = document.getElementById('adverb').value;
  var statement = noun + ' ' + verb + ' ' + adverb;
  document.getElementById('statement').innerHTML = statement;
}

document.getElementById('build-button').onclick = makeSentence;

// Challenge 4.1
document.getElementById('grandparent').addEventListener('click', function () {
  console.log('Grandparent clicked');
});

document.getElementById('parent').addEventListener('click', function () {
  console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', function (event) {
  console.log('Child clicked');
  event.stopPropagation();
  console.log('Parent clicked');
  console.log('Grandparent clicked');
});

// Challenge 4.2
document.getElementById('grandparent').addEventListener(
  'click',
  function () {
    console.log('Grandparent clicked');
  },
  true
);

document.getElementById('parent').addEventListener(
  'click',
  function () {
    console.log('Parent clicked');
  },
  true
);

document.getElementById('child').addEventListener(
  'click',
  function () {
    console.log('Child clicked');
  },
  true
);

// Challenge 5
document.getElementById('category').addEventListener('click', function (event) {
  var clickedElement = event.target;
  console.log(clickedElement.textContent);
});
