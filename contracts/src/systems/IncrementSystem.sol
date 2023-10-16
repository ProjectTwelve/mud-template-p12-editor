// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import {console} from "forge-std/console.sol";
import {System} from "@latticexyz/world/src/System.sol";
import {Counter} from "../codegen/Tables.sol";

contract IncrementSystem is System {
    error MyCustomError();

    function increment() public returns (uint32) {
        uint32 counter = Counter.get();
        uint32 newValue = counter + 1;
        Counter.set(newValue);
        return newValue;
    }
}
