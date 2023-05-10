import type { AddComponentData } from '@/store/editor'
import { LText } from '@luna-cat/luna-components'

const COMPONENT_MAP = {
  LText,
}

export default function ComponentRender(props: AddComponentData) {
  const Component = COMPONENT_MAP[props.name]
  return <Component {...props.props} />
}
