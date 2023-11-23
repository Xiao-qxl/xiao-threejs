import * as THREE from 'three'

// 长方体的几何中心默认与本地坐标的原点重合
const geometry = new THREE.BoxGeometry(50, 50, 50)
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})

const mesh = new THREE.Mesh(geometry, material)
const mesh1 = new THREE.Mesh(geometry, material)
mesh1.position.x = 100
const mesh3 = new THREE.Mesh(geometry, material)
mesh3.position.x = 200

const group = new THREE.Group()
group.add(mesh).add(mesh1).add(mesh3)

// .remove(child) 移除子节点
group.remove(mesh1)
group.remove(mesh, mesh3)

export default group
