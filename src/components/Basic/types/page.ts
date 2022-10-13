import { ConfirmOptions } from "./confirm";
import { MessageOptions } from "./message";
import { NoticeOptions } from "./notice";

export interface TMAppAction {
  setTheme: (color: string)=> void,
  setDark: (dark: boolean)=> void
}

export interface PageActionType {
  createConfirm: (options: ConfirmOptions)=> void
  createNotice: (options: NoticeOptions)=> void
  closeNotice: ()=> void
  createMessage: (options: MessageOptions)=> void
  closeMessage: ()=> void
  setProps: (props: PageProps)=> void
}

export interface PageProps {
  darkColor?: string,
  color?: string,
  [propName: string]: any
}