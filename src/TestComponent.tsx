interface IProps {
  name: string
}

function TestComponent (props: IProps) {
  return (
    <div class="text-red-500 p-10">
      Hello World {props.name}
    </div>
  )
}

export default TestComponent
