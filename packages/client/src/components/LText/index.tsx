import { pick } from 'lodash-es'

import { LTextProps, getStylePropNames } from '@/defaultProps'


function LText(props: LTextProps) {

	const styleProps = pick<React.CSSProperties>(props, getStylePropNames(props))

	return (
		<div style={styleProps}>
			{props.text}
		</div>
	)
}

LText.displayName = 'LText'


export default LText