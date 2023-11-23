import * as THREE from 'three'

const geometry = new THREE.BoxGeometry(50, 50, 50)
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})

const mesh = new THREE.Mesh(geometry, material)
mesh.position.x = 50
// 可视化mesh的局部坐标系
const meshAxesHelper = new THREE.AxesHelper(200)
mesh.add(meshAxesHelper)

const group = new THREE.Group()
group.add(mesh)
group.position.x = 50

/*
* 本地坐标和世界坐标
* 本地坐标是相对于物体的坐标系
* 世界坐标是相对于场景的坐标系
* */
const v3 = new THREE.Vector3()
mesh.getWorldPosition(v3)
console.log('世界坐标', v3)

export default group
