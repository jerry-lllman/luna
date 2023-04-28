import { without } from 'lodash-es'

export const commonDefaultProps = {
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
}

export const textDefaultProps = {
	// basic props
	text: '正文内容',
	fontSize: '14px',
	fontFamily: '',
	fontWeight: 'normal',
	fontStyle: 'normal',
	textDecoration: 'none',
	lineHeight: '1',
	textAlign: 'left',
	color: '#000',
	backgroundColor: '',
	...commonDefaultProps
}

export type LTextProps = React.CSSProperties & typeof textDefaultProps

const excludedTextProps = ['actionType', 'url', 'text'] as const;

// 排除一些特定属性后的到 style 相关的属性名称
export function getStylePropNames(props: Record<string, any>) {
	return without(Object.keys(props), ...excludedTextProps)
}

// // 获取 textDefaultProps 中剩余的 key，即排除 excludedTextProps 后的所有 key
// export const stylePropNames = without(Object.keys(textDefaultProps), ...excludedTextProps)
 
