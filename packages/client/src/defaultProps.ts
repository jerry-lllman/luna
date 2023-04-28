import { without, pick } from 'lodash-es'

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

	color?: React.CSSProperties["color"],
	background?: React.CSSProperties["background"]
}


export interface LTextPropsType extends CommonDefaultPropsType {
	text: string,
	fontSize?: string,
	fontFamily?: string,
	fontWeight?: string,
	fontStyle?: string,
	textDecoration?: string,
	lineHeight?: string,
	textAlign?: React.CSSProperties['textAlign'],
}


export type ComponentPropsType = LTextPropsType



const excludedTextProps = ['actionType', 'url', 'text'] as const;


export const commonDefaultProps: CommonDefaultPropsType = {
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


export const textDefaultProps: LTextPropsType = {
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

type StyleProps = Omit<ComponentPropsType, typeof excludedTextProps[number]>

// 排除一些特定属性后的到 style 相关的属性名称
export function getStylePropNames(props: ComponentPropsType) {
	return without(Object.keys(props), ...excludedTextProps) as unknown as keyof StyleProps
}

export function getStyle(props: ComponentPropsType): StyleProps {
	return pick(props, getStylePropNames(props))
}