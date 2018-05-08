class Account {
  constructor(username){
    this.username = username;
    // this.balance = 0;
    this.transaction_list = [];
  }

  addTransaction(transaction){
    this.transaction_list.push(transaction);
  }

  get balance(){
    let balance = 0;
    for (let transaction of this.transaction_list){
      balance += transaction.value;
    }
    return balance;
  }
}

class Transaction{
  constructor(account, amount){
    this.account = account;
    this.amount = amount;
  }
  commit(){
    this.time = new Date();
    if ((this.account.balance + this.value) >= 0){
      this.account.addTransaction(this);
    } else{
      console.log('Not enough Funds!!!');
    }
  }
}

class Deposit extends Transaction{
  get value(){
    return this.amount;
  }
}

class Withdrawal extends Transaction {
  get value(){
    return -this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

let myAccount = new Account('ry-guy');

let t1 = new Deposit(myAccount, 1000);
t1.commit();

let t2 = new Withdrawal(myAccount, 200);
t2.commit();

let t3 = new Withdrawal(myAccount, 700);
t3.commit();


console.log(myAccount.balance);
console.log(myAccount.balance);





