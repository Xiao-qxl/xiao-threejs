import * as THREE from 'three'

const geometry = new THREE.BoxGeometry(100, 100, 100)
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})

const mesh = new THREE.Mesh(geometry, material)

const mesh2 = new THREE.Mesh(geometry, material)
mesh2.position.set(150, 0, 150)

// 共享材质，一起改变，共享几何体同理
mesh.material.color.set(0xff0000)
mesh.geometry.translate(0, 100, 0)

export default [
  mesh,
  mesh2
]
