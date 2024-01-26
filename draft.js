




Math.sqr = function(n) { return n*n; }



function Grid() {

    this.content = new Map();
}



Grid.prototype.cell = function(coordinates) {

    if (!this.content.has(coordinates))
        this.content.set(coordinates, new Cell());
    
    return this.content.get(coordinates);

}



function Cell(semes) {

    this.meaning = Object.assign({}, semes);
}



Cell.prototype.getSemes = function() {

    return Object.keys(this.meaning);
}



Cell.prototype.get = function(seme) {

    return this.meaning[seme] || 0;
}



Cell.prototype.set = function(seme, intensity) {

    if (intensity) {

        this.meaning[seme] = intensity;

    } else {

        if (seme in this.meaning)
            delete this.meaning[seme];
    }

}



Cell.prototype.isSemEqual = function(cell) {

    const thisSemes = this.getSemes();
    const cellSemes = cell.getSemes();

    if (thisSemes.length !== cellSemes.length)
        return false;

    for (let seme of thisSemes) {

        if (this.get(seme) !== cell.get(seme))
            return false;
    }

    return true;
}



Cell.prototype.getSemDistance = function(cell) {

    const semes = Array.from(new Set(this.getSemes().concat(cell.getSemes())));
    let d = 0;

    for (let seme in semes)
        d += Math.sqr(this.get(seme) - cell.get(seme));

    return Math.sqrt(d);
}



Cell.prototype.getSemLength = function() {

    let d = 0;

    for (let seme in this.getSemes())
        d += Math.sqr(this.get(seme) - cell.get(seme));

    return Math.sqrt(d);
}



Cell.prototype.getSemDotProduct = function(cell) {

    let dotProduct = 0;

    for (let seme of this.getSemes())
        dotProduct += cell.get(seme) * this.get(seme);

    return dotProduct;
}



Cell.prototype.getSemCosineSimilarity = function(cell) {

    return this.getSemDotProduct(cell) / (this.getSemLength() * cell.getSemLength());
}



Cell.prototype.normalizeSem = function() {

    return this.divideSem(this.getSemLength());
}



Cell.prototype.addSem = function(cell) {

    for (let seme of cell.getSemes())
        this.set(seme, this.get(seme) + cell.get(seme));
}



Cell.prototype.subtractSem = function(cell) {

    for (let seme of cell.getSemes())
        this.set(seme, this.get(seme) - cell.get(seme));
}



Cell.prototype.multiplySem = function(cell) {

    for (let seme of cell.getSemes())
        this.set(seme, this.get(seme) * cell.get(seme));
}



Cell.prototype.divideSem = function(cell) {

    for (let seme of cell.getSemes())
        this.set(seme, this.get(seme) / cell.get(seme));
}



















