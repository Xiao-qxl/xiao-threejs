import * as THREE from 'three'
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import BaseScene from "baseScene";

const mountedEl = document.getElementById("webgl");
const baseScene = new BaseScene({ el: mountedEl });
const gui = new GUI();

// 新建一个正方体模型
const geometry = new THREE.BoxGeometry(100, 100, 100);
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
baseScene.scene.add(cube);

// 设置背景透明度
// baseScene.renderer.setClearAlpha(0.5);
baseScene.renderer.setClearAlpha(0);

const saveAsImgBtn = document.createElement("button");
saveAsImgBtn.innerText = "保存图片";
saveAsImgBtn.style.position = "absolute";
saveAsImgBtn.style.left = "50px";
saveAsImgBtn.style.top = "50px";
saveAsImgBtn.onclick = () => {
    console.log('保存canvas为图片');
    /**
     * canvas.toDataURL(type, encoderOptions)
     * image/png image/jpeg image/bmp
     */
    const screenshot = baseScene.renderer.domElement.toDataURL("image/png");
    const linkEl = document.createElement("a");
    linkEl.href = screenshot;
    linkEl.download = "screenshot.png";
    linkEl.click();
    linkEl.remove();
};
document.body.appendChild(saveAsImgBtn);
