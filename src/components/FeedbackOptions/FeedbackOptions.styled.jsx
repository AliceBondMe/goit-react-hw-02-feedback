import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  padding: 10px 25px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  position: relative;
  display: inline-block;
  background: #21ebff;
  box-shadow: 0 0 5px #21ebff, 0 0 8px #21ebff;
  line-height: 42px;
  padding: 0;
  border: none;
  z-index: 2;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;

  &:hover {
    background-color: transparent;
    color: #21ebff;
    box-shadow: 0 5px 3px -3px #21ebff, 0 -5px 3px -3px #21ebff,
      0 5px 3px -3px #21ebff, 0 -5px 3px -3px #21ebff;
  }
  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 0;
    width: 100%;
    height: 50%;
    right: 0;
    z-index: -1;
    background: #21ebff;
    box-shadow: 0 0 5px #21ebff;
    transition: all 0.3s ease;
  }
  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }
  &:hover:before,
  &:hover:after {
    height: 0;
    background-color: #21ebff;
  }
`;
