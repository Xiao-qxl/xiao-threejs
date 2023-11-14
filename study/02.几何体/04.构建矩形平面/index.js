import * as THREE from "three"

const vertices = new Float32Array([
  // 矩形平面的第一个三角形
  0, 0, 0,
  80, 0, 0,
  80, 80, 0,
  // 矩形平面的第二个三角形
  0, 0, 0,
  80, 80, 0,
  0, 80, 0
])

const attribute = new THREE.BufferAttribute(vertices, 3)

const geometry = new THREE.BufferGeometry()
geometry.attributes.position = attribute;

const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  side: THREE.DoubleSide
})
const mesh = new THREE.Mesh(geometry, material)

export default mesh
