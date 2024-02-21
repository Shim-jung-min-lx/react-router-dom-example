import styled from 'styled-components'

const SimpleButton = styled.button`
    color: white;
    background-color: green;
`;
const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;
/* 주의 */
// 다른 컴포넌트를 감쌀 때 그 컴포넌트가 styled 컴포넌트로 만든것이 아닌 일반 컴포넌트라면 추가 조치 필요

const ReactButton = props => {
  // console.log('props', props)
  return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`

const PrimaryButton = styled.button`
  border: none;
  color: ${props => props.primary ? 'white' : '#735aff'};
  background-color: ${props => props.primary ? '#735aff' : 'transparent'};
`

function App() {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>ReactLarge</ReactLargeButton>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary>Normal</PrimaryButton>
    </div>
  );
}

export default App;
