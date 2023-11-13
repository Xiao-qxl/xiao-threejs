import * as THREE from "three"

const geometry = new THREE.BufferGeometry()

const vertices = new Float32Array([
  0, 0, 0, // 索引0
  80, 0, 0, // 索引1
  80, 80, 0, // 索引2
  0, 80, 0, // 索引3
])
const attribute = new THREE.BufferAttribute(vertices, 3)
geometry.attributes.position = attribute

const normals = new Float32Array([
  0, 0, 1, // 顶点1法向量
  0, 0, 1, // 顶点2法向量
  0, 0, 1, // 顶点3法向量
  0, 0, 1, // 顶点4法向量
])
// 定义顶点法线数据或者顶点法向量数据
geometry.attributes.normal = new THREE.BufferAttribute(normals, 3)

// 几何体顶点索引定义
const indexes = new Uint16Array([
  0, 1, 2,
  0, 2, 3,
])
geometry.index = new THREE.BufferAttribute(indexes, 1)

const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  side: THREE.DoubleSide
})
const mesh = new THREE.Mesh(geometry, material)

export default mesh
