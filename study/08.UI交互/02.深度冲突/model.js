/** 
 * 深度冲突（模型闪烁）Z-fighting
 * 创建两个重合的mesh平面，电脑GPU会自动选择一个，导致闪烁
 * */
import * as THREE from 'three'
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import BaseScene from "baseScene";

const mountedEl = document.getElementById("webgl");
const baseScene = new BaseScene({ el: mountedEl });
const gui = new GUI();

// 创建两个重合mesh平面
const geometry = new THREE.PlaneGeometry(200, 200);
const material = new THREE.MeshBasicMaterial({
    color: "yellow",
    side: THREE.DoubleSide,
});
const geometry2 = new THREE.PlaneGeometry(220, 220);
const material2 = new THREE.MeshBasicMaterial({
    color: "red",
    side: THREE.DoubleSide,
});
const mesh1 = new THREE.Mesh(geometry, material);
mesh1.position.set(100, 100, 0);
baseScene.scene.add(mesh1);
const mesh2 = new THREE.Mesh(geometry2, material2);
mesh2.position.set(110, 110, 0);
baseScene.scene.add(mesh2);
// 设置间隙，间隙大于0，则不会闪烁。基于gpu的精度，间隙不可过于小
mesh2.position.setZ(0.5)

changeCameraPosition()
/**
* 设置相机位置，远离三维模型，深度冲突会再现
* @param {number} sacle 缩放比例
* 设置renderer的logarithmicDepthBuffer深度缓冲区
*/
function changeCameraPosition(sacle = 2) {
    const beforeCameraPosition = baseScene.camera.position.clone();
    baseScene.camera.position.set(beforeCameraPosition.x * sacle, beforeCameraPosition.y * sacle, beforeCameraPosition.z * sacle);
    // mesh2.position.setZ(2)
}
