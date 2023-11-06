import { config } from '@/tmui/components/tm-message/interface';
export interface MessageExpose {
  show: (options: MessageOptions)=> void
  hide: ()=> void
}
export interface MessageOptions extends config {
  width?: number,
  height?: number
}