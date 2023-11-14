import * as THREE from 'three';
// 引入相机控件
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// 引入Stats性能监视器
import Stats from "three/addons/libs/stats.module.js";
const stats = new Stats()
// 设置监视器面板，传入面板id（0: fps, 1: ms, 2: mb）
stats.setMode(0)
document.body.appendChild(stats.domElement)

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(100, 100, 100)
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00, // 颜色
  transparent: true, // 开启透明
  opacity: 0.5
})
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0, 0, 0)
scene.add(mesh)

/*创建一个点光源*/
const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.set(120, 180, 200)
const pointLightHelper = new THREE.PointLightHelper(pointLight, 20)
scene
  .add(pointLight)
  .add(pointLightHelper)

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

// 创建一个相机控件对象
const controls = new OrbitControls(camera, renderer.domElement)
// 如果OrbitControls改变了相机的参数，需要重新调用渲染器
controls.addEventListener('change', () => {
  renderer.render(scene, camera)
})

// 周期性执行，默认理想状态下每秒钟执行60次
// 渲染循环，有了这个循环，其他渲染操作可以不用
const clock = new THREE.Clock()
function render() {
  stats.update()
  const spt = clock.getDelta()*1000 // 默认是s
  // console.log('两次执行渲染的时间间隔', spt)
  // console.log('渲染帧率', 1000/spt)
  mesh.rotateY(0.01)
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}
render()
