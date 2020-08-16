const _0x3cb1 = ['Invalid channel name.', 'mins', 'Hid graph', '#fff', 'Added 1 000 000 subs.', 'backgroundColor', 'value', 'hrs', 'Added 100 subs.', 'Resumed sub count.', 'secs', 'keypress', 'Audited ', 'floor', 'Hi, why are you even reading this?', 'Unhid graph labels.', 'Minimum rate cannot be larger than maximum rate.', 'Count must be between ±1 trillion.', 'style', 'random', 'replace', 'Removed graph labels.', 'Removed 1 sub.', 'Reset sub counts.', ' subs.', 'body', 'log', 'checked', 'toString', '#000', 'innerHTML', 'subscribers to ', 'Added 10 subs.', 'Unhid settings.', 'log10', 'sign', 'Added 1 000 subs.', '#d0e4fe', 'P to pause subs, R to reset, H to hide settings, C to clear graph', 'color', 'repeat', 'hidden', 'Removed 1 000 000 subs.', 'Added 1 sub.', 'key', 'Invalid sub count.', '#34393f', 'days', 'target', 'To prevent lag, maximum rate is ±1 billion subscribers per second.'];
(function (_0x2b9b6b, _0x3cb1b3) {
    const _0x1a1b48 = function (_0x2c4e28) {
        while (--_0x2c4e28) {
            _0x2b9b6b['push'](_0x2b9b6b['shift']());
        }
    };
    _0x1a1b48(++_0x3cb1b3);
}(_0x3cb1, 0x11b));
const _0x1a1b = function (_0x2b9b6b, _0x3cb1b3) {
    _0x2b9b6b = _0x2b9b6b - 0x0;
    let _0x1a1b48 = _0x3cb1[_0x2b9b6b];
    return _0x1a1b48;
};
console[_0x1a1b('0x2b')](_0x1a1b('0x1f'));
const channel = channelSubmitName[_0x1a1b('0x17')];
let count = 0x0;
let displayValue = 0x0;
let minRate = 0x0;
let maxRate = 0x0;
let settings = !![];
let auditValue = 0x0;
let paused = ![];
let submitted = ![];
let invalid = !![];
document['addEventListener'](_0x1a1b('0x1c'), keybinds);

function keybinds(_0x3cda52) {
    if (_0x3cda52[_0x1a1b('0xf')] !== body || _0x3cda52[_0x1a1b('0x7')]) return;
    if (_0x3cda52['key'] === 'h') {
        if (settings) {
            options[_0x1a1b('0x8')] = !![];
            settings = ![];
            logAction('Hid settings.');
        } else {
            options[_0x1a1b('0x8')] = ![];
            settings = !![];
            logAction(_0x1a1b('0x0'));
        }
    }
    if (_0x3cda52['key'] === '1') {
        changeSubs(0x1);
        logAction(_0x1a1b('0xa'));
    }
    if (_0x3cda52['key'] === '2') {
        changeSubs(0xa);
        logAction(_0x1a1b('0x31'));
    }
    if (_0x3cda52[_0x1a1b('0xb')] === '3') {
        changeSubs(0x64);
        logAction(_0x1a1b('0x19'));
    }
    if (_0x3cda52['key'] === '4') {
        changeSubs(0x3e8);
        logAction(_0x1a1b('0x3'));
    }
    if (_0x3cda52[_0x1a1b('0xb')] === '5') {
        changeSubs(0x2710);
        logAction('Added 10 000 subs.');
    }
    if (_0x3cda52[_0x1a1b('0xb')] === '6') {
        changeSubs(0xf4240);
        logAction(_0x1a1b('0x15'));
    }
    if (_0x3cda52['key'] === '7') {
        changeSubs(-0x1);
        logAction(_0x1a1b('0x27'));
    }
    if (_0x3cda52[_0x1a1b('0xb')] === '8') {
        changeSubs(-0xa);
        logAction('Removed 10 subs.');
    }
    if (_0x3cda52[_0x1a1b('0xb')] === '9') {
        changeSubs(-0x3e8);
        logAction('Removed 1 000 subs.');
    }
    if (_0x3cda52[_0x1a1b('0xb')] === '0') {
        changeSubs(-0xf4240);
        logAction(_0x1a1b('0x9'));
    }
    if (_0x3cda52[_0x1a1b('0xb')] === 'a') {
        changeSubs(auditValue);
        logAction(_0x1a1b('0x1d') + auditValue + _0x1a1b('0x29'));
    }
    if (_0x3cda52['key'] === 'r') {
        count = 0x0;
        channelSubs[_0x1a1b('0x2f')] = 0x0;
        logAction(_0x1a1b('0x28'));
    }
    if (_0x3cda52[_0x1a1b('0xb')] === 'p') {
        if (!paused) {
            rate = 0x0;
            paused = !![];
            logAction('Paused sub count.');
        } else {
            rate = parseInt(subsPerMinute[_0x1a1b('0x17')], 0xa);
            paused = ![];
            logAction(_0x1a1b('0x1a'));
        }
    }
    if (_0x3cda52[_0x1a1b('0xb')] === 'g') {
        if (canvas[_0x1a1b('0x8')]) {
            canvas[_0x1a1b('0x8')] = ![];
            logAction('Unhid graph.');
        } else {
            canvas[_0x1a1b('0x8')] = !![];
            logAction(_0x1a1b('0x13'));
        }
    }
    if (_0x3cda52[_0x1a1b('0xb')] === 'l') {
        if (labels) {
            labels = ![];
            logAction(_0x1a1b('0x26'));
        } else {
            labels = !![];
            logAction(_0x1a1b('0x20'));
        }
    }
    if (_0x3cda52[_0x1a1b('0xb')] === 'c') {
        values = [];
        logAction('Cleared graph.');
    }
}

