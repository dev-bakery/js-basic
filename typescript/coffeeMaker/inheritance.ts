{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // implements 정의된 인터페이스를 사용하겠다 라는 것을 의미
  class CoffeeMakerImpl implements CoffeeMaker {
    // private 키워드를 사용하면 외부에서 접근이 불가능함
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 머신 생성
    static makeMachine(beans: number): CoffeeMakerImpl {
      return new CoffeeMakerImpl(beans);
    }
    // 커피 채우기
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }
    // 커피 그라인딩..
    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMakerImpl.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMakerImpl.BEANS_GRAMM_PER_SHOT;
      // console.log(this.coffeeBeans);
    }
    // 머신 데우기..
    private preHeat(): void {
      console.log("heating up...");
    }
    // 커피 추출..
    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots}shots`);
      return {
        shots,
        hasMilk: false,
      };
    }
    clean(): void {
      console.log("cleaning the machine");
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preHeat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMakerImpl extends CoffeeMakerImpl {
    private steamMilk(): void {
      console.log("steaming some milk..");
    }
    makeCoffee(shots: number): CoffeeCup {
      // super 를 이용하면 부모에 있는 함수들을 사용할 수 있음
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  /** 커피 1샷
  const machine = new CoffeeMakerImpl(100);
  const coffee = machine.makeCoffee(1);
  console.log(coffee);
  */

  /** 라떼 1샷 */
  const latteMachine = new CaffeLatteMakerImpl(100);
  const latte = latteMachine.makeCoffee(1);
  console.log(latte);
}
