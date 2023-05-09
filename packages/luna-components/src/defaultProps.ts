import { LTextComponentPropsType } from "@/components/LText"

export interface CommonDefaultPropsType {
  actionType?: string
  url?: string

  // size
  height?: string
  width?: string
  paddingLeft?: string
  paddingRight?: string
  paddingTop?: string
  paddingBottom?: string

  // border type
  borderStyle?: string
  borderColor?: string
  borderWidth?: string
  borderRadius?: string

  // shadow and opacity
  boxShadow?: string
  opacity?: number

  // position
  position?: React.CSSProperties['position']
  left?: string
  top?: string
  right?: string

  // color
  color?: React.CSSProperties['color']
  background?: React.CSSProperties['background']
}

// 所有组件的 props
export type ComponentPropsType = LTextComponentPropsType

const commonDefaultProps: CommonDefaultPropsType = {
  // actions
  actionType: '',
  url: '',

  // size
  height: '',
  width: '',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',

  // border type
  borderStyle: 'none',
  borderColor: '#000000',
  borderWidth: '0px',
  borderRadius: '0px',

  // shadow and opacity
  boxShadow: 'none',
  opacity: 1,

  // position
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0',

  color: '#000',
  background: '',
}

const textDefaultProps: LTextComponentPropsType = {
  // basic props
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  ...commonDefaultProps,
}
