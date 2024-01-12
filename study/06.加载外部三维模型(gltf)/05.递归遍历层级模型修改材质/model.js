import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import BaseScene from "baseScene";

const baseScene = new BaseScene({
  el: document.querySelector("#webgl")
});
baseScene.camera.position.set(300, 300, 300)

const model = new THREE.Group()
const loader = new GLTFLoader()
loader.load("./工厂.glb", (gltf) => {
  const newMesh = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.6
  })
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material = newMesh
    }
  })
  model.add(gltf.scene)
  baseScene.scene.add(model)
  changeModel()
})

const changeModel = () => {
}
