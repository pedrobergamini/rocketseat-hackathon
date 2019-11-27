import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 30px;
    color: #aa5cb2;
  }

  ul {
    margin-top: 20px;
    width: 100%;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      background: #fff;
      border-radius: 4px;
      padding: 10px 20px;
      width: 100%;

      main {
        display: flex;
        align-items: center;

        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin-right: 25px;
        }

        div {
          display: flex;
          flex-direction: column;

          strong {
            font-size: 14px;
            color: #333;
            font-weight: normal;
          }

          span {
            margin-top: 10px;
            font-size: 12px;
            color: #999;
          }
        }
      }

      aside {
        strong {
          color: #999;
          font-weight: normal;
          opacity: 0.8;
        }
      }
    }
  }
`;
