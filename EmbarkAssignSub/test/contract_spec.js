// /*global contract, config, it, assert*/

const Enrollment = require('Embark/contracts/Enrollment');

let accounts;

let expectedErrors = {
  'onlyOwner':"Only the onwer can call this !!!",
  'isAdmissionOpen':"The Admissions are not Open currently. Please try later !"
};

// For documentation please see https://embark.status.im/docs/contracts_testing.html
config({
  //deployment: {
  //  accounts: [
  //    // you can configure custom accounts with a custom balance
  //    // see https://embark.status.im/docs/contracts_testing.html#Configuring-accounts
  //  ]
  //},
  contracts: {
    "Enrollment": {
      // args: [100]
    }
  }
}, (_err, web3_accounts) => {
  accounts = web3_accounts
});

contract("Enrollment", function () {
  this.timeout(0);

  it("Enrollment was deployed", async function(){
    let address = Enrollment.options.address;
    assert.ok(address) // has a value and not null
  });

  it("Try to Enroll when OPEN", async function(){
    await Enrollment.methods.setStateOpen().send({from:accounts[0]});

    await Enrollment.methods.enroll("Jaideep").send({from:accounts[1]});

    let result = await Enrollment.methods.getEnrollmentName().call({from:accounts[1]});

    assert.equal(result,"Jaideep");
  });

  it("Try to Enroll when CLOSED", async function(){

    await Enrollment.methods.setStateClosed().send({from:accounts[0]});

    try{
      await Enrollment.methods.enroll("Jaideep").send({from:accounts[1]});
      assert.ok(false)
    }
    catch(error){
      // console.log(error)
      assert(error.message.includes(expectedErrors['isAdmissionOpen']))
    }
  });

  it("Try to Change state to OPEN by non Owner", async function(){

    try{
      await Enrollment.methods.setStateOpen().send({from:accounts[1]});
      assert.ok(false)
    }
    catch(error){
      assert(error.message.includes(expectedErrors['onlyOwner']))
    }
  });

  it("Try to Change state to Closed by non Owner", async function(){

    try{
      await Enrollment.methods.setStateOpen().send({from:accounts[1]});
      assert.ok(false)
    }
    catch(error){
      assert(error.message.includes(expectedErrors['onlyOwner']))
    }
  });

});