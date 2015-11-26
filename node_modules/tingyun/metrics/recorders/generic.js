'use strict';

module.exports = function record(segment, scope) {
    var duration    = segment.getDurationInMillis();
    var exclusive   = segment.getExclusiveDurationInMillis();
    var action      = segment.trace.action;
    if (scope) action.measure(segment.name, scope, duration, exclusive);
    action.measure(segment.name, null, duration, exclusive);
}
