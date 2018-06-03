import * as profilePic from 'assets/images/profilePicture.jpg';

export interface IPersonProfile {
  avatarUrl: string;
  company: string;
  biography: string;
  location: string;
  name: string;
  socialUrls: {
    linkedin: string;
    github: string;
  };
  title: string;
}

export const me: IPersonProfile = {
  avatarUrl: profilePic,
  biography: 'I like to code and things.',
  company: 'Riipen',
  location: 'Salt Spring Island, BC, Canada',
  name: 'Konrad Schultz',
  socialUrls: {
    github: 'https://github.com/kradical',
    linkedin: 'https://www.linkedin.com/in/konradschultz/',
  },
  title: 'Lead Software Developer',

};
