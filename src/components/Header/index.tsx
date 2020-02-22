import * as React from 'react';

import profilePic from 'assets/images/profilePicture.jpg';

import { ActionHeader } from 'src/components/ActionHeader';
import { Link } from 'src/components/Link';

import * as css from './index.css';

interface State {
  shouldBeFixed: boolean;
}

export class Header extends React.Component<{}, State> {
  public state: State = {
    shouldBeFixed: true,
  };

  public componentDidMount(): void {
    window.addEventListener('scroll', this.handleScroll);
  }

  public componentWillUnmount(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  private handleScroll = (): void => {
    const html = document.querySelector('html');

    if (!html) {
      return;
    }

    const bannerHeightProperty = window
      .getComputedStyle(html)
      .getPropertyValue('--banner-height');

    const bannerHeight = parseInt(bannerHeightProperty, 10);

    const shouldBeFixed = window.scrollY <= bannerHeight;

    this.setState({ shouldBeFixed });
  };

  public render(): React.ReactElement {
    const classes = [
      css.header,
      this.state.shouldBeFixed ? css.fixed : css.stuck,
    ];

    const className = classes.join(' ');

    return (
      <React.Fragment>
        <div className={css.placeholder} />
        <div className={className}>
          <Link classes={[css.profileLink]} href="#profile">
            <img src={profilePic} className={css.profilePicture} />
            Konrad Schultz
          </Link>
          <Link classes={[css.link]} href="#todo-blog">
            Blog
          </Link>
          <div>Search...</div>
        </div>
        <ActionHeader
          message="Featured Project: Personal Blog"
          link="#todo-blog"
        />
      </React.Fragment>
    );
  }
}
