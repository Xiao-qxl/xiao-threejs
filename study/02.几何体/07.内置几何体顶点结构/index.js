import * as THREE from "three"

// 矩形平面(细分数：1 1)
const planeGeometry = new THREE.PlaneGeometry(100, 50, 1, 1)
// 长方体
const cubeGeometry = new THREE.BoxGeometry(100, 100, 200)
// 球体 细分数越多，球体越精细，默认32 16
const sphereGeometry = new THREE.SphereGeometry(200, 10, 10)

const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  side: THREE.DoubleSide,
  wireframe: true, // 边框
})
const mesh = new THREE.Mesh(sphereGeometry, material)

export default mesh
