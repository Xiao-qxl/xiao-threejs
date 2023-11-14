import * as THREE from 'three'
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene()

const axesHelper = new THREE.AxesHelper(9999)
scene.add(axesHelper)

let heightPosition = 10
// 长方体
;(() => {
  const material = new THREE.MeshBasicMaterial({color: 'blue'})
  const geometry = new THREE.BoxGeometry(20, 20, 20)
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(10, heightPosition, 10)
  scene.add(mesh)
})();
// 球体
;(() => {
  const material = new THREE.MeshBasicMaterial({color: 'yellow'})
  const geometry = new THREE.SphereGeometry(10)
  const mesh = new THREE.Mesh(geometry, material)
  heightPosition += 30;
  mesh.position.set(10, heightPosition, 10)
  scene.add(mesh)
})();
// 圆柱、圆台
;(() => {
  const material = new THREE.MeshBasicMaterial({color: 'green'})
  const geometry = new THREE.CylinderGeometry(6, 10, 20)
  const mesh = new THREE.Mesh(geometry, material)
  heightPosition += 30;
  mesh.position.set(10, heightPosition, 10)
  scene.add(mesh)
})();
// 矩形平面
;(() => {
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    side: THREE.DoubleSide // threejs默认是单面材料，此处设置双面可见
  })
  const geometry = new THREE.PlaneGeometry(20, 20)
  const mesh = new THREE.Mesh(geometry, material)
  heightPosition += 30;
  mesh.position.set(10, heightPosition, 10)
  scene.add(mesh)
})();
// 圆形平面
;(() => {
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    side: THREE.DoubleSide
  })
  const geometry = new THREE.CircleGeometry(10)
  const mesh = new THREE.Mesh(geometry, material)
  heightPosition += 30;
  mesh.position.set(10, heightPosition, 10)
  scene.add(mesh)
})();


const width = window.innerWidth
const height = window.innerHeight
const camera = new THREE.PerspectiveCamera(
  30, width / height, 100, 3000
)
camera.position.set(500, 500, 500)
camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
renderer.render(scene, camera)

document.querySelector('#webgl').appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

function render() {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()
