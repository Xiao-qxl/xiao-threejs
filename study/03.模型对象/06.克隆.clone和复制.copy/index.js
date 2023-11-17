import * as THREE from 'three'

const geometry = new THREE.BoxGeometry(100, 100, 100)
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})

const mesh = new THREE.Mesh(geometry, material)

const mesh2 = mesh.clone()
mesh2.position.x = 200
mesh2.material.color.set(0xff0000)

// 材质克隆
mesh2.material = mesh.material.clone()
mesh2.material.color.set(0xffff00)

mesh.position.copy(mesh2.position)
mesh.position.y += 200

const v1 = new THREE.Vector3(1, 2, 3)
const v2 = v1.clone()
const v3 = new THREE.Vector3(4, 5, 6)
v3.copy(v1)

// 分别打印v1, v2, v3
console.log('v1', v1)
console.log('v2', v2)
console.log('v3', v3)

export default [
  mesh,
  mesh2
]
