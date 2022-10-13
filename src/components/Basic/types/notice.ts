export interface NoticeExpose {
  show: (options: NoticeOptions)=> void
  hide: ()=> void
}
export interface NoticeOptions {
  duration?: number,
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'top' | 'bottom',
  icon?: string,
  label: string
}