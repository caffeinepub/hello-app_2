import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  type Greeting = {
    name : Text;
    message : Text;
  };

  module Greeting {
    public func compare(g1 : Greeting, g2 : Greeting) : Order.Order {
      Text.compare(g1.name, g2.name);
    };
  };

  let greetings = Map.empty<Text, Greeting>();

  public shared ({ caller }) func greet(name : Text) : async Greeting {
    let message = "Hello, " # name # "!";
    let greeting : Greeting = {
      name;
      message;
    };
    greetings.add(name, greeting);
    greeting;
  };

  public query ({ caller }) func getGreeting(name : Text) : async Greeting {
    switch (greetings.get(name)) {
      case (null) { Runtime.trap("Greeting not found") };
      case (?greeting) { greeting };
    };
  };

  public query ({ caller }) func getAllGreetings() : async [Greeting] {
    greetings.values().toArray().sort();
  };
};
