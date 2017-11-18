import {
  grey300, white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  fontFamily: 'Roboto, sans-serif',
  spacing: spacing,
  palette: {
    primary1Color: '#681834',
    primary2Color: '#681834',
    primary3Color: '#681834',
    accent1Color: '#681834',
    accent2Color: '#681834',
    accent3Color: '#681834',
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: '#681834',
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};