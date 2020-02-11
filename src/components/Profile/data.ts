import * as profilePic from 'assets/images/profilePicture.jpg';

export interface PersonProfile {
  avatarUrl: string;
  company: {
    name: string;
    url: string;
  };
  biography: string;
  location: string;
  name: string;
  socialUrls: {
    linkedin: string;
    github: string;
  };
  title: string;
}

export const me: PersonProfile = {
  avatarUrl: profilePic,
  biography: 'I like to code and things.',
  company: {
    name: 'Riipen',
    url: 'https://riipen.io/landing',
  },
  location: 'Salt Spring Island, BC, Canada',
  name: 'Konrad Schultz',
  socialUrls: {
    github: 'https://github.com/kradical',
    linkedin: 'https://www.linkedin.com/in/konradschultz/',
  },
  title: 'Lead Software Developer',
};
