import * as THREE from 'three'

// 创建一个矩形平面几何体
const geometry = new THREE.PlaneGeometry(238, 768)
geometry.scale(0.4, 0.4, 0.4)
const texLoader = new THREE.TextureLoader()

const material = new THREE.MeshLambertMaterial({
  map: texLoader.load('./public/sly3.png'),
  transparent: true,
})
const mesh = new THREE.Mesh(geometry, material)
mesh.rotateX(-Math.PI / 2)

export default mesh
