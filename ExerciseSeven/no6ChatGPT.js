class Player {
    constructor(name, health = 100, power = 10) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    hit(power) {
        this.health -= power;
    }

    useItem(item) {
        if (item.health === 10) {
            this.health += 10;
            console.log(`${this.name} picked up a health item (+10 Health)`);
        }
        if (item.power === 10) {
            this.power += 10;
            console.log(`${this.name} picked up a power item (+10 Power)`);
        }
    }

    showStatus() {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        const health = Math.random() < 0.5 ? 0 : 10;
        const power = Math.random() < 0.5 ? 0 : 10;
        return { health, power };
    }

    start() {
        console.log("--- Game Starts ---");
        while (this.player1.health > 0 && this.player2.health > 0) {
            // Player 1's turn
            console.log("\nPlayer 1's turn:");
            this.player1.showStatus();
            const item1 = this.getRandomItem();
            this.player1.useItem(item1);
            console.log("After getting item:");
            this.player1.showStatus();
            this.player2.hit(this.player1.power);
            console.log(`Player 1 shoots Player 2 with power ${this.player1.power}`);
            if (this.player2.health <= 0) {
                break;
            }

            // Player 2's turn
            console.log("\nPlayer 2's turn:");
            this.player2.showStatus();
            const item2 = this.getRandomItem();
            this.player2.useItem(item2);
            console.log("After getting item:");
            this.player2.showStatus();
            this.player1.hit(this.player2.power);
            console.log(`Player 2 shoots Player 1 with power ${this.player2.power}`);
        }

        // Determine winner
        if (this.player1.health <= 0 && this.player2.health <= 0) {
            console.log("\nIt's a draw!");
        } else if (this.player1.health <= 0) {
            console.log(`\n${this.player2.name} wins!`);
        } else {
            console.log(`\n${this.player1.name} wins!`);
        }
    }
}

// Example usage:
const playerA = new Player("Player A");
const playerB = new Player("Player B");

const game = new ShootingGame(playerA, playerB);
game.start();
