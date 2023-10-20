import * as THREE from 'three'
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

const width = window.innerWidth
const height = window.innerHeight

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)


const geometry = new THREE.BoxGeometry(10, 10, 10)
const material = new THREE.MeshBasicMaterial({
  color: 0xbbffaa,
  transparent: true,
  opacity: 0.5
})
// 沿x轴阵列多个立方体网格模型
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(i * 20, 0, j * 20)
    scene.add(mesh)
  }
}

const camera = new THREE.PerspectiveCamera(
  30, width / height, 100, 3000
)
camera.position.set(600, 600, 600)
// camera.lookAt(0, 0, 0)

renderer.render(scene, camera)
document.querySelector('#webgl')
  .appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set(100, 0, 100)
controls.update()

function render() {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()

