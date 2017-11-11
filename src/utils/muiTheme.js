import {
  grey300, white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  fontFamily: 'Roboto, sans-serif',
  spacing: spacing,
  palette: {
    primary1Color: '#4a90e2',
    primary2Color: '#4a90e2',
    primary3Color: '#4a90e2',
    accent1Color: '#4285f4',
    accent2Color: '#4285f4',
    accent3Color: '#4285f4',
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: '#4a90e2',
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};