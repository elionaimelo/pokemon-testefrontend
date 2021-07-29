import styled from 'styled-components'
import Select from 'react-select'

import { colors } from 'assets/styles/colors'

export const StyledSelect = styled(Select)`
  .Select__control {
    height: 48px;
    width: 100%;
    padding: 8px;
    border: 2px solid ${colors.grey};
    cursor: pointer;
  }

  .Select__value-container {
    padding: 0;
    margin-top: -14px;
  }

  .Select__single-value {
    color: #c5cee0;
    font-size: 14px;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__indicator {
    color: ${colors.secondary};
    margin-top: -14px;
  }

  .Select__menu {
    color: #3c3d3e;
  }
`
