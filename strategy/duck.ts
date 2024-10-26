export abstract class Duck {
    constructor() {}

    quack() {
        console.log('quack quack');
    }


    swim() {
        console.log('swimming..')
    }


    public abstract display();
}