import {MallardDuck} from "./mallard-duck";
import {RedHeadDuck} from "./redhead-duck";
import {RubberDuck} from "./rubber-duck";
import {FlyNoWay, FlyWithWings, MuteQuack, Quack, Squeak} from "./duck-behavior";

const mallard = new MallardDuck(
    new Quack(),
    new FlyWithWings(),
);
const readHead = new RedHeadDuck(new Quack(), new FlyWithWings());
const rubberDuck = new RubberDuck(new Squeak(), new FlyNoWay());

mallard.display();
mallard.swim();
mallard.performQuack();
mallard.performFly();
console.log('-----------------')
readHead.display();
readHead.swim();
readHead.performQuack();
readHead.performFly()
console.log('-----------------')
rubberDuck.display();
rubberDuck.swim();
rubberDuck.performQuack();
rubberDuck.performFly();
console.log('-----------------')
rubberDuck.setBehavior(new FlyWithWings());
rubberDuck.setQuack(new MuteQuack());
rubberDuck.performFly();
rubberDuck.performQuack()
