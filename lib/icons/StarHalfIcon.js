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
        _react2.default.createElement('path', { d: 'M0 0h24v24H0V0z', id: 'a' })
      ),
      _react2.default.createElement(
        'clipPath',
        { id: 'b' },
        _react2.default.createElement('use', { overflow: 'visible' })
      ),
      _react2.default.createElement('path', { 'clip-path': 'url(#b)', d: 'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z' })
    )
  );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }