import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import BaseScene from "baseScene";

const baseScene = new BaseScene({
  el: document.querySelector("#webgl")
});
baseScene.camera.position.set(300, 300, 300)

const model = new THREE.Group()
const loader = new GLTFLoader()

const glbUrl = "./简易小区-共享材质.glb"
// const glbUrl = "./简易小区-不共享材质.glb"
loader.load(glbUrl, (gltf) => {
  // 代码方式解决mesh共享材质的问题
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      // .material.clone() 会返回一个新的material对象
      child.material = child.material.clone()
    }
  })
  model.add(gltf.scene)
  baseScene.scene.add(model)
  changeModel()
})


const changeModel = () => {
  const mesh = model.getObjectByName('1号楼')
  mesh.material.color = new THREE.Color(0x00ff00)
}
