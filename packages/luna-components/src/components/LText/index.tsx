import React from 'react'
import type { CommonDefaultPropsType } from '../../defaultProps'
import useComponentCommon from '../../hooks/useComponentCommon'

export interface LTextComponentPropsType extends CommonDefaultPropsType {
  text: string
  fontSize?: string
  fontFamily?: string
  fontWeight?: string
  fontStyle?: string
  textDecoration?: string
  lineHeight?: string
  // textAlign?: React.CSSProperties['textAlign']
  // tag 的类型是react 中的html标签名
  tag?: keyof JSX.IntrinsicElements
}


function LText(props: LTextComponentPropsType) {
  const { tag = 'div' } = props

  const { styleProps, handleClick } = useComponentCommon(props)

  return React.createElement(
    tag,
    { style: styleProps, onClick: handleClick },
    props.text,
  )

  // return (
  // 	<div style={styleProps} onClick={handleClick}>
  // 		{props.text}
  // 	</div>
  // )
}

LText.displayName = 'LText'

export default LText
