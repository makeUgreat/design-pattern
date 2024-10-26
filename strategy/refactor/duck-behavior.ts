export interface FlyBehavior {
    fly();
}

export interface QuackBehavior {
    quack();
}

export class FlyWithWings implements FlyBehavior {
    fly() {
        console.log('fly high~');
    }
}

export class FlyNoWay implements FlyBehavior {
    fly() {
        console.log('... I cant fly~~~');
    }
}

export class Quack implements QuackBehavior {
    quack() {
        console.log('quack quack');
    }
}

export class Squeak implements QuackBehavior {
    quack() {
        console.log('squeak! squeak!');
    }
}

export class MuteQuack implements QuackBehavior {
    quack() {
        console.log('...');
    }
}