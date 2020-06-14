import styled from '@emotion/styled'

export const StyledDrawer = styled.div`
  display: flex;
  width: 100%;
  height: calc(90vh + 2px);
  position: fixed;
  top: -1px;
  left: 0;
  z-index: 997;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0.2s;
  transition-delay: 0;
  transform-origin: top;
  ::after {
    content: ' ';
    position: absolute;
    top: -1px;
    left: 0;
    width: calc(50% + 8px);
    height: 100%;
    z-index: 996;
  }
`
