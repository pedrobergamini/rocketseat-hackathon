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
      justify-content: flex-end;

      height: 150px;
      border-radius: 12px;
      background: url('https://mundohacker.net.br/wp-content/uploads/2019/03/teste-de-programacao-emprego.jpg')
        no-repeat center;
      background-size: cover;
      margin-bottom: 20px;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
        opacity: 0.7;
      }

      strong {
        color: #fff;
        font-size: 20px;
        text-align: center;
        margin-top: 10px;
        padding-bottom: 20px;
      }
    }
  }
`;
