import * as THREE from "three"

const vertices = new Float32Array([
  0, 0, 0,
  50, 0, 0,
  0, 100, 0,
  0, 0, 10,
  0, 0, 100,
  50, 0, 10
])

const attribute = new THREE.BufferAttribute(vertices, 3)

const geometry = new THREE.BufferGeometry()
geometry.attributes.position = attribute;

// 网格渲染,默认逆时针可见
const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  side: THREE.DoubleSide
})
const mesh = new THREE.Mesh(geometry, material)

export default mesh
