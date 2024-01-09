import * as THREE from 'three'
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import GLTFModel from './03.加载.gltf文件/model.js'

const scene = new THREE.Scene()
scene.add(GLTFModel)

// 添加辅助网格地面
const gridHelper = new THREE.GridHelper(300, 10, 0x004444, 0x004444)
gridHelper.position.y = -1 // 适当平移，避免与网格重叠
scene.add(gridHelper)

// 创建坐标轴
const axes = new THREE.AxesHelper(1000)
scene.add(axes)

//光源设置
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(400, 200, 300);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

const width = window.innerWidth
const height = window.innerHeight
const camera = new THREE.PerspectiveCamera(
  30, width / height, 1, 3000
)
camera.position.set(150, 150, 150)
camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
// 设置编码格式，解决加载gltf格式模型时出现的纹理贴图和原图不一样的问题
renderer.outputEncoding = THREE.sRGBEncoding
const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set(0, 0, 0)
controls.update()
document.querySelector('#webgl').appendChild(renderer.domElement)


function render() {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()

// 画布跟随窗口变化
window.onresize = function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};
