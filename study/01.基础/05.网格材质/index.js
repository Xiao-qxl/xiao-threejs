import * as THREE from 'three'
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene()

const axesHelper = new THREE.AxesHelper(9999)
scene.add(axesHelper)

let heightPosition = 10
// 添加光源
const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.set(80, 80, 80)
const pointLightHelper = new THREE.PointLightHelper(pointLight, 10)
scene.add(pointLight).add(pointLightHelper)
// 基础网格
;(() => {
  const material = new THREE.MeshBasicMaterial({color: 0x00ffff})
  const geometry = new THREE.SphereGeometry(20, 20, 20)
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(10, heightPosition, 10)
  scene.add(mesh)
})();
// 漫反射网格
;(() => {
  const material = new THREE.MeshLambertMaterial({color: 0x00ffff})
  const geometry = new THREE.SphereGeometry(20, 20, 20)
  const mesh = new THREE.Mesh(geometry, material)
  heightPosition += 50
  mesh.position.set(10, heightPosition, 10)
  scene.add(mesh)
})();
// 高光网格(镜面反射)
;(() => {
  const material = new THREE.MeshPhongMaterial({
    color: 0x00ffff,
    shininess: 100, // 高光强度属性
    specular: 0x444444, // 高光部分颜色
  })
  const geometry = new THREE.SphereGeometry(20, 20, 20)
  const mesh = new THREE.Mesh(geometry, material)
  heightPosition += 50
  mesh.position.set(10, heightPosition, 10)
  scene.add(mesh)
})();


const width = window.innerWidth
const height = window.innerHeight
const camera = new THREE.PerspectiveCamera(
  30, width / height, 100, 3000
)
camera.position.set(500, 500, 500)

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
