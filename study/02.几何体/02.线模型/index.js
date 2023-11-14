import * as THREE from "three"

// 类型化数组
const vertices = new Float32Array([
  // 编写定点坐标
  0, 0, 0,
  50, 0, 0,
  0, 100, 0,
  0, 0, 10,
  0, 0, 100,
  50, 0, 10,
])

const attribute = new THREE.BufferAttribute(vertices, 3)

const geometry = new THREE.BufferGeometry()
geometry.attributes.position = attribute;

// 线渲染，定义一个线材质
const material = new THREE.LineBasicMaterial({
  color: 0x00ff00,
})
const line = new THREE.Line(geometry, material)
const lineLoop = new THREE.LineLoop(geometry, material)
const lineSegments = new THREE.LineSegments(geometry, material)

export default {
  line,
  lineLoop,
  lineSegments
}
