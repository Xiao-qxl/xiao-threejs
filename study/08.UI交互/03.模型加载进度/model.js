import * as THREE from 'three'
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import BaseScene from "baseScene";

const mountedEl = document.getElementById("webgl");
const baseScene = new BaseScene({ el: mountedEl });

/**
 * 创建一个进度展示元素
 */
const progressEl = document.createElement('div');
progressEl.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000;
    color: #fff;
`
document.body.appendChild(progressEl)

const loader = new GLTFLoader();
const carModel = new THREE.Group()
loader.load('../07.PBR材质与纹理贴图/轿车.glb', gltf => {
    carModel.add(gltf.scene);
}, (xhr) => {
    // 控制浏览器网络传输速度来查看进度条效果
    const progress = (xhr.loaded / xhr.total * 100).toFixed(2)
    const loadingText = `${(progress) + '% loaded'}`
    progressEl.innerHTML = loadingText
})
baseScene.scene.add(carModel)