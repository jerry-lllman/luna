
import { ComponentPropsType } from '@luna-cat/luna-components'
import styles from './index.module.less'

interface EditWrapperProps {
  id: string
  setActiveId: (id: string) => void
  componentProps: ComponentPropsType
  children: React.ReactNode
}

export default function EditWrapper(props: EditWrapperProps) {
  const { id, setActiveId, componentProps, children } = props

  const style = {
    top: componentProps.top,
    left: componentProps.left,
    width: componentProps.width,
    height: componentProps.height,
  }

  return (
    <div className={styles.edit_wrapper} style={style} onClick={() => setActiveId(id)}>
      {children}
    </div>
  )
}