function toggleNightMode() {
    if (night['checked']) {
        document[_0x1a1b('0x2a')][_0x1a1b('0x23')][_0x1a1b('0x16')] = _0x1a1b('0xd');
        log[_0x1a1b('0x23')]['color'] = _0x1a1b('0x14');
        channelName[_0x1a1b('0x23')][_0x1a1b('0x6')] = '#fff';
        nonNegLabel[_0x1a1b('0x23')]['color'] = _0x1a1b('0x14');
        channelSubs[_0x1a1b('0x23')]['color'] = '#fff';
        info[_0x1a1b('0x23')][_0x1a1b('0x6')] = _0x1a1b('0x14');
        nightLabel['style'][_0x1a1b('0x6')] = '#fff';
        container[_0x1a1b('0x23')][_0x1a1b('0x6')] = _0x1a1b('0x14');
        unsubLabel[_0x1a1b('0x23')]['color'] = _0x1a1b('0x14');
        removeOldLabel[_0x1a1b('0x23')][_0x1a1b('0x6')] = '#fff';
    } else {
        document[_0x1a1b('0x2a')][_0x1a1b('0x23')][_0x1a1b('0x16')] = _0x1a1b('0x4');
        log[_0x1a1b('0x23')][_0x1a1b('0x6')] = _0x1a1b('0x2e');
        channelName[_0x1a1b('0x23')][_0x1a1b('0x6')] = _0x1a1b('0x2e');
        nonNegLabel[_0x1a1b('0x23')][_0x1a1b('0x6')] = _0x1a1b('0x2e');
        channelSubs[_0x1a1b('0x23')][_0x1a1b('0x6')] = _0x1a1b('0x2e');
        info[_0x1a1b('0x23')][_0x1a1b('0x6')] = _0x1a1b('0x2e');
        nightLabel[_0x1a1b('0x23')][_0x1a1b('0x6')] = _0x1a1b('0x2e');
        container['style'][_0x1a1b('0x6')] = _0x1a1b('0x2e');
        unsubLabel['style'][_0x1a1b('0x6')] = _0x1a1b('0x2e');
        removeOldLabel['style'][_0x1a1b('0x6')] = _0x1a1b('0x2e');
    }
}

