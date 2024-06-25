import * as THREE from 'three'
import BaseScence from 'baseScene';

const baseScene = new BaseScence({
    el: document.querySelector('#webgl')
});

baseScene.addSquareModel();

addEventListener('click', (event) => {
    const px = event.offsetX;
    const py = event.offsetY;
    // 屏幕坐标px/py转为webgl坐标
    const x = (px / baseScene.width) * 2 - 1;
    const y = -(py / baseScene.height) * 2 + 1;
    console.log("x: ", x);
    console.log("y: ", y);
    // 创建一个射线投射器Raycaster
    const raycaster = new THREE.Raycaster();
    // .setFromCamera()计算射线投射器Raycaster的射线属性.ray
    raycaster.setFromCamera(new THREE.Vector2(x, y), baseScene.camera);
    // 射线交叉计算
    const intersects = raycaster.intersectObjects(baseScene.scene.children);
    if (intersects.length > 0) {
        console.log(intersects[0].object);
        intersects[0].object.material.color.set(getRandomColor());
    }
})
// 生成随机颜色
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return new THREE.Color(`rgb(${r},${g},${b})`);
}