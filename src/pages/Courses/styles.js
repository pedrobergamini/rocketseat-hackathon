import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;

    li {
      display: flex;
      flex-direction: column;
      border-radius: 8px;

      background: #ddd;
      margin-bottom: 20px;

      cursor: pointer;

      &:hover {
        transform: scale(1.05);
        opacity: 0.7;
      }

      img {
        border-radius: 8px;
        width: 100%;
        height: 150px;
      }

      strong {
        font-size: 18px;
        text-align: center;
        font-weight: normal;
        margin-top: 10px;
        padding-bottom: 20px;
      }
    }
  }
`;
