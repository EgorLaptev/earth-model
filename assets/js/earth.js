'use strict';

const cnv = document.querySelector("#earth");

const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, (window.innerWidth/2)/window.innerHeight, 0.1, 1000);
camera.position.z = 150;

const renderer = new THREE.WebGLRenderer({ canvas: cnv });
renderer.setSize( window.innerWidth/2, window.innerHeight, false );

const textureLoader = new THREE.TextureLoader();

const earthGeometry = new THREE.SphereGeometry(75, 75, 75);
const earthMaterial = new THREE.MeshBasicMaterial({
    map: textureLoader.load('./assets/img/earth.jpg')
});

const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

render();

function render() {

   earth.rotateY(0.01);

    renderer.render(scene, camera);
    requestAnimationFrame(render);

}
