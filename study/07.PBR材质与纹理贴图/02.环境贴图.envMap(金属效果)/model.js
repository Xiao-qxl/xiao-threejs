import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import BaseScene from "baseScene";

const baseScene = new BaseScene()
baseScene.camera.position.set(50, 50, 50)
const model = new THREE.Group()
const loader = new GLTFLoader()

/*
* 加载环境贴图
* 加载周围环境6个方向的贴图
* 上下左右前后6张贴图构成一个正方体空间
* 顺序为px, nx, py, ny, pz, nz
* x轴正方向 x轴负方向 y轴正方向 y轴负方向 z轴正方向 z轴负方向
*/
const textureCube = new THREE.CubeTextureLoader()
  .setPath('./环境贴图/环境贴图1/')
  .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'])

loader.load("./金属.glb", (gltf) => {
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 1.0
      child.material.roughness = 0.35
      child.material.envMap = textureCube  // 环境贴图
      child.material.envMapIntensity = 1.0
    }
  })
  model.add(gltf.scene)
  baseScene.scene.add(model)
})
