import * as THREE from "three"

const geometry = new THREE.BufferGeometry()

const vertices = new Float32Array([
  0, 0, 0,
  80, 0, 0,
  80, 80, 0,

  0, 0, 0,
  80, 80, 0,
  0, 80, 0
])
// 创建属性缓冲区对象BufferAttribute
const attribute = new THREE.BufferAttribute(vertices, 3)
geometry.attributes.position = attribute;

const normals = new Float32Array([
  0, 0, 1, // 顶点1法向量
  0, 0, 1, // 顶点2法向量
  0, 0, 1, // 顶点3法向量

  0, 0, 1, // 顶点4法向量
  0, 0, 1, // 顶点5法向量
  0, 0, 1  // 顶点6法向量
])
// 定义顶点法线数据或者顶点法向量数据
geometry.attributes.normal = new THREE.BufferAttribute(normals, 3)

const material = new THREE.MeshLambertMaterial({
  color: 0x0000ff,
  side: THREE.DoubleSide
})
const mesh = new THREE.Mesh(geometry, material)

export default mesh
