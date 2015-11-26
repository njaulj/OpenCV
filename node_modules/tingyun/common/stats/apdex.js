'use strict';

function ApdexStats(apdex_t) {
    this.apdex_t = apdex_t;
    this.satisfying = 0;
    this.tolerating = 0;
    this.frustrating = 0;
}
ApdexStats.prototype.add = function add(duration) {
    if (duration <= this.apdex_t) this.satisfying++;
    else if (duration <= 4 * this.apdex_t) this.tolerating++;
    else this.frustrating++;
};

ApdexStats.prototype.incFrustrating = function incFrustrating() {
    this.frustrating++;
};
ApdexStats.prototype.merge = function merge(other) {
    this.satisfying  += other.satisfying;
    this.tolerating  += other.tolerating;
    this.frustrating += other.frustrating;
};
ApdexStats.prototype.toJSON = function toJSON() {
    return [ this.satisfying, this.tolerating, this.frustrating, this.apdex_t, ];
};

module.exports = ApdexStats;
