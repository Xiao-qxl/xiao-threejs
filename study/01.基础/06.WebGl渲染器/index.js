import * as THREE from 'three'
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(100, 100, 100)
const material = new THREE.MeshBasicMaterial({color: 0x00ffff})
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0, 0, 0)
scene.add(mesh)

const width = window.innerWidth
const height = window.innerHeight
const camera = new THREE.PerspectiveCamera(
  30, width / height, 100, 3000
)
camera.position.set(800, 800, 800)
camera.lookAt(mesh.position)

// WebGl渲染器设置
const renderer = new THREE.WebGLRenderer({
  antialias: true // 启动抗锯齿
})
// 告诉threejs你的屏幕的设备像素比
console.log('查看当前屏幕设备像素比', window.devicePixelRatio)
renderer.setPixelRatio(window.devicePixelRatio)
// 设置背景颜色, 默认0x000000
renderer.setClearColor(0x444444)
renderer.setSize(width, height)
const controls = new OrbitControls(camera, renderer.domElement)
document.querySelector('#webgl').appendChild(renderer.domElement)

function render() {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()
