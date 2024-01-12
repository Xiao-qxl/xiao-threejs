import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import BaseScene from "baseScene";

const baseScene = new BaseScene({
  el: document.querySelector("#webgl")
});

const model = new THREE.Group()
const loader = new GLTFLoader()
loader.load("./简易小区.glb", (gltf) => {
  model.add(gltf.scene)
  changeModel()
})

baseScene.scene.add(model)

const changeModel = () => {
  setTimeout(() => {
    model.getObjectByName("1号楼").material.color.set(0x00ff00)
  }, 1000)
}
