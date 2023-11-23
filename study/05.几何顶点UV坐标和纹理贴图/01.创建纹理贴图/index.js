import * as THREE from 'three'

const geometry = new THREE.SphereGeometry(100)
// 创建一个纹理加载器对象
const loadTex = new THREE.TextureLoader()
// 加载图片返回一个纹理对象texture
const texture = loadTex.load('./public/earth.png')
const material = new THREE.MeshLambertMaterial({
  // 设置材质的颜色贴图
  map: texture,
})
const mesh = new THREE.Mesh(geometry, material)

export default mesh
