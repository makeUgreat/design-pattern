import {FlyBehavior, QuackBehavior} from "./duck-behavior";

export abstract class Duck {
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;

    constructor(quackBehavior: QuackBehavior,flyBehavior: FlyBehavior ) {
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }

    performQuack() {
        this.quackBehavior.quack();
    }

    setQuack(newBehavior: QuackBehavior) {
        this.quackBehavior = newBehavior;
    }

    setBehavior(newBehavior: FlyBehavior) {
        this.flyBehavior = newBehavior;
    }

    performFly() {
        this.flyBehavior.fly();
    }


    swim() {
        console.log('swimming..')
    }


    public abstract display();
}