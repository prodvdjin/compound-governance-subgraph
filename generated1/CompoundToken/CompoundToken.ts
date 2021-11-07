// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class Approval extends EthereumEvent {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class DelegateChanged extends EthereumEvent {
  get params(): DelegateChanged__Params {
    return new DelegateChanged__Params(this);
  }
}

export class DelegateChanged__Params {
  _event: DelegateChanged;

  constructor(event: DelegateChanged) {
    this._event = event;
  }

  get delegator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get fromDelegate(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get toDelegate(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class DelegateVotesChanged extends EthereumEvent {
  get params(): DelegateVotesChanged__Params {
    return new DelegateVotesChanged__Params(this);
  }
}

export class DelegateVotesChanged__Params {
  _event: DelegateVotesChanged;

  constructor(event: DelegateVotesChanged) {
    this._event = event;
  }

  get delegate(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get previousBalance(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newBalance(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Transfer extends EthereumEvent {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CompoundToken__checkpointsResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class CompoundToken extends SmartContract {
  static bind(address: Address): CompoundToken {
    return new CompoundToken("CompoundToken", address);
  }

  DELEGATION_TYPEHASH(): Bytes {
    let result = super.call("DELEGATION_TYPEHASH", []);

    return result[0].toBytes();
  }

  try_DELEGATION_TYPEHASH(): CallResult<Bytes> {
    let result = super.tryCall("DELEGATION_TYPEHASH", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  DOMAIN_TYPEHASH(): Bytes {
    let result = super.call("DOMAIN_TYPEHASH", []);

    return result[0].toBytes();
  }

  try_DOMAIN_TYPEHASH(): CallResult<Bytes> {
    let result = super.tryCall("DOMAIN_TYPEHASH", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  allowance(account: Address, spender: Address): BigInt {
    let result = super.call("allowance", [
      EthereumValue.fromAddress(account),
      EthereumValue.fromAddress(spender)
    ]);

    return result[0].toBigInt();
  }

  try_allowance(account: Address, spender: Address): CallResult<BigInt> {
    let result = super.tryCall("allowance", [
      EthereumValue.fromAddress(account),
      EthereumValue.fromAddress(spender)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, rawAmount: BigInt): boolean {
    let result = super.call("approve", [
      EthereumValue.fromAddress(spender),
      EthereumValue.fromUnsignedBigInt(rawAmount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, rawAmount: BigInt): CallResult<boolean> {
    let result = super.tryCall("approve", [
      EthereumValue.fromAddress(spender),
      EthereumValue.fromUnsignedBigInt(rawAmount)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", [EthereumValue.fromAddress(account)]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): CallResult<BigInt> {
    let result = super.tryCall("balanceOf", [
      EthereumValue.fromAddress(account)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  checkpoints(
    param0: Address,
    param1: BigInt
  ): CompoundToken__checkpointsResult {
    let result = super.call("checkpoints", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromUnsignedBigInt(param1)
    ]);

    return new CompoundToken__checkpointsResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_checkpoints(
    param0: Address,
    param1: BigInt
  ): CallResult<CompoundToken__checkpointsResult> {
    let result = super.tryCall("checkpoints", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromUnsignedBigInt(param1)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new CompoundToken__checkpointsResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  decimals(): i32 {
    let result = super.call("decimals", []);

    return result[0].toI32();
  }

  try_decimals(): CallResult<i32> {
    let result = super.tryCall("decimals", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toI32());
  }

  delegates(param0: Address): Address {
    let result = super.call("delegates", [EthereumValue.fromAddress(param0)]);

    return result[0].toAddress();
  }

  try_delegates(param0: Address): CallResult<Address> {
    let result = super.tryCall("delegates", [
      EthereumValue.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  getCurrentVotes(account: Address): BigInt {
    let result = super.call("getCurrentVotes", [
      EthereumValue.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_getCurrentVotes(account: Address): CallResult<BigInt> {
    let result = super.tryCall("getCurrentVotes", [
      EthereumValue.fromAddress(account)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getPriorVotes(account: Address, blockNumber: BigInt): BigInt {
    let result = super.call("getPriorVotes", [
      EthereumValue.fromAddress(account),
      EthereumValue.fromUnsignedBigInt(blockNumber)
    ]);

    return result[0].toBigInt();
  }

  try_getPriorVotes(account: Address, blockNumber: BigInt): CallResult<BigInt> {
    let result = super.tryCall("getPriorVotes", [
      EthereumValue.fromAddress(account),
      EthereumValue.fromUnsignedBigInt(blockNumber)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", []);

    return result[0].toString();
  }

  try_name(): CallResult<string> {
    let result = super.tryCall("name", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toString());
  }

  nonces(param0: Address): BigInt {
    let result = super.call("nonces", [EthereumValue.fromAddress(param0)]);

    return result[0].toBigInt();
  }

  try_nonces(param0: Address): CallResult<BigInt> {
    let result = super.tryCall("nonces", [EthereumValue.fromAddress(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  numCheckpoints(param0: Address): BigInt {
    let result = super.call("numCheckpoints", [
      EthereumValue.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_numCheckpoints(param0: Address): CallResult<BigInt> {
    let result = super.tryCall("numCheckpoints", [
      EthereumValue.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  symbol(): string {
    let result = super.call("symbol", []);

    return result[0].toString();
  }

  try_symbol(): CallResult<string> {
    let result = super.tryCall("symbol", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): CallResult<BigInt> {
    let result = super.tryCall("totalSupply", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  transfer(dst: Address, rawAmount: BigInt): boolean {
    let result = super.call("transfer", [
      EthereumValue.fromAddress(dst),
      EthereumValue.fromUnsignedBigInt(rawAmount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(dst: Address, rawAmount: BigInt): CallResult<boolean> {
    let result = super.tryCall("transfer", [
      EthereumValue.fromAddress(dst),
      EthereumValue.fromUnsignedBigInt(rawAmount)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(src: Address, dst: Address, rawAmount: BigInt): boolean {
    let result = super.call("transferFrom", [
      EthereumValue.fromAddress(src),
      EthereumValue.fromAddress(dst),
      EthereumValue.fromUnsignedBigInt(rawAmount)
    ]);

    return result[0].toBoolean();
  }

  try_transferFrom(
    src: Address,
    dst: Address,
    rawAmount: BigInt
  ): CallResult<boolean> {
    let result = super.tryCall("transferFrom", [
      EthereumValue.fromAddress(src),
      EthereumValue.fromAddress(dst),
      EthereumValue.fromUnsignedBigInt(rawAmount)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends EthereumCall {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get rawAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DelegateCall extends EthereumCall {
  get inputs(): DelegateCall__Inputs {
    return new DelegateCall__Inputs(this);
  }

  get outputs(): DelegateCall__Outputs {
    return new DelegateCall__Outputs(this);
  }
}

export class DelegateCall__Inputs {
  _call: DelegateCall;

  constructor(call: DelegateCall) {
    this._call = call;
  }

  get delegatee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DelegateCall__Outputs {
  _call: DelegateCall;

  constructor(call: DelegateCall) {
    this._call = call;
  }
}

export class DelegateBySigCall extends EthereumCall {
  get inputs(): DelegateBySigCall__Inputs {
    return new DelegateBySigCall__Inputs(this);
  }

  get outputs(): DelegateBySigCall__Outputs {
    return new DelegateBySigCall__Outputs(this);
  }
}

export class DelegateBySigCall__Inputs {
  _call: DelegateBySigCall;

  constructor(call: DelegateBySigCall) {
    this._call = call;
  }

  get delegatee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get nonce(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get expiry(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class DelegateBySigCall__Outputs {
  _call: DelegateBySigCall;

  constructor(call: DelegateBySigCall) {
    this._call = call;
  }
}

export class TransferCall extends EthereumCall {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get dst(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get rawAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends EthereumCall {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get src(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get dst(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get rawAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
