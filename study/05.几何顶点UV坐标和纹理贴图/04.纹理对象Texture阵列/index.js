import * as THREE from 'three'

// 创建一个矩形平面几何体
const geometry = new THREE.PlaneGeometry(1000, 1000)
const texLoader = new THREE.TextureLoader()
const texture = texLoader.load('./public/tile.png')

// 设置阵列模式
texture.wrapS = THREE.RepeatWrapping
texture.wrapT = THREE.RepeatWrapping
texture.repeat.set(10, 10)

const material = new THREE.MeshLambertMaterial({
  // color: 0x00ffff,
  map: texture,
})
const mesh = new THREE.Mesh(geometry, material)
mesh.rotateX(-Math.PI / 2)

export default mesh
