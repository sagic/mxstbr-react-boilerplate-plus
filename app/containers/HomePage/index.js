/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>
          <div className={`${styles.wrapperTest} wtf`}>
            <FormattedMessage {...messages.header} />
          </div>
        </h1>
        <p>
          <a className="btn btn-primary">Primary</a>
        </p>
        <p>{__VERSION__}</p>
        <p>{process.env.NODE_ENV}</p>
      </div>
    );
  }
}
