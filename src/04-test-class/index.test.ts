// Uncomment the code below and write your tests
import _ from 'lodash';
import {
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
  getBankAccount,
} from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const number = 100;
    const account = getBankAccount(number);
    expect(account.getBalance()).toBe(number);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const account = getBankAccount(100);
    expect(() => account.withdraw(200)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const account = getBankAccount(100);
    const accountFriend = getBankAccount(1);
    expect(() => account.transfer(101, accountFriend)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const account = getBankAccount(100);
    expect(() => account.transfer(101, account)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const account = getBankAccount(100);

    account.deposit(100);
    expect(account.getBalance()).toBe(200);
  });

  test('should withdraw money', () => {
    const account = getBankAccount(100);

    account.withdraw(20);
    expect(account.getBalance()).toBe(80);
  });

  test('should transfer money', () => {
    const account = getBankAccount(100);
    const accountFriend = getBankAccount(1);

    expect(accountFriend.getBalance()).toBe(1);

    account.transfer(1, accountFriend);
    expect(accountFriend.getBalance()).toBe(2);
    expect(account.getBalance()).toBe(99);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const account = getBankAccount(1);
    jest.spyOn(_, 'random').mockReturnValue(1);
    const balance = await account.fetchBalance();
    expect(typeof balance).toBe('number');

    jest.spyOn(_, 'random').mockReturnValue(0);
    const balanceTwo = await account.fetchBalance();
    expect(balanceTwo).toBeNull();

    jest.spyOn(_, 'random').mockRestore();
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const account = getBankAccount(100);
    jest.spyOn(_, 'random').mockReturnValue(10);
    await account.synchronizeBalance();
    expect(account.getBalance()).toBe(10);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const account = getBankAccount(100);

    account.fetchBalance = jest.fn(async () => null);
    await expect(() => account.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
