import { create } from 'zustand'
import { nanoid } from 'nanoid'
import { ComponentPropsType } from '@/defaultProps'

const NAME_TYPES = ['LText'] as const

/**
 * @description 所有组件的类型
 */
export type ComponentTypes = typeof NAME_TYPES[number]

export interface EditorProps {
	// 渲染数组
	components: ComponentData[]
	// 当前编辑元素 id
	currentElement: string
}

export interface ComponentData {
	props: ComponentPropsType
	// 组件唯一 id
	id: string
	// 组件库名称 LText、LImage 等
	name: ComponentTypes
}

const useEditorStore = create<EditorProps>((set) => ({
	components: [
		{
			props: {
				text: "aaaa",
				actionType: 'url',
				url: 'https://www.bilibili.com'
			},
			id: nanoid(),
			name: 'LText',
		},
		{
			props: {
				text: "aaanbbbba",
				background: '#fff'
			},
			id: nanoid(),
			name: 'LText',
		},
	],
	currentElement: '',
}))

export default useEditorStore