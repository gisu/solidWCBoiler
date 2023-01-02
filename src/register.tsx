import { customElement } from 'solid-element'
import TestComponent from './components/TestComponent'

export function registerWebComponents() {
  customElement('test-component', getInitialProps(), TestComponent)
}

function getInitialProps() {
  return {}
}
