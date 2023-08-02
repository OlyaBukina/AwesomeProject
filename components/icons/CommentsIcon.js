import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

export const CommentsIcon = ({ commentsLength }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <Path
      fill-rule="evenodd"
      d="M3 11.5a8.38 8.38 0 0 0 .9 3.8 8.5 8.5 0 0 0 7.6 4.7 8.38 8.38 0 0 0 3.8-.9L21 21l-1.9-5.7a8.38 8.38 0 0 0 .9-3.8 8.5 8.5 0 0 0-4.7-7.6 8.38 8.38 0 0 0-3.8-.9H11a8.48 8.48 0 0 0-8 8v.5Z"
      clip-rule="evenodd"
      fill={commentsLength ? '#FF6C00' : '#fff'}
      stroke={commentsLength ? '#FF6C00' : '#BDBDBD'}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

CommentsIcon.propTypes = {
  commentsLength: PropTypes.number.isRequired,
};
