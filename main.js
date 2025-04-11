import './style.css'

import * as THREE from 'three';
// import { AnimationAction } from 'three';
const clock = new THREE.Clock();
const timeDelta = clock.getDelta();

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshBasicMaterial( {color: 0xFF6347, wireframe: true} );
const torus = new THREE.Mesh( geometry, material ); scene.add(torus);

// prompt for array length
var rand_num = prompt('how many random numbers in array?');
console.log('numbers in array ' + rand_num);


// original values
const original = {x: 0.10, y: 0.05, z: 0.10};

// changeable var
var X = 0.02; var Y = 0.01; var Z = 0.01;

// random num generator for xyz speed
function numgen(min = 0.005, max = 0.1 ){
  return Math.random() * (max - min ) + min;
}
// random num generator for array picking
function arypick(min = 0, max = rand_num){
  return Math.floor(Math.random() * (max - min)) + min;
}


// console.log(numgen().toFixed(3));
// console.log(numgen().toFixed(3));
// console.log(numgen().toFixed(3));

const arrayrandnum = [];
for (let i = 0; i < rand_num;) {
  arrayrandnum.push(numgen().toFixed(3)); i++;
}

setInterval(function varxchng(){
  return X = arrayrandnum[arypick()];
}, 20)
setInterval(function varychng(){
  return Y = arrayrandnum[arypick()];
}, 20)


console.log(arrayrandnum);


function animate(){
  requestAnimationFrame( animate );
  
  torus.rotation.x += original.x;
  torus.rotation.y += original.y;
  torus.rotation.z += original.z;
  
  renderer.render(scene, camera);


}


animate();