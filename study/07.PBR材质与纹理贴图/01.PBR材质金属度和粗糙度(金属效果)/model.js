import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import BaseScene from "baseScene";

const baseScene = new BaseScene()
baseScene.camera.position.set(50, 50, 50)
const loader = new GLTFLoader()
const model = new THREE.Group()

loader.load('./金属.glb', (gltf) => {
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 1.0 // 金属度
      child.material.roughness = 0.8 // 粗糙度
    }
  })
  model.add(gltf.scene)
  baseScene.scene.add(model)
})
