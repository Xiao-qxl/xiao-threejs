import * as THREE from 'three'

// 长方体的几何中心默认与本地坐标的原点重合
const geometry = new THREE.BoxGeometry(50, 50, 50)
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})

const mesh = new THREE.Mesh(geometry, material)
// geometry.translate(50 / 2, 0, 0)

const group = new THREE.Group()
group.add(mesh)
group.position.x = 50

rotateMesh()

function rotateMesh() {
  // 围绕局部坐标系旋转
  mesh.rotateY(0.01)
  requestAnimationFrame(rotateMesh)
}


export default group
