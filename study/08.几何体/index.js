import * as THREE from 'three'
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import pointModel from './01.点模型'
import lineModel from './02.线模型'
import meshModel from './03.网格模型(三角面)'

const scene = new THREE.Scene()
scene.add(pointModel)
scene.add(lineModel.line)
scene.add(meshModel)

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
