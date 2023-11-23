import * as THREE from 'three'

const geometry = new THREE.BoxGeometry(100, 100)

// 类型数组创建顶点数据
const vertices = new Float32Array([
  0, 0, 0,   // 顶点1坐标
  160, 0, 0, // 顶点2坐标
  160, 80, 0, // 顶点3坐标
  0, 80, 0, // 顶点4坐标
])
const attributes = new THREE.BufferAttribute(vertices, 3)
geometry.setAttribute('position', attributes)

// 创建顶点索引数据
const indexes = new Uint16Array([
  0, 1, 2, // 三角形1
  0, 2, 3, // 三角形2
])
geometry.setIndex(new THREE.BufferAttribute(indexes, 1))

// 自定义UV坐标
const uvs = new Float32Array([
  0.0, 0.0, // 图片左下角
  1.0, 0.0, // 图片右下角
  1.0, 1.0, // 图片右上角
  0.0, 1.0, // 图片左上角
])
geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))

// 创建一个纹理加载器对象
const loadTex = new THREE.TextureLoader()
// 加载图片返回一个纹理对象texture
const texture = loadTex.load('./public/earth.png')
const material = new THREE.MeshLambertMaterial({
  // color: 0xffffff,
  // 设置材质的颜色贴图
  map: texture,
})
const mesh = new THREE.Mesh(geometry, material)

export default mesh
