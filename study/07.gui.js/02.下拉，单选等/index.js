import * as THREE from 'three'
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import {GUI} from 'gui'

const gui = new GUI()

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(100, 100, 100)
const material = new THREE.MeshBasicMaterial({color: 0x00ffff})
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0, 0, 0)
scene.add(mesh)

const obj = {x: 20, yPosition: 0, xPosition: 0, bool: false}
/*
* 根据参数3的类型渲染
* */
/* 数字, 范围选择 */
gui.add(obj, 'x', 0, 100).name('')
/* 对象，下拉菜单 */
gui.add(obj, 'xPosition', {
  left: -100,
  center: 0,
  right: 100
})
  .name('x坐标')
  .onChange((val) => {
    mesh.position.x = val
  })
/* 数组，下拉菜单 */
gui.add(obj, 'yPosition', [-100, 0, 100])
  .name('y坐标')
  .onChange((val) => {
    mesh.position.y = val
  })
/* 布尔值，勾选 */
gui.add(obj, 'bool', true)
  .name('开启旋转')
  .onChange((val) => {
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
  obj.bool && mesh.rotateY(0.01)
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()
