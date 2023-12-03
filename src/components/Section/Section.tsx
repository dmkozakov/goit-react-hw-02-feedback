import PropTypes from 'prop-types';
import { SectionBox } from './SectionBox.styled';
import { SectionTitle } from './SectionTitle.styled';
import { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: Props) {
  return (
    <SectionBox>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionBox>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
