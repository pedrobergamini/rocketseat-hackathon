import styled from 'styled-components';
// import { Card } from '@material-ui/core';

export const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  .description {
    margin: 10px;
    display: flex;
    flex-direction: column;
  }

  .aulas {
    margin: 10px;
  }

  .image-title {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 4px;

    img {
      width: 100%;
      height: 100%;
      /* margin-left: -50%; */
    }
  }

  .aulas {
    display: flex;
    flex-direction: column;
  }

  .cards {
    display: flex;
    flex-direction: row;

    > div {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin: 10px;
      padding: 100px auto;
    }
  }
`;
