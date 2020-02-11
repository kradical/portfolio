declare namespace IndexCssModule {
  export interface IIndexCss {
    avatar: string;
    biographyRow: string;
    card: string;
    decorativeCircle: string;
    infoRow: string;
    socialRow: string;
  }
}

declare const IndexCssModule: IndexCssModule.IIndexCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexCssModule.IIndexCss;
};

export = IndexCssModule;
