import * as THREE from "three";
import {GUI} from "gui";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

const gui = new GUI()
/* 更改操作台样式 */
gui.domElement.style.right = '0px'
gui.domElement.style.width = '300px'

/* gui应用到threejs */
const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(100, 100, 100)
const material = new THREE.MeshLambertMaterial({color: 0x00ffff})
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0, 0, 0)
scene.add(mesh)
gui.add(mesh.position, 'x', 0, 300)
gui.add(mesh.position, 'y', 0, 300)
gui.add(mesh.position, 'z', 0, 300)

// 光源设置
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4)
directionalLight.position.set(0, 200, 100)
scene.add(directionalLight)
gui.add(directionalLight, 'intensity', 0, 2).name('平行光强度')

const ambient = new THREE.AmbientLight(0xffffff, 0.4)
scene.add(ambient)
gui
  .add(ambient, 'intensity', 0, 2)
  .name('环境光强度')
  .step(0.1) // 步长
  .onChange((value) => { // change事件
    console.log(value)
  })

// 创建一个对象，对象属性的值可以被GUI库创建的交互界面改变
const obj = {x: 30, color: 0x00ffff}
// gui增加交互界面，用来改变obj对应属性
gui.add(obj, 'x', 0, 100)
gui.addColor(obj, 'color')
  .onChange((value) => {
    console.log('color：', value)
    mesh.material.color.set(value)
  })

const width = window.innerWidth
const height = window.innerHeight
const camera = new THREE.PerspectiveCamera(
  30, width / height, 100, 3000
)
camera.position.set(800, 800, 800)
camera.lookAt(mesh.position)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
const controls = new OrbitControls(camera, renderer.domElement)

document.querySelector('#webgl').appendChild(renderer.domElement)

function render() {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()

