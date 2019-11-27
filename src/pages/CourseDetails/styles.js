import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .image-title {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: auto;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      /* margin-left: -50%; */
    }
  }

  .activity-element {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    .activity-link {
      display: flex;
      width: 100%;
      height: 30vh;
      overflow: hidden;
      background: url(https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
      img {
        display: block;
        max-width: 100%;
        max-height: 95px;
        width: 100%;
        height: auto;
        /* margin-left: -50%; */
      }
    }
  }
`;

export const Title = styled.h2`
  font: SemiBold 36px/45px Halyard Display;
`;

export const Description = styled.p`
  font: Regular 20px/27px Demos Next Pro;
  flex-wrap: wrap;

  & .show {
  }
`;
