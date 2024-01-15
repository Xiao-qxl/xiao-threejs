import * as THREE from 'three'
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
import {GUI} from "three/addons/libs/lil-gui.module.min.js";
import BaseScene from "baseScene";

const baseScene = new BaseScene();
const gui = new GUI();

const model = new THREE.Group();
baseScene.camera.position.set(-500, 500, 500);
baseScene.camera.lookAt(model.position);
baseScene.scene.add(model);

// 环境贴图
const textureCube = new THREE.CubeTextureLoader()
  .setPath('./环境贴图/环境贴图1/')
  .load(
    ['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']
  )
textureCube.encoding = THREE.sRGBEncoding;

const loader = new GLTFLoader();

loader.load('./轿车.glb', gltf => {
  // 设置场景环境属性 全局的环境贴图，影响所有物体
  baseScene.scene.environment = textureCube
  model.add(gltf.scene);

  handleEnclosure()
  handlingGlass()
})

function handleEnclosure() {
  const mesh = baseScene.scene.getObjectByName('外壳01');
  mesh.material = new THREE.MeshPhysicalMaterial({
    color: mesh.material.color,
    metalness: 0.9, // 金属度
    roughness: 0.5, // 金属粗糙度
    // envMap: textureCube, // 环境贴图
    // envMapIntensity: 2.0, // 环境贴图强度
    clearcoat: 1.0, // 清漆层
    clearcoatRoughness: 0.1, // 清漆层粗糙度
  });

  const folder = gui.addFolder('车外壳材质')
  folder.add(mesh.material, 'metalness', 0, 1);
  folder.add(mesh.material, 'roughness', 0, 1);
  folder.add(mesh.material, 'clearcoat', 0, 1);
  folder.add(mesh.material, 'clearcoatRoughness', 0, 1);
  folder.add(mesh.material, 'envMapIntensity', 0, 10)

}

function handlingGlass() {
  const mesh = baseScene.scene.getObjectByName('玻璃01');
  mesh.material = new THREE.MeshPhysicalMaterial({
    metalness: 0.0,
    roughness: 0.0,
    transmission: 1.0, // 透光率
    ior: 1.52, //  物质的IOR值，即 物质的透明度，1.52表示1.52倍的透明度
  })

  const folder = gui.addFolder('玻璃材质')
  folder.add(mesh.material, 'metalness', 0, 1);
  folder.add(mesh.material, 'roughness', 0, 1);
  folder.add(mesh.material, 'transmission', 1.0, 2.0);
  folder.add(mesh.material, 'ior', 1.0, 2.0);

}
