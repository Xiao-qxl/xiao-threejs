import * as THREE from 'three'

// 创建长宽为100的平面
const geometry = new THREE.PlaneGeometry(100, 100)

// 缩放2倍
geometry.scale(2, 2, 2)
// 沿着X轴顺时针旋转45度
geometry.rotateX(-Math.PI / 3)
// 沿着X轴平移100
geometry.translate(100, 0, 0)
// 居中 (默认是中心点在原点)
geometry.center()

// 创建材质
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  side: THREE.DoubleSide,
})

// 创建网格
const mesh = new THREE.Mesh(geometry, material)

// 导出网格
export default mesh
