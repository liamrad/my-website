// 引入进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 全局进度条的配置
// See https://github.com/rstacruz/nprogress#configuration
NProgress.configure({
  // easing: 'ease', // 动画方式
  // speed: 1000, // 递增进度条的速度
  // showSpinner: false, // 是否显示加载ico
  // trickleSpeed: 200, // 自动递增间隔
  // minimum: 0.3, // 初始化时的最小百分比
  showSpinner: false,
})

export default {
  // 打开进度条
  start() {
    NProgress.start()
  },
  // 关闭进度条
  done() {
    NProgress.done()
  },
}
