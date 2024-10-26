import styled from 'styled-components';

export const ItemRepoContainer = styled.div`
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #fafafa;

  display: flex;
  flex-flow: column wrap;
  max-width: 650px;
  width: 100%;

  h3 {
    font-size: 24px;
    color: #fafafa;
  }
  p {
    color: #a5a5a5;
    font-size: 18px;
    margin: 5px 0 20px;
  }

  a {
    color: #aaaaff;
    font-size: 14px;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &.remove {
      color: #c60000;
    }

    &:hover {
      color: #fafafa;
    }
  }

  &:last-of-type {
    border: none;
  }
`;
