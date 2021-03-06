import styled, { css } from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

interface ConteinerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ConteinerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  border-width: 2px;
  border-color: #232129;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
`;

export const InputText = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(Feather)`
  margin-right: 12px;
`;
