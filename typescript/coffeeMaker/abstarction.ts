{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // implements 정의된 인터페이스를 사용하겠다 라는 것을 의미
  class CoffeeMakerImpl implements CoffeeMaker, CommercialCoffeeMaker {
    // private 키워드를 사용하면 외부에서 접근이 불가능함
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
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

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee(shots: number) {
      const coffee = this.machine.makeCoffee(shots);
      console.log(coffee);
    }
  }
  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee(shots: number) {
      const coffee = this.machine.makeCoffee(shots);
      console.log(coffee);
      this.machine.fillCoffeeBeans(200);
      this.machine.clean();
    }
  }

  const maker: CoffeeMakerImpl = CoffeeMakerImpl.makeMachine(100);
  // maker.makeCoffee(2);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  amateur.makeCoffee(2);
  pro.makeCoffee(3);
}
