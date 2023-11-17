import * as THREE from 'three'

const geometry = new THREE.BoxGeometry(100, 100, 100)
const material = new THREE.MeshBasicMaterial()

// 设置颜色
material.color.setHex(0xbbffaa)
// 开启透明
material.transparent = true
// 设置透明度为0.8
material.opacity = 0.8

// 设置面属性 FrontSide(正面) BackSide(背面) DoubleSide(双面)
material.side = THREE.DoubleSide

const mesh = new THREE.Mesh(geometry, material)

export default mesh
