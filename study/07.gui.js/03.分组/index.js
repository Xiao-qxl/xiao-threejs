import {GUI} from 'gui'

const obj = {
  color: 0x00ffff,
  specular: 0x00ffff
}
const gui = new GUI()

const matFolder = gui.addFolder('材质')

const ambientFolder = gui.addFolder('环境光')
ambientFolder.close() // 关闭
ambientFolder.open() // 打开

const dirFolder = gui.addFolder('平行光')
const dirFF1 = dirFolder.addFolder('平行光位置')
const dirFF2 = dirFolder.addFolder('平行光强度')
