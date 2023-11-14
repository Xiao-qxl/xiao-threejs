import * as THREE from 'three';

// 创建一个三维场景scene
const scene = new THREE.Scene()

// 给三维场景添加物体
// 定义一个几何体 长方体 长宽高都是200
const geometry = new THREE.BoxGeometry(200, 200, 200)

/*
* 创建一个材质对象
* MeshBasicMaterial 基础网格材质
* MeshLambertMaterial 漫反射网格材质，受光照影响
* */
const material = new THREE.MeshBasicMaterial({
  color: 0x00ffff, // 颜色
  transparent: true, // 开启透明
  opacity: 0.5
})

// 创建一个网格模型，表示生活中的物体
const mesh = new THREE.Mesh(geometry, material)
// 设置网格模型在三维空间的位置坐标，默认为坐标原点
mesh.position.set(0, 0, 0)
// 把mesh添加到场景种
scene.add(mesh)

// 创建一个三维坐标轴
const axesHelper = new THREE.AxesHelper(300)
scene.add(axesHelper)

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
camera.lookAt(mesh.position)

// 创建一个WebGL渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height)  // canvas画布宽高度
renderer.render(scene, camera) // 执行渲染操作
// 把渲染结果canvas画布，添加到网页页面上
document.querySelector('#webgl').appendChild(renderer.domElement)

// 周期性执行，默认理想状态下每秒钟执行60次
// 渲染循环，有了这个循环，其他渲染操作可以不用
const clock = new THREE.Clock()
function render() {
  const spt = clock.getDelta()*1000 // 默认是s
  // console.log('两次执行渲染的时间间隔', spt)
  // console.log('渲染帧率', 1000/spt)
  mesh.rotateY(0.01)
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
