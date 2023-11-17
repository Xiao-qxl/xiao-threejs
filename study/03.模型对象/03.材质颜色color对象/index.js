import * as THREE from 'three'

const geometry = new THREE.BoxGeometry(100, 100, 100)
const material = new THREE.MeshBasicMaterial()
// 创建颜色Color对象
const color = new THREE.Color(0xff00ff)
material.color = color
// material.color.setHSL(0.5, 1, 0.5)
// material.color.setHex(0xff00ff)
// material.color.setRGB(0.5, 0, 0.5)
// 前端css颜色值设置
// material.color.setStyle('rgb(255, 0, 0)')
material.color.set(0xbbffaa)

const mesh = new THREE.Mesh(geometry, material)

export default mesh
