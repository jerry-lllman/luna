import { ComponentData } from "./store/editor";

export const defaultTemplates: Omit<ComponentData, 'id'>[] = [
	{
		name: 'LText',
		props: {
			text: '大标题',
			fontSize: '30px',
			fontWeight: 'bold',
			tag: 'h2'
		}
	},
	{
		name: 'LText',
		props: {
			text: '正文内容',
			tag: 'p'
		}
	},
	{
		name: 'LText',
		props: {

			text: '链接',
			color: '#1890ff',
			textDecoration: 'underline',
			tag: 'a'
		}
	},
	{
		name: 'LText',
		props: {
			background: '#1890ff',
			borderRadius: '5px',
			paddingTop: '3px',
			paddingBottom: '3px',
			paddingLeft: '5px',
			paddingRight: '5px',
			color: 'white',
			text: '按钮',
			tag: 'button'
		}
	}
]