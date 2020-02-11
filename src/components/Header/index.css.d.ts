declare namespace IndexCssModule {
  export interface IIndexCss {
    fixed: string;
    header: string;
    link: string;
    placeholder: string;
    profileLink: string;
    profilePicture: string;
    stuck: string;
  }
}

declare const IndexCssModule: IndexCssModule.IIndexCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexCssModule.IIndexCss;
};

export = IndexCssModule;
