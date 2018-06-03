import * as React from 'react';

import * as profilePic from 'assets/images/profilePicture.jpg';
import { Link } from 'src/components/Link';

import * as css from './index.css';

interface IState {
  shouldBeFixed: boolean;
}

export class Header extends React.Component<{}, IState> {
  public state: IState = {
    shouldBeFixed: true,
  };

  public componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  public render() {
    const classes = [
      css.header,
      this.state.shouldBeFixed
        ? css.fixed
        : css.stuck,
    ];

    const className = classes.join(' ');

    return (
      <React.Fragment>
        <div className={css.placeholder} />
        <div className={className}>
          <Link classes={[css.profileLink]} href="#">
            <img src={profilePic} className={css.profilePicture} />
            Konrad Schultz
           </Link>
          <div>Search...</div>
        </div>
       </React.Fragment>
    );
  }

  private handleScroll = () => {
    const bannerHeight = 250;

    const shouldBeFixed = window.scrollY <= bannerHeight;

    this.setState({ shouldBeFixed });
  }
}
