var babel = require('babel-core');
var content = `
const Component = (props: Object) => <div />;
`;

it('object-props', () => {
  var res = babel.transform(content, {
    babelrc: false,
    presets: ['es2015', 'stage-1', 'react'],
    plugins: ['syntax-flow', require('../')],
  }).code;
  expect(res).toMatchSnapshot();
});
