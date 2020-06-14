import styled from '@emotion/styled'
import { theme } from '../../theme'

export const Form = styled.form`
  max-width: ${theme.sizes.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    background: ${theme.colors.tertiary};
    color: ${theme.colors.text};
    border-radius: 2px;
    padding: 1em;
    &::-webkit-input-placeholder {
      color: gray;
    }
    &::-moz-placeholder {
      color: gray;
    }
    &:-ms-input-placeholder {
      color: gray;
    }
    &:-moz-placeholder {
      color: gray;
    }
    &:required {
      box-shadow: none;
    }
  }
  &::before {
    content: '';
    background: black;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.2s all;
  }
`
export const Name = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${theme.responsive.small}) {
    width: 49%;
  }
`
export const Email = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${theme.responsive.small}) {
    width: 49%;
  }
`
export const Message = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 250px;
  resize: vertical;
`
export const Submit = styled.input`
  background: ${theme.colors.text} !important;
  color: white !important;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: ${theme.colors.highlight} !important;
  }
`
export const Modal = styled.div`
  background: white;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 99;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  @media screen and (min-width: ${theme.responsive.small}) {
    min-width: inherit;
    max-width: 400px;
  }
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`
export const Button = styled.div`
  background: ${theme.colors.text};
  font-size: 1em;
  display: inline-block;
  margin: 0 auto;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  padding: 1em;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s;
  z-index: 99;
  &:focus {
    outline: none;
  }
`