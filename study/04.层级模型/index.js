import * as THREE from 'three'
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

import group from './01.组对象Group'
import groups from './02.递归遍历模型树结构、查询模型节点'
import coordinateMesh from './03.本地坐标和世界坐标'
import mesh4 from './04.改变模型相对局部坐标原点位置'
import mesh5 from './05.移除对象.remove'
import mesh6 from './06.模型隐藏或显示'

const scene = new THREE.Scene()
// scene.add(group)
// scene.add(groups)
// scene.add(coordinateMesh)
// scene.add(mesh4)
// scene.add(mesh5)
scene.add(mesh6)

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
