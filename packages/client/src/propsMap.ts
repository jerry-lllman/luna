import { lazy } from 'react';
import type { ComponentPropsType } from './defaultProps'
const TextArea = lazy(() => import('antd/es/input/TextArea'))
const InputNumber = lazy(() => import('antd/es/input-number'))
const Slider = lazy(() => import('antd/es/slider'))

export interface PropToForm {
	component: React.LazyExoticComponent<any>
	value?: string
	extraProps?: { [key: string]: any }
	label?: string
}

export type PropsToForms = {
	[P in keyof ComponentPropsType]?: PropToForm
}

export const mapPropsToForms: PropsToForms = {
	text: {
		label: '文本',
		component: TextArea,
		extraProps: {
			rows: 3,
			placeholder: '请输入内容',
			style: { resize: 'none' }
		}
	},
	fontSize: {
		label: '字体大小',
		component: InputNumber
	},
	lineHeight: {
		label: '行高',
		component: Slider,
		extraProps: {
			min: 0,
			max: 3,
			step: 0.1
		}
	}
}

