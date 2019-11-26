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

      background: #ddd;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 150px;
      }

      strong {
        font-size: 20px;
        text-align: center;
        font-weight: normal;
        margin-top: 10px;
        padding-bottom: 20px;
      }

      span {
        text-align: center;
        color: #333;
      }
    }
  }
`;
