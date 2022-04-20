import tw from 'tailwind-styled-components';

const Container = tw.div`
  ${(p) => (p.row && "flex-row")}
  ${(p) => (p.col && "flex-col")}
  flex
  flex-wrap
  justify-center
  items-center
  my-4
`

export default Container;