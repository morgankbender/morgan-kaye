/**
 * This library allows Font Awesome icons to be accessed in JSX as such:
 * <Font Awesome icon="bars" />
 */

// External imports
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

// Add to library
library.add(
  faBars,
  faTimes,
);
