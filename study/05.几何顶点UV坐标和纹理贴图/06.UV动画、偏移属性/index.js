import * as THREE from 'three'

// 创建矩形几何体
const geometry = new THREE.PlaneGeometry(400, 100)
// 创建纹理
const texture = new THREE.TextureLoader().load('./public/wood.png')
// 创建材质
const material = new THREE.MeshBasicMaterial({
  // color: 0xff0000,
  map: texture
})

// 创建网格
const mesh = new THREE.Mesh(geometry, material)
// 旋转至与x轴平行
mesh.rotation.x = -Math.PI / 2
// 纹理对象的UV坐标的U方向偏移
texture.offset.x = 0.5
// 纹理对象的UV坐标的V方向偏移
texture.offset.y = 0.5
// 改变纹理包裹方式
texture.wrapS = THREE.RepeatWrapping
texture.wrapT = THREE.RepeatWrapping
// 设置纹理的阵列
texture.repeat.set(1, 0)
animate()

// 渲染循环
function animate() {
  requestAnimationFrame(animate)
  // 偏移
  texture.offset.x += 0.001
}

export default mesh
