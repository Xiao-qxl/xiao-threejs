import * as THREE from 'three'

// 批量创建多个长方体表示高楼层
const group1 = new THREE.Group()
group1.name = '高层'
for (let i = 0; i < 10; i++) {
  const geometry = new THREE.BoxGeometry(20, 60, 10)
  const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
  const mesh = new THREE.Mesh(geometry, material)
  mesh.name = '高楼' + (i + 1)
  mesh.position.set(i * 40, 0, 0)
  group1.add(mesh)
}
group1.position.set(0, 30, 0)

// 批量创建多个长方体表示低楼层
const group2 = new THREE.Group()
group2.name = '低层'
for (let i = 0; i < 10; i++) {
  const geometry = new THREE.BoxGeometry(20, 40, 10)
  const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
  const mesh = new THREE.Mesh(geometry, material)
  mesh.name = '低楼' + (i + 1)
  mesh.position.set(i * 40, 0, 0)
  group2.add(mesh)
}
group2.position.set(0, 20, 40)

// 创建组对象包含高层和低层
const group = new THREE.Group()
group.add(group1).add(group2)

// 递归遍历所有模型节点
group.traverse((child) => {
  // 过滤掉所有不是模型的节点
  if (child instanceof THREE.Mesh) {
    console.log(child.name)
    child.material.color.set(0xffff00)
  }
})

// 切换名称为高楼1的模型的颜色
group.getObjectByName('高楼1').material.color.set(0xff0000)

export default group
