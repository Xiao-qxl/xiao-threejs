import * as THREE from 'three'

const geometry = new THREE.BoxGeometry(50, 50, 50)
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})

const mesh1 = new THREE.Mesh(geometry, material)
const mesh2 = new THREE.Mesh(geometry, material)
mesh2.translateX(100)

// 创建一个组对象
const group = new THREE.Group()
// .add方法可以同时添加多个子对象
group.add(mesh1, mesh2) // 把网格模型添加到组对象中，作为group的子对象

group.translateY(100)

export default group
