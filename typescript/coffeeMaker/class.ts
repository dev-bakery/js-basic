type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
};

class CoffeeMaker {
  // static ( class level) 클래스 자체에 있는 정보가 되기 때문에 CoffeeMaker.BEANS_GRAMM_PER_SHOT 로 접근해야함
  // new CoffeeMaker() 할떄마다 BEANS_GRAMM_PER_SHOT가 생성 되지 않음
  static BEANS_GRAMM_PER_SHOT: number = 7;
  coffeeBeans: number = 0;

  constructor(coffeeBeans: number) {
    this.coffeeBeans = coffeeBeans;
  }

  makeCoffee(shots: number): CoffeeCup {
    if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not enough coffee beans!");
    }
    this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }
}

const maker = new CoffeeMaker(100);
console.log(maker);
