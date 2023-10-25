function cityTaxes(name, population, treasury) {
    return {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth: function(percentage) {
            this.population += Math.floor(this.population * (percentage / 100));
        },
        applyRecession: function(percentage) {
            this.treasury -= Math.floor(this.treasury * (percentage / 100));
        }
    };
}

