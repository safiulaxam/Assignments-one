class BankAccount{
    constructor(accountNumber,owenerName,balance){
        this.accountNumber=accountNumber;
        this.owenerName=owenerName;
        this.balance=balance;
    }

    deposite(amount){
        this.balance+=amount;
        console.log(`${amount} deposite successfully.New balance is ${this.balance}`);

    }

    withdraw(amount){
        if(amount>this.balance){
            console.log("Insuffecient Balance");
        }else{
            this.balance-=amount;
            console.log(`${amount}  withdraw successfully.New balance is ${this.balance}`);
        }

        }

        getBalance(){
            return this.balance;
        }

        accountInfo(){
            console.log(`AccountNumber:${this.accountNumber}`);
            console.log(`Owener:${this.owenerName}`);
            console.log(`balance:${this.balance}`);
        }

    }

    const MyAcc=new BankAccount(1001,"john doe",1000);
    MyAcc.deposite(500);
    MyAcc.withdraw(200);
    MyAcc.accountInfo();

    const MyAc=new BankAccount(1002,"john doei",500);
    MyAc.deposite(500);
    MyAc.withdraw(200);
    MyAc.accountInfo();



    