function submit() {
    submitted = !![];
    const _0x46deee = channelSubmitName[_0x1a1b('0x17')];
    var _0x1ebc6e = parseInt(countSubmit[_0x1a1b('0x17')], 0xa);
    auditValue = parseInt(subsAudit[_0x1a1b('0x17')], 0xa) % 0xe8d4a51000;
    if (!_0x46deee) {
        alert(_0x1a1b('0x11'));
        return invalid = !![];
    }
    if (countSubmit[_0x1a1b('0x17')] === '') {
        alert(_0x1a1b('0xc'));
        return invalid = !![];
    }
    if (_0x1ebc6e < -0xe8d4a51000 || _0x1ebc6e > 0xe8d4a51000) {
        alert(_0x1a1b('0x22'));
        return invalid = !![];
    }
    if (nonNegOnly[_0x1a1b('0x2c')] && _0x1ebc6e < 0x0) {
        count = 0x0;
    }
    count = _0x1ebc6e;
    channelSubs[_0x1a1b('0x2f')] = count;
    channelName[_0x1a1b('0x2f')] = _0x46deee;
    channelSubs2[_0x1a1b('0x2f')] = Math[_0x1a1b('0x1e')](parseGoal(count) - count);
    smallText[_0x1a1b('0x2f')] = 'subscribers to ' + parseGoal(count)[_0x1a1b('0x2d')]()[_0x1a1b('0x25')](/\B(?=(\d{3})+(?!\d))/g, ',');
    if (parseInt(subsPerMinute['value'], 0xa) && parseInt(subsPerMinute2[_0x1a1b('0x17')], 0xa)) {
        minRate = parseInt(subsPerMinute[_0x1a1b('0x17')], 0xa);
        maxRate = parseInt(subsPerMinute2[_0x1a1b('0x17')], 0xa);
    } else {
        minRate = 0x0;
        maxRate = 0x0;
    }
    if (minRate > maxRate) {
        return alert(_0x1a1b('0x21'));
    }
    if (rateOption[_0x1a1b('0x17')] === _0x1a1b('0x1b')) {
        if (minRate < -0x3b9aca00 || maxRate < -0x3b9aca00 || minRate > 0x3b9aca00 || maxRate > 0x3b9aca00) {
            alert(_0x1a1b('0x10'));
            return invalid = !![];
        }
    }
    if (rateOption[_0x1a1b('0x17')] === _0x1a1b('0x12')) {
        if (minRate < -0xdf8475800 || maxRate < -0xdf8475800 || minRate > 0xdf8475800 || maxRate > 0xdf8475800) {
            alert('To prevent lag, maximum rate is ±1 billion subscribers per second.');
            return invalid = !![];
        }
    }
    if (rateOption[_0x1a1b('0x17')] === _0x1a1b('0x18')) {
        if (minRate < -0x34630b8a000 || maxRate < -0x34630b8a000 || minRate > 0x34630b8a000 || maxRate > 0x34630b8a000) {
            alert('To prevent lag, maximum rate is ±1 billion subscribers per second.');
            return invalid = !![];
        }
    }
    if (rateOption[_0x1a1b('0x17')] === 'days') {
        if (minRate < -0x4e94914f0000 || maxRate < -0x4e94914f0000 || minRate > 0x4e94914f0000 || maxRate > 0x4e94914f0000) {
            alert(_0x1a1b('0x10'));
            return invalid = !![];
        }
    }
    invalid = ![];
}

function changeSubs(_0x569a39) {
    let _0x11a5da = count;
    count = _0x11a5da + _0x569a39;
    if (count < 0x0 && nonNegOnly[_0x1a1b('0x2c')]) count = 0x0;
    channelSubs[_0x1a1b('0x2f')] = Math[_0x1a1b('0x1e')](count);
    channelSubs2[_0x1a1b('0x2f')] = Math[_0x1a1b('0x1e')](parseGoal(count) - count);
    smallText[_0x1a1b('0x2f')] = _0x1a1b('0x30') + parseGoal(count)[_0x1a1b('0x2d')]()[_0x1a1b('0x25')](/\B(?=(\d{3})+(?!\d))/g, ',');
}

function parseGoal(_0x178e82) {
    _0x178e82 = _0x178e82 + 0x1;
    if (_0x178e82 < 0xa) return 0xa;
    const _0x554832 = Math[_0x1a1b('0x1e')](Math[_0x1a1b('0x1')](_0x178e82));
    const _0xe7c5d7 = Math['ceil'](_0x178e82 / 0xa ** _0x554832);
    return _0xe7c5d7 * 0xa ** _0x554832;
}

function logAction(_0x13c19e) {
    log[_0x1a1b('0x2f')] = _0x13c19e;
    setTimeout(() => {
        log[_0x1a1b('0x2f')] = _0x1a1b('0x5');
    }, 0x708);
}

