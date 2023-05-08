import { lazy } from 'react'
import type { ComponentPropsType } from './defaultProps'
const TextArea = lazy(() => import('antd/es/input/TextArea'))
const InputNumber = lazy(() => import('antd/es/input-number'))
const Slider = lazy(() => import('antd/es/slider'))
const Select = lazy(() => import('antd/es/select'))
const RadioGroup = lazy(() => import('antd/es/radio/group'))

export interface PropToForm {
	label?: string
	value?: string // 组件的值
	valueProp?: string // 自定义组件的值的属性名，默认用 value 作为组件的值的 key
	eventNames?: string[] // 更新组件的 store 事件名称，默认为 onChange
	component: React.ComponentType // 渲染的组件
	extraProps?: { [key: string]: any }
}

export type PropsToForms = {
	[P in keyof ComponentPropsType]?: PropToForm
}

export const mapPropsToForms: PropsToForms = {
	text: {
		label: '文本',
		extraProps: {
			rows: 3,
			placeholder: '请输入内容',
			style: { resize: 'none' },
			onChange: (e: any) => e.target.value
		},
		component: TextArea,
	},
	fontSize: {
		label: '字号',
		component: InputNumber,
		extraProps: {
			min: 12,
			max: 100,
			step: 1,
			formatter: (value: number) => `${value}px`,
      parser: (value: string) => value!.replace('px', ''),
			onChange: (value: number) => value,
		}
	},
	lineHeight: {
		label: '行高',
		component: Slider,
		extraProps: {
			min: 0,
			max: 3,
			step: 0.1,
			onChange: (value: number) => value,
		}
	},
	fontFamily: {
		label: '字体',
		component: Select,
		extraProps: {
			options: [
				{ label: '默认', value: 'sans-serif' },
				{ label: '宋体', value: 'SimSun' },
				{ label: '黑体', value: 'SimHei' },
				{ label: '微软雅黑', value: 'Microsoft YaHei' },
				{ label: '楷体', value: 'KaiTi' },
				{ label: '仿宋', value: 'FangSong' },
				{ label: '新宋体', value: 'NSimSun' },
				{ label: 'Arial', value: 'Arial, sans-serif' },
				{ label: 'Times New Roman', value: 'Times New Roman, serif' },
				{ label: 'Georgia', value: 'Georgia, serif' },
				{ label: 'Verdana', value: 'Verdana, sans-serif' },
				{ label: 'Courier New', value: 'Courier New, monospace' },
			],
			onChange: (value: number) => value,
		}
	},
	textAlign: {
		label: '对齐',
		component: RadioGroup,
		extraProps: {
			optionType: 'button',
			options: [
				{ label: '左对齐', value: 'left' },
				{ label: '居中', value: 'center' },
				{ label: '右对齐', value: 'right' }
			],
			onChange: (e: any) => e.target.value
		}
	}
}

