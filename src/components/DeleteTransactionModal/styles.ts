import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 7rem;
      color: var(--red);
    }
  }

  .buttons-container {
    display: flex;
    flex-direction: column;

    margin-top: 2rem;

    button {
      border: 0;
      border-radius: 0.25rem;
      height: 2.5rem;
      font-size: 1rem;
    }

    button[type="button"] {
      border: 1px solid #d7d7d7;
      background: transparent;
      color: var(--text-title);
    }

    button[type="submit"] {
      background: var(--red);
      color: #fff;
    }

    button + button {
      margin-top: 0.5rem;
    }
  }
`;
