'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement(
      'svg',
      { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
      _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      _react2.default.createElement('path', { d: 'M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z' })
    )
  );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }