import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 80px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  strong {
    color: #000;
    font-size: 30px;
    border-bottom: 3px solid #aa5cb2;
    padding-bottom: 4px;
  }
`;

export const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Courses = styled(Link)`
  text-decoration: none;
  color: #aa5cb2;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 4px;

  &:hover {
    transform: scale(1.05);
  }
`;
