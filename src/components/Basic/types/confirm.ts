export interface ConfirmExpose {
  showConfirm: (options: ConfirmOptions)=> void
}
export interface ConfirmOptions {
  // 标题
  title?: string
  // 内容
  content?: string
  // 确定按钮文字
  okText?: string
  // 是否显示取消按钮
  hideCancel?: boolean
  // 是否允许点击遮罩关闭
  overlayClick?: boolean
  // 确认回调
  onConfirm?: Function
  // 取消回调
  onCancel?: Function
  // 关闭回调
  onClose?: Function
  // 用于异步关闭
  beforeClose?: ()=> Promise<boolean>
  [propName: string]: any
}