import { Button as BaseButton } from '@mui/base/Button'
import { blue, grey } from '@mui/material/colors'
import { styled } from '@mui/system'

const Button = styled(BaseButton)(
    ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 16px 40px;
  border-radius: 4px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: none; 
   
  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]}; 
  }

  &:focus-visible { 
    outline: none;
  }

  &:disabled {
    background-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[700]};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    cursor: not-allowed; 

    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    }
  }
`
)

export default Button
