import * as THREE from 'three'

const geometry = new THREE.BoxGeometry(100, 100, 100)
const material = new THREE.MeshBasicMaterial({
  color: 0xff00ff
})
const mesh = new THREE.Mesh(geometry, material)

// 创建欧拉对象
const euler = new THREE.Euler(0, Math.PI, 0)
euler.x = Math.PI / 2

mesh.rotation.x += Math.PI / 3
mesh.rotation.y += Math.PI / 4

console.log(mesh.rotation)

mesh.rotateX(Math.PI / 4)

export default mesh
