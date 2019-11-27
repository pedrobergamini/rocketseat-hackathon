import styled from 'styled-components';

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

  .exercise {
    margin: 10px;
    display: flex;
    flex-direction: column;
  }

  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .footer {
    display: flex;
    margin: 10px;
    justify-content: flex-end;
  }
`;
