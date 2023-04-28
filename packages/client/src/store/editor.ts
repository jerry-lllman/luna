import { create } from 'zustand'
import { nanoid } from 'nanoid'
import { LTextProps } from '@/defaultProps'

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
	props: LTextProps
	// 组件唯一 id
	id: string
	// 组件库名称 LText、LImage 等
	name: ComponentTypes
}

const useEditorStore = create<EditorProps>((set) => ({
	components: [],
	currentElement: '',
}))

export default useEditorStore