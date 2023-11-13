import * as THREE from 'three'
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import pointModel from './01.点模型'
import lineModel from './02.线模型'
import meshModel from './03.网格模型(三角面)'
import rectangleModel from './04.构建矩形平面'
import geometryModel from './05.几何体顶点索引数据'
import normalModel from './06.顶点法线数据'

const scene = new THREE.Scene()
// scene.add(pointModel)
// scene.add(lineModel.line)
// scene.add(meshModel)
scene.add(rectangleModel)
// scene.add(geometryModel)
// scene.add(normalModel)

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
