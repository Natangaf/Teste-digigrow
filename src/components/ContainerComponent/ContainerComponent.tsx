import { ReactNode } from 'react';
import { Container } from './_containerComponent';

interface ContainerComponentProps {
  children: ReactNode;
  alignitems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  gap?: number;
}

const ContainerComponent = ({
  children,
  alignitems = 'center',
  gap = 10,
}: ContainerComponentProps) => {

  return (
    <Container gap={gap} alignitems={alignitems} data-com="Container">
      {children}
    </Container>
  );
};

export default ContainerComponent;
