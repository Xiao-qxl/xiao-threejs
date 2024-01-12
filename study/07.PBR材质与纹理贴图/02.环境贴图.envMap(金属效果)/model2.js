import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import BaseScene from "baseScene";

const baseScene = new BaseScene()
baseScene.camera.position.set(200, 200, 200)
// 移除默认的环境光和方向光
baseScene.scene.remove(baseScene.ambientLight)
baseScene.scene.remove(baseScene.directionalLight)
const model = new THREE.Group()
const loader = new GLTFLoader()

const textureCube = new THREE.CubeTextureLoader()
  .setPath('./环境贴图/环境贴图4/')
  .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'])

loader.load("../06.加载外部三维模型(gltf)/工厂.gltf", (gltf) => {
  // 设置全局的环境贴图，影响所有物体
  baseScene.scene.environment = textureCube
  // gltf.scene.traverse((child) => {
  //   if (child.isMesh) {
  //     child.material.envMap = textureCube  // 环境贴图
  //     child.material.envMapIntensity = 1.0
  //   }
  // })
  model.add(gltf.scene)
  baseScene.scene.add(model)
})
