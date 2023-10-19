import * as THREE from 'three';
// 引入相机控件
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// 引入Stats性能监视器
import Stats from "three/addons/libs/stats.module.js";
const stats = new Stats()
// 设置监视器面板，传入面板id（0: fps, 1: ms, 2: mb）
stats.setMode(0)
document.body.appendChild(stats.domElement)

// 创建一个三维场景scene
const scene = new THREE.Scene()

// 批量创建长方体
const num = 100;
for (let i = 0; i < num; i++) {
  // 给三维场景添加物体
// 定义一个几何体 长方体 长宽高都是100
  const geometry = new THREE.BoxGeometry(10, 10, 10)

  /*
  * 创建一个材质对象
  * MeshBasicMaterial 基础网格材质
  * MeshLambertMaterial 漫反射网格材质，受光照影响
  * */
  const material = new THREE.MeshLambertMaterial({
    color: 0x00ff00, // 颜色
    // transparent: true, // 开启透明
    // opacity: 0.5
  })

// 创建一个网格模型，表示生活中的物体
  const mesh = new THREE.Mesh(geometry, material)
// 设置网格模型在三维空间的位置坐标，默认为坐标原点
  const x = (Math.random() - 0.5) * 200
  const y = (Math.random() - 0.5) * 200
  const z = (Math.random() - 0.5) * 200
  mesh.position.set(x, y, z)
// 把mesh添加到场景种
  scene.add(mesh)
}

// 创建一个三维坐标轴
const axesHelper = new THREE.AxesHelper(300)
scene.add(axesHelper)

// 创建一个点光源
const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.set(120, 100, 200)
scene.add(pointLight)

// 可视化点光源
const pointLightHelper = new THREE.PointLightHelper(pointLight, 20)
// scene.add(pointLightHelper)

// 添加一个环境光
const ambient = new THREE.AmbientLight(0xffffff, 0.4)
scene.add(ambient)

// 添加一个平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
directionalLight.position.set(0, 0, -200)
// directionalLight.target = mesh // 默认是坐标原点
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 10, 0xffffff)
scene
  .add(directionalLight)
  .add(directionalLightHelper)


// 定义 相机输出画布的尺寸(像素：px)
const width = window.innerWidth
const height = window.innerHeight
// 创建一个 透视投影相机对象
const camera = new THREE.PerspectiveCamera(
  // 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
  30, width/height, 100, 3000
)
// 设置相机的位置
camera.position.set(800, 800, 800);
// 相机的视线 观察目标点的坐标
// camera.lookAt(mesh.position)

// 创建一个WebGL渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height)  // canvas画布宽高度
// renderer.render(scene, camera) // 执行渲染操作
// 把渲染结果canvas画布，添加到网页页面上
document.querySelector('#webgl').appendChild(renderer.domElement)

// 创建一个相机控件对象
const controls = new OrbitControls(camera, renderer.domElement)
// 如果OrbitControls改变了相机的参数，需要重新调用渲染器
controls.addEventListener('change', () => {
  // renderer.render(scene, camera)
})

// 周期性执行，默认理想状态下每秒钟执行60次
// 渲染循环，有了这个循环，其他渲染操作可以不用
const clock = new THREE.Clock()
function render() {
  stats.update()
  const spt = clock.getDelta()*1000 // 默认是s
  // console.log('两次执行渲染的时间间隔', spt)
  // console.log('渲染帧率', 1000/spt)
  // mesh.rotateY(0.01)
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}
render()

// 窗口调整事件
window.onresize = () => {
  // 重置渲染器输出画布canvas尺寸
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 全屏情况下：设置观察范围长宽比aspect为窗口宽高比
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
}
