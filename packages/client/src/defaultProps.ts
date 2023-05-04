interface CommonDefaultPropsType {
	actionType?: string,
	url?: string,

	// size
	height?: string,
	width?: string,
	paddingLeft?: string,
	paddingRight?: string,
	paddingTop?: string,
	paddingBottom?: string,

	// border type
	borderStyle?: string,
	borderColor?: string,
	borderWidth?: string,
	borderRadius?: string,

	// shadow and opacity
	boxShadow?: string,
	opacity?: number,

	// position
	position?: React.CSSProperties["position"],
	left?: string,
	top?: string,
	right?: string,

	// color
	color?: React.CSSProperties["color"],
	background?: React.CSSProperties["background"]
}

export interface TextComponentPropsType extends CommonDefaultPropsType {
	text: string,
	fontSize?: string,
	fontFamily?: string,
	fontWeight?: string,
	fontStyle?: string,
	textDecoration?: string,
	lineHeight?: string,
	textAlign?: React.CSSProperties['textAlign'],
	// tag 的类型是react 中的html标签名
	tag?: keyof JSX.IntrinsicElements
}

// 所有组件的 props
export type ComponentPropsType = TextComponentPropsType

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
	background: ''
}


const textDefaultProps: TextComponentPropsType = {
	// basic props
	text: '正文内容',
	fontSize: '14px',
	fontFamily: '',
	fontWeight: 'normal',
	fontStyle: 'normal',
	textDecoration: 'none',
	lineHeight: '1',
	textAlign: 'left',
	...commonDefaultProps
}