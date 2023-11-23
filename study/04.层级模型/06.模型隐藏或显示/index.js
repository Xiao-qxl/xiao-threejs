import * as THREE from 'three'

const geometry = new THREE.BoxGeometry(50, 50, 50)
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})

const mesh = new THREE.Mesh(geometry, material)
const mesh1 = new THREE.Mesh(geometry, material)
mesh1.position.x = 100
const mesh3 = new THREE.Mesh(geometry, material)
mesh3.position.x = 200

const group = new THREE.Group()
group.add(mesh).add(mesh1).add(mesh3)
group.visible = false
setTimeout(() => {
  group.visible = true
}, 1000)

// 隐藏mesh
mesh.visible = false

changeVisibility(mesh)

function changeVisibility(mesh) {
  mesh.visible = !mesh.visible
  setTimeout(() => {
    changeVisibility(mesh)
  }, 500)
}


export default group
