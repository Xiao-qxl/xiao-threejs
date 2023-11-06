import * as THREE from "three"

// 类型化数组
const vertices = new Float32Array([
  // 编写定点坐标
  0, 0, 0,
  50, 0, 0,
  0, 100, 0,
  0, 0, 10,
  0, 0, 100,
  50, 0, 10
])

// 创建属性缓冲区对象BufferAttribute
// 3表示3个数据为一组
const attribute = new THREE.BufferAttribute(vertices, 3)

// 创建一个空的几何体对象
const geometry = new THREE.BufferGeometry()
// 设置几何体的顶点位置属性
geometry.attributes.position = attribute;

// 点渲染，定义一个点材质
const material = new THREE.PointsMaterial({
  color: 0xffff00,
  size: 20
})
const points = new THREE.Points(geometry, material)

export default points
