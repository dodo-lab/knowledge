module.exports = {
  filters: {
    comments: true,
  },
  plugins: {
    '@textlint/markdown': {
      extensions: ['.mdx'],
    },
  },
  rules: {
    // https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing
    'preset-ja-technical-writing': {
      'sentence-length': {
        max: 128,
        exclusionPatterns: ['/\\(.*\\)/'],
      },
      'ja-no-mixed-period': {
        allowPeriodMarks: [':::'],
      },
      'max-kanji-continuous-len': {
        max: 6,
        allow: ['倍精度浮動小数']
      },
    },
    'preset-jtf-style': {
      '2.2.1.ひらがなと漢字の使い分け': true,
    },
    'textlint-rule-preset-ja-spacing': true,
  },
};
