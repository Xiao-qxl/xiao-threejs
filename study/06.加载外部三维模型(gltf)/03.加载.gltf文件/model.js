import * as THREE from 'three'
// 引入GLTFLoader
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import BaseScene from "baseScene";

const baseScene = new BaseScene(
  {el: document.querySelector('#webgl')}
)
baseScene.addSquareModel()

// 实例化一个加载器对象
const loader = new GLTFLoader()

const model = new THREE.Group()

loader.load('./工厂.gltf', gltf => {
  // console.log(gltf)
  model.add(gltf.scene)
})

// baseScene.scene.add(model)
