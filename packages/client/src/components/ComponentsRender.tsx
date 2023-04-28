import { ComponentData } from "@/store/editor";
import LText from "@/components/LText";


const COMPONENT_MAP = {
	LText
}

export default function ComponentRender(props: ComponentData) {
	const Component = COMPONENT_MAP[props.name]
	return <Component {...props.props} />
}