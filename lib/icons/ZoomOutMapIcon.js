'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _react2.default.createElement(
    _Icon2.default,
    null,
    _react2.default.createElement(
      'svg',
      { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
      _react2.default.createElement(
        'defs',
        null,
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', id: 'a' })
      ),
      _react2.default.createElement(
        'clipPath',
        { id: 'b' },
        _react2.default.createElement('use', { overflow: 'visible' })
      ),
      _react2.default.createElement('path', { 'clip-path': 'url(#b)', d: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z' }),
      _react2.default.createElement('path', { 'clip-path': 'url(#b)', d: 'M0 0h24v24H0z', fill: 'none' })
    )
  );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }