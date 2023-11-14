import * as THREE from 'three'

// 创建几何体
const geometry = new THREE.BoxGeometry(50, 50, 50)
// 创建材质
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  transparent: true,
  opacity: 0.5
})
// 创建网格
const mesh = new THREE.Mesh(geometry, material)

// 创建一个三维向量对象
const v3 = new THREE.Vector3(100, 100, 100)
// 使用set方法设置向量的值都为50
v3.set(50, 50, 50)
v3.normalize()

// 设置网格的位置
mesh.position.set(100, 0, 0)
// 平移网格
mesh.translateOnAxis(v3, 100)
// 缩放网格
// mesh.scale.set(2, 2, 2)

// 导出网格
export default mesh
