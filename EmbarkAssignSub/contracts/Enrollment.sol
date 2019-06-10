pragma solidity ^0.5.4;

contract Enrollment{
    // The School Admissions can be either Open or Closed
    enum State {OPEN, CLOSED}
    State public currentState;
    struct StudentData{
        bytes32 name;
        uint fees;
    }

    mapping (address => string) public enrolled;
    address public owner;
    
    modifier onlyOwner{
        require(msg.sender == owner,"Only the onwer can call this !!!");
        _;
    }
    
    modifier isAdmissionOpen{
        require(currentState == State.OPEN,"The Admissions are not Open currently. Please try later !");
        _;
    }
    
    constructor() public{
        owner = msg.sender;
    }
    
    function setStateOpen() public onlyOwner{
        currentState = State.OPEN;
    }
    
    function setStateClosed() public onlyOwner{
        currentState = State.CLOSED;
    }
    
    function enroll(string memory _name) public payable isAdmissionOpen{
        // require(msg.value == 1 ether, "Enrollment Fee is 1 Ether");
        // uint256 _fee = msg.value;
        enrolled[msg.sender] = _name;
    }

    function getEnrollmentName() public returns(string memory){
        return enrolled[msg.sender];
    }
    
}