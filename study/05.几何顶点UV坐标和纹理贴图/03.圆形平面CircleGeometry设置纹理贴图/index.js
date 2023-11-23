import * as THREE from 'three'

const geometry = new THREE.CircleGeometry(50, 100)

const loadTex = new THREE.TextureLoader()
const texture = loadTex.load('./public/cartoon.png')

const material = new THREE.MeshLambertMaterial({
  map: texture,
})
const mesh = new THREE.Mesh(geometry, material)

export default mesh
