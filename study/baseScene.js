import * as THREE from 'three'
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

class BaseScene {
  constructor(
    {el} = {
      el: document.body
    },) {
    this.width = window.innerWidth
    this.height = window.innerHeight

    this.scene = new THREE.Scene()
    this.camera = this.initCamera()
    this.renderer = this.initRenderer(el)
    this.ambientLight = this.initAmbientLight()
    this.pointLight = this.initPointLight()
    this.directionalLight = this.initDirectionalLight()
    this.gridHelper = this.initGridHelper()
    this.axesHelper = this.initAxesHelper()

    this.init()
  }

  // 初始化
  init() {
    this.scene.add(this.camera)
    this.scene.add(this.ambientLight)
    this.scene.add(this.directionalLight)
    // this.scene.add(this.pointLight)
    // this.scene.add(this.gridHelper)
    this.scene.add(this.axesHelper)
    const controls = new OrbitControls(this.camera, this.renderer.domElement)

    this.render()
    this.resize()
  }

  // 初始化坐标系
  initAxesHelper() {
    const axesHelper = new THREE.AxesHelper(300)
    return axesHelper
  }


  // 初始化辅助网格地面
  initGridHelper() {
    const gridHelper = new THREE.GridHelper(300, 10, 0xffffff, 0xffffff)
    gridHelper.position.y = -1
    return gridHelper
  }

  // 初始化相机
  initCamera() {
    const camera = new THREE.PerspectiveCamera(
      30, this.width / this.height, 1, 3000
    )
    // 设置相机位置800, 800, 800
    camera.position.set(800, 800, 800)
    /*
    * lookAt()方法用于将相机朝向指定的目标点，并且调整相机的上下向量，使相机朝向上向量方向。
    * 而position.set()方法用于设置相机的位置坐标。
    * 为了使lookAt()方法正常工作，需要先设置相机的位置，再使用lookAt()方法调整相机的方向。
    * 因为lookAt()方法会根据相机的位置和目标点来计算相机的朝向方向。
    * 如果先使用lookAt()方法调整相机的方向，再设置相机的位置，那么相机的朝向方向可能会与目标点的位置重合，导致无法正确设置相机的位置。
    * 因此，一般情况下，设置相机的方向应该在设置相机的位置之后进行。
    * */
    camera.lookAt(0, 0, 0) // lookAt()方法设置相机方向需要在相机位置设置之后
    return camera
  }

  // 初始化环境光
  initAmbientLight() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    return ambientLight
  }

  // 初始化平行光
  initDirectionalLight() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(400, 200, 300)
    return directionalLight
  }

  // 初始化点光源
  initPointLight() {
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(300, 300, 0)
    return pointLight
  }

  // 渲染器
  initRenderer(el = document.body) {
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(this.width, this.height)
    renderer.outputEncoding = THREE.sRGBEncoding
    el.appendChild(renderer.domElement)
    return renderer
  }

  // 渲染
  render() {
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(() => this.render())
  }

  // 画布跟随窗口变化
  resize() {
    window.onresize = () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    }
  }

  // 添加正方形模型
  addSquareModel() {
    const geometry = new THREE.BoxGeometry(100, 100, 100)
    const material = new THREE.MeshLambertMaterial({color: 0x00ff00})
    const square = new THREE.Mesh(geometry, material)
    square.position.set(0, 0, 0)
    this.scene.add(square)
  }
}

export default BaseScene
