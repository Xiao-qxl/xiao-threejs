import * as THREE from 'three';

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
const scene = new THREE.Scene()

const sideLength = 150
const geometry = new THREE.BoxGeometry(sideLength, sideLength, sideLength)
const material = new THREE.MeshLambertMaterial({color: 0x00ff00})

const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0, 0, 0)
scene.add(mesh)

/*创建一个点光源*/
const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.set(120, 100, 200)

/*可视化点光源*/
const pointLightHelper = new THREE.PointLightHelper(pointLight, 20)
scene
  .add(pointLight)
  .add(pointLightHelper)

/*添加一个环境光*/
const ambient = new THREE.AmbientLight(0xffffff, 0.4)
scene.add(ambient)

// 添加一个平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
directionalLight.position.set(0, 0, -200)
directionalLight.target = mesh // 默认是坐标原点
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 10, 0xffffff)
scene
  .add(directionalLight)
  .add(directionalLightHelper)

const width = window.innerWidth
const height = window.innerHeight
const camera = new THREE.PerspectiveCamera(
  30, width/height, 100, 3000
)
camera.position.set(800, 800, 800);
camera.lookAt(mesh.position)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height)  // canvas画布宽高度
renderer.render(scene, camera) // 执行渲染操作
document.querySelector('#webgl').appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change', () => {
  renderer.render(scene, camera)
})
