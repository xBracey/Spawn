import styled from 'styled-components';
import { Link } from '@reach/router';

export const Container = styled.div`
  width: calc(320px - 25px);
  height: calc(100% - 25px);
  background-color: ${({ theme }): string => theme.pb};
  border-radius: 10px;
  padding: 25px 0 0 35px;
  margin-right: 50px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const StyledLink = styled(Link) <{ isCurrent?: boolean }>`
  font-weight: 500;
  font-size: 1rem;
  margin: 5px 0;
  color: ${({ theme }): string => theme.t};

  &:hover {
    opacity: 0.7;
  }
`;
