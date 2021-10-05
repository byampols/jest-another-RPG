const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character {
    constructor(name, weapon) {
        super(name);

        this.weapon = weapon;
        this.potion = new Potion();

        switch(weapon) {
            case 'axe': 
                this.strength += 2;
                break;
            case 'spear':
                this.agility += 2;
                break;
            case 'sword': 
                this.health += 5;
                break;
        };
    }

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
};

module.exports = Enemy;