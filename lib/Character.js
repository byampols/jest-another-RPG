class Character {
    constructor(name = '') {
        this.name = name;
        this.health = Math.floor(Math.random() * 10 + 95);
        this.strength = Math.floor(Math.random() * 5 + 7);
        this.agility = Math.floor(Math.random() * 5 + 7);
    }
    isAlive() {
        return this.health === 0 ? false : true;
    };
    
    getHealth() {
        return `${this.name}'s health is now ${this.health}!`;
    };
    
    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;
    
        return Math.floor(Math.random() * (max - min) + min);
    };
    
    reduceHealth(health) {
        this.health -= health;
    
        this.health = this.health < 0 ? 0 : this.health;
    }
};



module.exports = Character;