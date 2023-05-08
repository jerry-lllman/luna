import type { AddComponentData } from '@/store/editor'
import LText from '@/components/LText'

const COMPONENT_MAP = { LText }

export default function ComponentRender(props: AddComponentData) {
  const Component = COMPONENT_MAP[props.name]
  return <Component {...props.props} />
}