function updateSubs() {
    if (!channelSubmitName['value']) return;
    if (isNaN(count)) return;
    if (isNaN(countSubmit[_0x1a1b('0x17')]) || paused || !minRate || !maxRate) return;
    if (invalid) return;
    let _0x4bff0a = 0x1e;
    if (rateOption[_0x1a1b('0x17')] == 'secs') {
        _0x4bff0a = 0.5;
    }
    if (rateOption[_0x1a1b('0x17')] == _0x1a1b('0x12')) {
        _0x4bff0a = 0x1e;
    }
    if (rateOption['value'] == _0x1a1b('0x18')) {
        _0x4bff0a = 0x708;
    }
    if (rateOption[_0x1a1b('0x17')] == _0x1a1b('0xe')) {
        _0x4bff0a = 0xa8c0;
    }
    let _0xac3706 = minRate + Math['round'](Math[_0x1a1b('0x24')]() * (maxRate - minRate));
    if (!unsub[_0x1a1b('0x2c')]) {
        displayValue = Math[_0x1a1b('0x1e')](count + _0xac3706 / _0x4bff0a) < 0x0 && nonNegOnly[_0x1a1b('0x2c')] ? 0x0 : Math[_0x1a1b('0x1e')](count + _0xac3706 / _0x4bff0a);
        countSubmit[_0x1a1b('0x17')] = displayValue;
        channelSubs[_0x1a1b('0x2f')] = displayValue;
        count = count + _0xac3706 / _0x4bff0a;
        channelSubs2['innerHTML'] = nonNegOnly[_0x1a1b('0x2c')] && count < 0x0 ? 0xa : parseGoal(displayValue) - displayValue;
        smallText[_0x1a1b('0x2f')] = _0x1a1b('0x30') + parseGoal(displayValue)[_0x1a1b('0x2d')]()[_0x1a1b('0x25')](/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
        const _0x4b3dd6 = Math[_0x1a1b('0x24')]();
        if (_0x4b3dd6 >= 0.2) {
            displayValue = Math[_0x1a1b('0x1e')](count + _0xac3706 / _0x4bff0a) < 0x0 && nonNegOnly[_0x1a1b('0x2c')] ? 0x0 : Math[_0x1a1b('0x1e')](count + _0xac3706 / _0x4bff0a);
            countSubmit[_0x1a1b('0x17')] = displayValue;
            channelSubs[_0x1a1b('0x2f')] = displayValue;
            count = count + _0xac3706 / _0x4bff0a;
            channelSubs2[_0x1a1b('0x2f')] = nonNegOnly['checked'] && count < 0x0 ? 0xa : parseGoal(displayValue) - displayValue;
            smallText[_0x1a1b('0x2f')] = _0x1a1b('0x30') + parseGoal(displayValue)[_0x1a1b('0x2d')]()[_0x1a1b('0x25')](/\B(?=(\d{3})+(?!\d))/g, ',');
        } else {
            displayValue = (_0xac3706 / _0x4bff0a < 0x2 ? Math[_0x1a1b('0x1e')](count - Math[_0x1a1b('0x2')](_0xac3706) * (Math[_0x1a1b('0x24')] > 0.75 ? 0x2 : 0x1)) : Math[_0x1a1b('0x1e')](count - (0.4 + Math['random']()) * _0xac3706 / _0x4bff0a)) < 0x0 && nonNegOnly[_0x1a1b('0x2c')] ? 0x0 : _0xac3706 / _0x4bff0a < 0x2 ? Math[_0x1a1b('0x1e')](count - Math[_0x1a1b('0x2')](_0xac3706) * (Math['random'] > 0.75 ? 0x2 : 0x1)) : Math['floor'](count - (0.4 + Math[_0x1a1b('0x24')]()) * _0xac3706 / _0x4bff0a);
            countSubmit[_0x1a1b('0x17')] = displayValue;
            channelSubs[_0x1a1b('0x2f')] = displayValue;
            count = _0xac3706 / _0x4bff0a < 0x2 ? count - (Math[_0x1a1b('0x24')] > 0.75 ? 0x2 : 0x1) : count - (0.4 + Math[_0x1a1b('0x24')]()) * _0xac3706 / _0x4bff0a < 0x0 && nonNegOnly[_0x1a1b('0x2c')] ? 0x0 : _0xac3706 / _0x4bff0a < 0x2 ? count - (Math['random'] > 0.75 ? 0x2 : 0x1) : count - (0.4 + Math[_0x1a1b('0x24')]() * _0xac3706 / _0x4bff0a);
            channelSubs2[_0x1a1b('0x2f')] = nonNegOnly[_0x1a1b('0x2c')] && count < 0x0 ? 0xa : Math[_0x1a1b('0x1e')](parseGoal(displayValue) - displayValue);
            smallText[_0x1a1b('0x2f')] = _0x1a1b('0x30') + parseGoal(displayValue)[_0x1a1b('0x2d')]()[_0x1a1b('0x25')](/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    }
}
setInterval(updateSubs, 0x7d0);

'use strict';
/** @type {!Array} */
var _0x1b4c = ["beginPath", "hidden", "max", "textAlign", "min", "width", "getSeconds", "height", "#fff", "#6b0a0a", "20px Serif", "strokeStyle", "toFixed", "getHours", "center", "now", "filter", "getMinutes", "right", "moveTo", "font", "push", "length", "#4f4f4f", "#7f7f7f", "checked", "fillStyle", "#000", "includes", "stroke", "canvas", "toString", "fillText", "lineTo", "floor", "#4babdb", "lineWidth", "round", "slice", "getContext", "clearRect", "number"];
(function(data, i) {
  /**
   * @param {number} isLE
   * @return {undefined}
   */
  var write = function(isLE) {
    for (; --isLE;) {
      data["push"](data["shift"]());
    }
  };
  write(++i);
})(_0x1b4c, 456);
/**
 * @param {string} i
 * @param {?} parameter1
 * @return {?}
 */
var _0x2fed = function(i, parameter1) {
  /** @type {number} */
  i = i - 0;
  var oembedView = _0x1b4c[i];
  return oembedView;
};
/** @type {!Array} */
var values = [];
/** @type {!Array} */
var times = [];
/** @type {boolean} */
var useTimes = !![];
/** @type {number} */
var maxLabelsX = 5;
/** @type {number} */
var maxLabelsY = 3;
/** @type {number} */
var maxValues = 500;
let r = ![];
/** @type {boolean} */
var noDecimals = !![];
const canvas = document["getElementById"](_0x2fed("0x24"));
if (canvas[_0x2fed("0x3")]) {
  var ctx = canvas[_0x2fed("0x3")]("2d");
}
const width = canvas[_0x2fed("0xb")];
const height = canvas[_0x2fed("0xd")];
/**
 * @param {?} isReturnSeconds
 * @param {boolean} isShowHours
 * @return {?}
 */
function formatTime(isReturnSeconds, isShowHours) {
  let t = (new Date(isReturnSeconds))[_0x2fed("0x13")]();
  let v = (new Date(isReturnSeconds))[_0x2fed("0x17")]();
  let mm = (new Date(isReturnSeconds))[_0x2fed("0xc")]();
  if (typeof t === _0x2fed("0x5") && t < 10) {
    t = "0" + t[_0x2fed("0x25")]();
  }
  if (typeof v === "number" && v < 10) {
    v = "0" + v[_0x2fed("0x25")]();
  }
  if (typeof mm === _0x2fed("0x5") && mm < 10) {
    mm = "0" + mm[_0x2fed("0x25")]();
  }
  t = t[_0x2fed("0x25")]();
  v = v["toString"]();
  mm = mm[_0x2fed("0x25")]();
  let time = t + ":" + v;
  if (isShowHours) {
    time = time + (":" + mm);
  }
  return time;
}
/**
 * @return {undefined}
 */
function addNext() {
  if (!submitted) {
    return;
  }
  values[_0x2fed("0x1b")](nonNegOnly[_0x2fed("0x1f")] && count < 0 ? 0 : count);
  times["push"](Date[_0x2fed("0x15")]());
  if (values[_0x2fed("0x1c")] > maxValues && removeOld[_0x2fed("0x1f")]) {
    values = values[_0x2fed("0x2")](values[_0x2fed("0x1c")] - maxValues);
    times = times[_0x2fed("0x2")](values[_0x2fed("0x1c")] - maxValues);
  }
  let parts = [];
  let props = [];
  /** @type {number} */
  var factor = 0;
  for (; factor < maxLabelsX; factor++) {
    parts[_0x2fed("0x1b")](Math[_0x2fed("0x1")](factor * values[_0x2fed("0x1c")] / maxLabelsX));
  }
  /** @type {number} */
  var max = Math[_0x2fed("0x8")](...values) - Math["min"](...values);
  if (!max) {
    /** @type {number} */
    max = 1;
    /** @type {boolean} */
    r = !![];
  } else {
    /** @type {boolean} */
    r = ![];
  }
  if (canvas[_0x2fed("0x7")]) {
    return;
  }
  ctx[_0x2fed("0x4")](0, 0, canvas[_0x2fed("0xb")], canvas[_0x2fed("0xd")]);
  /** @type {number} */
  var value = 0;
  for (; value < maxLabelsY; value++) {
    if (labels) {
      props[_0x2fed("0x1b")](value * max / maxLabelsY + Math[_0x2fed("0xa")](...values));
      const _0x2e38d9 = values[_0x2fed("0x16")]((value) => {
        return value[_0x2fed("0x25")]() === Math["round"](value)[_0x2fed("0x25")]();
      });
      if (noDecimals) {
        ctx["font"] = _0x2fed("0x10");
        /** @type {string} */
        ctx[_0x2fed("0x9")] = "right";
        ctx["fillStyle"] = night[_0x2fed("0x1f")] ? _0x2fed("0xe") : _0x2fed("0x21");
        ctx[_0x2fed("0x26")](Math[_0x2fed("0x1")](props[value]), width, height - value / maxLabelsY * height);
      } else {
        ctx[_0x2fed("0x1a")] = _0x2fed("0x10");
        ctx[_0x2fed("0x9")] = _0x2fed("0x18");
        ctx["fillStyle"] = night[_0x2fed("0x1f")] ? _0x2fed("0xe") : "#000";
        ctx[_0x2fed("0x26")](props[value][_0x2fed("0x12")](4), width, height - value / maxLabelsY * height);
      }
      ctx[_0x2fed("0x6")]();
      ctx[_0x2fed("0x11")] = night[_0x2fed("0x1f")] ? _0x2fed("0x1e") : _0x2fed("0x1d");
      /** @type {number} */
      ctx[_0x2fed("0x0")] = 1;
      ctx[_0x2fed("0x19")](0, value / maxLabelsY * height);
      ctx["lineTo"](width, value / maxLabelsY * height);
      ctx[_0x2fed("0x23")]();
    }
  }
  ctx[_0x2fed("0x11")] = night[_0x2fed("0x1f")] ? _0x2fed("0x29") : _0x2fed("0xf");
  /** @type {number} */
  ctx[_0x2fed("0x0")] = 3;
  ctx[_0x2fed("0x6")]();
  ctx[_0x2fed("0x19")](0, height - (values[0] - Math[_0x2fed("0xa")](...values)) * height / max);
  /** @type {number} */
  var i = 2;
  for (; i <= values[_0x2fed("0x1c")]; i++) {
    if (values[i - 1] === Infinity) {
      /** @type {number} */
      values[i - 1] = 1E308;
    }
    if (values[i - 1] === -Infinity) {
      /** @type {number} */
      values[i - 1] = -1E308;
    }
    if (isNaN(values[i - 1])) {
      /** @type {number} */
      values[i - 1] = 000;
    }
    ctx[_0x2fed("0x27")]((i - 1) / (values["length"] - 1) * width, height - (values[i - 1] - Math[_0x2fed("0xa")](...values)) * height / max);
    ctx[_0x2fed("0x23")]();
    ctx["font"] = _0x2fed("0x10");
    ctx[_0x2fed("0x9")] = _0x2fed("0x14");
    ctx[_0x2fed("0x20")] = night[_0x2fed("0x1f")] ? "#fff" : _0x2fed("0x21");
    if (labels) {
      if (values["length"] <= maxLabelsX || parts[_0x2fed("0x22")](i - 1)) {
        if (useTimes) {
          ctx["fillText"]("" + formatTime(times[i - 1], ![]), (i - 1) / (values[_0x2fed("0x1c")] - 1) * width, height - 15, 50);
        } else {
          ctx[_0x2fed("0x26")]((i - 1)[_0x2fed("0x25")](), (i - 1) / (values[_0x2fed("0x1c")] - 1) * width, height - 15, 50);
        }
      }
      ctx[_0x2fed("0x19")]((i - 1) / (values[_0x2fed("0x1c")] - 1) * width, height - (values[i - 1] - Math["min"](...values)) * height / max);
    }
  }
  /** @type {string} */
  ctx[_0x2fed("0x1a")] = "20px Serif";
  ctx["textAlign"] = _0x2fed("0x18");
  ctx[_0x2fed("0x20")] = night["checked"] ? _0x2fed("0xe") : _0x2fed("0x21");
  if (labels) {
    if (r) {
      ctx[_0x2fed("0x26")](Math["floor"](Math[_0x2fed("0x8")](...values) + 1)["toString"](), width, 25);
    } else {
      ctx[_0x2fed("0x26")](Math[_0x2fed("0x28")](Math[_0x2fed("0x8")](...values))[_0x2fed("0x25")](), width, 25);
    }
    if (values[_0x2fed("0x1c")] > maxLabelsX) {
      /** @type {number} */
      var i = 1;
      for (; i <= maxLabelsX; i++) {
        ctx[_0x2fed("0x6")]();
        ctx[_0x2fed("0x11")] = night[_0x2fed("0x1f")] ? "#7f7f7f" : _0x2fed("0x1d");
        /** @type {number} */
        ctx[_0x2fed("0x0")] = 1;
        ctx[_0x2fed("0x19")](parts[i - 1] / (values[_0x2fed("0x1c")] - 1) * width, 000);
        ctx["lineTo"](parts[i - 1] / (values[_0x2fed("0x1c")] - 1) * width, height);
        ctx["stroke"]();
      }
    } else {
      /** @type {number} */
      var minRange = 2;
      for (; minRange <= values[_0x2fed("0x1c")]; minRange++) {
        ctx[_0x2fed("0x6")]();
        ctx["strokeStyle"] = night["checked"] ? _0x2fed("0x1e") : _0x2fed("0x1d");
        /** @type {number} */
        ctx[_0x2fed("0x0")] = 1;
        ctx[_0x2fed("0x19")]((minRange - 1) / (values[_0x2fed("0x1c")] - 1) * width, 000);
        ctx[_0x2fed("0x27")]((minRange - 1) / (values[_0x2fed("0x1c")] - 1) * width, height);
        ctx[_0x2fed("0x23")]();
      }
    }
  }
}
setInterval(addNext, 2E3);
(function(data, i) {
  /**
   * @param {number} isLE
   * @return {undefined}
   */
  var write = function(isLE) {
    for (; --isLE;) {
      data["push"](data["shift"]());
    }
  };
  write(++i);
})(_0x1b4c, 456);
/**
 * @param {string} i
 * @param {?} parameter1
 * @return {?}
 */
_0x2fed = function(i, parameter1) {
  /** @type {number} */
  i = i - 0;
  var oembedView = _0x1b4c[i];
  return oembedView;
};
/** @type {!Array} */
values = [];
/** @type {!Array} */
times = [];
let labels = ![];
/** @type {boolean} */
useTimes = !![];
/** @type {number} */
maxLabelsX = 5;
/** @type {number} */
maxLabelsY = 3;
/** @type {number} */
maxValues = 500;
let r = ![];
/** @type {boolean} */
noDecimals = !![];
const canvas = document["getElementById"](_0x2fed("0x24"));
if (canvas[_0x2fed("0x3")]) {
  ctx = canvas[_0x2fed("0x3")]("2d");
}
const width = canvas[_0x2fed("0xb")];
const height = canvas[_0x2fed("0xd")];
/**
 * @param {?} isReturnSeconds
 * @param {boolean} isShowHours
 * @return {?}
 */
function formatTime(isReturnSeconds, isShowHours) {
  let t = (new Date(isReturnSeconds))[_0x2fed("0x13")]();
  let v = (new Date(isReturnSeconds))[_0x2fed("0x17")]();
  let mm = (new Date(isReturnSeconds))[_0x2fed("0xc")]();
  if (typeof t === _0x2fed("0x5") && t < 10) {
    t = "0" + t[_0x2fed("0x25")]();
  }
  if (typeof v === "number" && v < 10) {
    v = "0" + v[_0x2fed("0x25")]();
  }
  if (typeof mm === _0x2fed("0x5") && mm < 10) {
    mm = "0" + mm[_0x2fed("0x25")]();
  }
  t = t[_0x2fed("0x25")]();
  v = v["toString"]();
  mm = mm[_0x2fed("0x25")]();
  let time = t + ":" + v;
  if (isShowHours) {
    time = time + (":" + mm);
  }
  return time;
}
/**
 * @return {undefined}
 */
function addNext() {
  if (!submitted) {
    return;
  }
  values[_0x2fed("0x1b")](nonNegOnly[_0x2fed("0x1f")] && count < 0 ? 0 : count);
  times["push"](Date[_0x2fed("0x15")]());
  if (values[_0x2fed("0x1c")] > maxValues && removeOld[_0x2fed("0x1f")]) {
    values = values[_0x2fed("0x2")](values[_0x2fed("0x1c")] - maxValues);
    times = times[_0x2fed("0x2")](values[_0x2fed("0x1c")] - maxValues);
  }
  let parts = [];
  let props = [];
  /** @type {number} */
  var factor = 0;
  for (; factor < maxLabelsX; factor++) {
    parts[_0x2fed("0x1b")](Math[_0x2fed("0x1")](factor * values[_0x2fed("0x1c")] / maxLabelsX));
  }
  /** @type {number} */
  var max = Math[_0x2fed("0x8")](...values) - Math["min"](...values);
  if (!max) {
    /** @type {number} */
    max = 1;
    /** @type {boolean} */
    r = !![];
  } else {
    /** @type {boolean} */
    r = ![];
  }
  if (canvas[_0x2fed("0x7")]) {
    return;
  }
  ctx[_0x2fed("0x4")](0, 0, canvas[_0x2fed("0xb")], canvas[_0x2fed("0xd")]);
  /** @type {number} */
  var value = 0;
  for (; value < maxLabelsY; value++) {
    if (labels) {
      props[_0x2fed("0x1b")](value * max / maxLabelsY + Math[_0x2fed("0xa")](...values));
      const _0x2e38d9 = values[_0x2fed("0x16")]((value) => {
        return value[_0x2fed("0x25")]() === Math["round"](value)[_0x2fed("0x25")]();
      });
      if (noDecimals) {
        ctx["font"] = _0x2fed("0x10");
        /** @type {string} */
        ctx[_0x2fed("0x9")] = "right";
        ctx["fillStyle"] = night[_0x2fed("0x1f")] ? _0x2fed("0xe") : _0x2fed("0x21");
        ctx[_0x2fed("0x26")](Math[_0x2fed("0x1")](props[value]), width, height - value / maxLabelsY * height);
      } else {
        ctx[_0x2fed("0x1a")] = _0x2fed("0x10");
        ctx[_0x2fed("0x9")] = _0x2fed("0x18");
        ctx["fillStyle"] = night[_0x2fed("0x1f")] ? _0x2fed("0xe") : "#000";
        ctx[_0x2fed("0x26")](props[value][_0x2fed("0x12")](4), width, height - value / maxLabelsY * height);
      }
      ctx[_0x2fed("0x6")]();
      ctx[_0x2fed("0x11")] = night[_0x2fed("0x1f")] ? _0x2fed("0x1e") : _0x2fed("0x1d");
      /** @type {number} */
      ctx[_0x2fed("0x0")] = 1;
      ctx[_0x2fed("0x19")](0, value / maxLabelsY * height);
      ctx["lineTo"](width, value / maxLabelsY * height);
      ctx[_0x2fed("0x23")]();
    }
  }
  ctx[_0x2fed("0x11")] = night[_0x2fed("0x1f")] ? _0x2fed("0x29") : _0x2fed("0xf");
  /** @type {number} */
  ctx[_0x2fed("0x0")] = 3;
  ctx[_0x2fed("0x6")]();
  ctx[_0x2fed("0x19")](0, height - (values[0] - Math[_0x2fed("0xa")](...values)) * height / max);
  /** @type {number} */
  var i = 2;
  for (; i <= values[_0x2fed("0x1c")]; i++) {
    if (values[i - 1] === Infinity) {
      /** @type {number} */
      values[i - 1] = 1E308;
    }
    if (values[i - 1] === -Infinity) {
      /** @type {number} */
      values[i - 1] = -1E308;
    }
    if (isNaN(values[i - 1])) {
      /** @type {number} */
      values[i - 1] = 0;
    }
    ctx[_0x2fed("0x27")]((i - 1) / (values["length"] - 1) * width, height - (values[i - 1] - Math[_0x2fed("0xa")](...values)) * height / max);
    ctx[_0x2fed("0x23")]();
    ctx["font"] = _0x2fed("0x10");
    ctx[_0x2fed("0x9")] = _0x2fed("0x14");
    ctx[_0x2fed("0x20")] = night[_0x2fed("0x1f")] ? "#fff" : _0x2fed("0x21");
    if (labels) {
      if (values["length"] <= maxLabelsX || parts[_0x2fed("0x22")](i - 1)) {
        if (useTimes) {
          ctx["fillText"]("" + formatTime(times[i - 1], ![]), (i - 1) / (values[_0x2fed("0x1c")] - 1) * width, height - 15, 50);
        } else {
          ctx[_0x2fed("0x26")]((i - 1)[_0x2fed("0x25")](), (i - 1) / (values[_0x2fed("0x1c")] - 1) * width, height - 15, 50);
        }
      }
      ctx[_0x2fed("0x19")]((i - 1) / (values[_0x2fed("0x1c")] - 1) * width, height - (values[i - 1] - Math["min"](...values)) * height / max);
    }
  }
  /** @type {string} */
  ctx[_0x2fed("0x1a")] = "20px Serif";
  ctx["textAlign"] = _0x2fed("0x18");
  ctx[_0x2fed("0x20")] = night["checked"] ? _0x2fed("0xe") : _0x2fed("0x21");
  if (labels) {
    if (r) {
      ctx[_0x2fed("0x26")](Math["floor"](Math[_0x2fed("0x8")](...values) + 1)["toString"](), width, 25);
    } else {
      ctx[_0x2fed("0x26")](Math[_0x2fed("0x28")](Math[_0x2fed("0x8")](...values))[_0x2fed("0x25")](), width, 25);
    }
    if (values[_0x2fed("0x1c")] > maxLabelsX) {
      /** @type {number} */
      var i = 1;
      for (; i <= maxLabelsX; i++) {
        ctx[_0x2fed("0x6")]();
        ctx[_0x2fed("0x11")] = night[_0x2fed("0x1f")] ? "#7f7f7f" : _0x2fed("0x1d");
        /** @type {number} */
        ctx[_0x2fed("0x0")] = 1;
        ctx[_0x2fed("0x19")](parts[i - 1] / (values[_0x2fed("0x1c")] - 1) * width, 0);
        ctx["lineTo"](parts[i - 1] / (values[_0x2fed("0x1c")] - 1) * width, height);
        ctx["stroke"]();
      }
    } else {
      /** @type {number} */
      var minRange = 2;
      for (; minRange <= values[_0x2fed("0x1c")]; minRange++) {
        ctx[_0x2fed("0x6")]();
        ctx["strokeStyle"] = night["checked"] ? _0x2fed("0x1e") : _0x2fed("0x1d");
        /** @type {number} */
        ctx[_0x2fed("0x0")] = 1;
        ctx[_0x2fed("0x19")]((minRange - 1) / (values[_0x2fed("0x1c")] - 1) * width, 0);
        ctx[_0x2fed("0x27")]((minRange - 1) / (values[_0x2fed("0x1c")] - 1) * width, height);
        ctx[_0x2fed("0x23")]();
      }
    }
  }
}
setInterval(addNext, 2E3);

