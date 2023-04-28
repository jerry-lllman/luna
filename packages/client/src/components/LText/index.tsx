import { LTextPropsType, getStyle } from '@/defaultProps'

function LText(props: LTextPropsType) {
	const styleProps = getStyle(props)

	const clickHandle = () => {
		if (props.actionType === 'url') {
			window.open(props.url)
		}
	}

	return (
		<div style={styleProps} onClick={clickHandle}>
			{props.text}
		</div>
	)
}

LText.displayName = 'LText'


export default LText