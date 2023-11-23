import * as THREE from 'three'
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import mesh1 from './01.创建纹理贴图'
import mesh2 from './02.自定义顶点UV坐标'
import mesh3 from './03.圆形平面CircleGeometry设置纹理贴图'

const scene = new THREE.Scene()
// scene.add(mesh1)
// scene.add(mesh2)
scene.add(mesh3)

// 创建坐标轴
const axes = new THREE.AxesHelper(1000)
scene.add(axes)

// 添加环境光
const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight)

const width = window.innerWidth
const height = window.innerHeight
const camera = new THREE.PerspectiveCamera(
  30, width / height, 100, 3000
)
camera.position.set(800, 800, 800)
camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
const controls = new OrbitControls(camera, renderer.domElement)

document.querySelector('#webgl').appendChild(renderer.domElement)

function render() {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()
