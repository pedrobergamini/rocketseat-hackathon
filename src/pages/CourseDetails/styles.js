import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .activity-element {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    .activity-link {
      display: flex;
      overflow: hidden;
      width: 100%;
      height: 200px;
      overflow: hidden;

      img {
        width: auto;
        height: 100%;
        /* margin-left: -50%; */
      }
    }
  }
`;

export const Title = styled.h1``;
export const Description = styled.p`
  font-size: 30px;
  flex-wrap: wrap;

  & .show {
  }
`;
