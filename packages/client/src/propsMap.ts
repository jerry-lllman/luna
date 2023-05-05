import { lazy } from 'react';
import { ComponentPropsType } from './defaultProps'
const Input = lazy(() => import('antd/es/input'))

export interface PropToForm {
	component:  React.LazyExoticComponent<any>
	value?: string
}

export type PropsToForms = {
	[P in keyof ComponentPropsType]?: PropToForm
}

export const mapPropsToForms: PropsToForms = {
	text: {
		component: Input,
	}
}

