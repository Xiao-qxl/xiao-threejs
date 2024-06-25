/**
 * 高亮发光描边OutlinePass效果
 * 后处理扩展库/jsm/postprocessing/EffectComposer.js,
 * 渲染器通道/jsm/postprocessing/RenderPass.js
 * /jsm/postprocessing/OutlinePass.js
 */
import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
import BaseScence from 'baseScene';

const baseScene = new BaseScence(
    { el: document.getElementById('webgl') }
);
// 添加模型
baseScene.addSquareModel();
// 创建后处理对象EffectComposer，WebGl渲染器作为参数
const composer = new EffectComposer(baseScene.renderer);
// 创建一个渲染器通道RenderPass，场景和相机作为参数
const renderPass = new RenderPass(baseScene.scene, baseScene.camera);
composer.addPass(renderPass);
// 创建描边效果通道OutlinePass 参数1：画布大小，参数2：场景，参数3：相机
const outlinePass = new OutlinePass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    baseScene.scene,
    baseScene.camera
);
//模型描边颜色，默认白色         
outlinePass.visibleEdgeColor.set(0xffff00);
//高亮发光描边厚度
outlinePass.edgeThickness = 4;
//高亮描边发光强度
outlinePass.edgeStrength = 6;
//模型闪烁频率控制，默认0不闪烁
outlinePass.pulsePeriod = 3;

// 获取所有模型
baseScene.scene.traverse(function (child) {
    if (child.isMesh) {
        if (child.name === 'square') {
            outlinePass.selectedObjects.push(child);
            composer.addPass(outlinePass);
        }
    }
});
function render() {
    composer.render();
    // renderer.render(scene, camera);
    requestAnimationFrame(render);
}
// 停止baseSance的渲染动画
window.cancelAnimationFrame(baseScene.renderAnimation);
render();