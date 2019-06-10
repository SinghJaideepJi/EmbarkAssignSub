## Embark Assignment Submission

Developed by:-  Jaideep Singh 
                Dharti parikh
                Anish patel

![](https://github.com/SinghJaideepJi/EmbarkAssignSub/EmbarkAssignSub/asset/Coverage.JPG)

## List of functions:-

## Use Case 
This is student enrollment smartcontract.Students need to deposit minimum 1 ether when they want to enroll but if in any case they want to withdraw from school then they get refund of 0.5 ether.Student can only enroll when the admission is open .
  
## The patterns we have used are:-

1.Withdrwal Pattern 
2.Verifier Pattern 

## Bonus Question

### Withdrawal Pattern:-
The article Building Ethereum Payment Channels offered ascend to the topic of   
why shutting a channel adds assets to a parity as opposed to just returning assets to the  channel members. 
This system is known as the withdrawal pattern.

#### What are the business problems they’re trying to solve? 
The issue emerges when an Ethereum challenges releases to discharge assets to a location not under the control of the individual sending the transaction.
Expect that the buyer contracts there is one contract whose designers committed an error in its fallback capacity and it tosses a special case when invoked and they got blocked.

#### What are the most commonly used solutions?
The solution for this issue is to utilize the withdrawal design. By monitoring adjusts inside the agreement and driving every client to pull back their own subsidizes it makes repetitive the way that the other party in the exchange may be a noxious contract.

#### What may be some limitations of the current state of the art with this technology?
This is an absolutely vindictive contract, in that it denies the beneficiary access to their assets genuinely. Given that a savvy contract is a program, be that as it may, a further developed BadSender could permit or deny the exchange dependent on schedule, equalization of another record, an inward banner and so forth. The malevolent conceivable outcomes are perpetual and enable the sender to hold the beneficiary to deliver.

## Factory Pattern:-
Factory pattern is utilized to make and convey "child" contracts. Those child contracts can be alluded to as "resources" which in the genuine could speak as, state, a house or a vehicle.

#### What are the business problems they’re trying to solve? 
The problem of creating objects without having to specify the exact class of the object being created .

#### What are the most commonly used solutions?
There are a few solution to utilizing a production line regardless of whether each agreement that the manufacturing plant makes does not connect with the others or with the industrial facility contract itself. 
Another solution is in monitoring every one of the cases of agreements.

#### What may be some limitations of the current state of the art with this technology?
The current state is still coupled with experimentation configuration and can be classed as anti-pattern when it is incorrectly used.