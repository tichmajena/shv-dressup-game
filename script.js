
let glasses;
let tops;
let jacket;
let bottom;
let footware;


glasses = [
'<img src="/images/dressup/glasses-01.png" alt="">',
'<img src="/images/dressup/glasses-02.png" alt="">'
];


tops = [
'<img src="/images/dressup/top-01.png" alt="">',
'<img src="/images/dressup/top-02.png" alt="">',
'<img src="/images/dressup/top-03.png" alt="">',
'<img src="/images/dressup/top-04.png" alt="">'

];

jacket = [
'<img src="/images/dressup/jacket-01.png" alt="">',
'<img src="/images/dressup/jacket-02.png" alt="">',
'<img src="/images/dressup/no-jacket.png" alt="">'
];

bottom = [
'<img src="/images/dressup/bottom-01.png" alt="">',
'<img src="/images/dressup/bottom-02.png" alt="">',
'<img src="/images/dressup/bottom-03.png" alt="">'

];

footware = [
'<img src="/images/dressup/footware-01.png" alt="">',
'<img src="/images/dressup/footware-02.png" alt="">',
'<img src="/images/dressup/footware-03.png" alt="">',
'<img src="/images/dressup/footware-04.png" alt="">'

];



function dressUp() {

  const randomGlassesIndex = Math.floor(Math.random() * glasses.length);
  // Lets build our glasses image tag
  let randomGlasses = glasses[randomGlassesIndex];
  document.querySelector('.glasses').innerHTML = randomGlasses;

  const randomTopsIndex = Math.floor(Math.random() * tops.length);
  // Lets build our glasses image tag
  let randomTops = tops[randomTopsIndex];
  document.querySelector('.blouse').innerHTML = randomTops;

  const randomJacketIndex = Math.floor(Math.random() * jacket.length);
  // Lets build our glasses image tag
  let randomJacket = jacket[randomJacketIndex];
  document.querySelector('.jacket').innerHTML = randomJacket;

  const randomBottomIndex = Math.floor(Math.random() * bottom.length);
  // Lets build our glasses image tag
  let randomBottom = bottom[randomBottomIndex];
  document.querySelector('.bottom').innerHTML = randomBottom;

  const randomFootwareIndex = Math.floor(Math.random() * footware.length);
  // Lets build our glasses image tag
  let randomFootware = footware[randomFootwareIndex];
  document.querySelector('.footware').innerHTML = randomFootware;


}
