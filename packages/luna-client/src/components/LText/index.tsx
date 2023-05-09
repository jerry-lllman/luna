import React from 'react'
import type { TextComponentPropsType } from '@/defaultProps'
import useComponentCommon from '@/hooks/useComponentCommon'

function LText(props: TextComponentPropsType) {
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
