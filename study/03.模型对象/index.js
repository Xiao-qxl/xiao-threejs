import * as THREE from 'three'
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import vectorMesh from './01.三维向量与模型位置、缩放'
import eulerMesh from './02.欧拉Euler与角度属性.rotation'
import colorMesh from './03.材质颜色color对象'
import materialParentClassMesh from './04.模型材质父类Material'
import materialMesh from './05.模型材质和几何体属性'
import copyMesh from './06.克隆.clone和复制.copy'

const scene = new THREE.Scene()
// scene.add(vectorMesh)
// scene.add(eulerMesh)
// scene.add(colorMesh)
// scene.add(materialParentClassMesh)
// scene.add(...materialMesh)
scene.add(...copyMesh)

// 创建坐标轴
const axes = new THREE.AxesHelper(1000)
scene.add(axes)

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
