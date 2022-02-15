import { ComputerShopContract } from "../assembly";
import { storage } from 'near-sdk-as';

const laptopCounterName: string = "laptop"
const desktopCounterName: string = "desktop"

let contract: ComputerShopContract

beforeEach(() => {
  contract = new ComputerShopContract()
})

describe("ComputerShopContract", () => {
  // buyComputers
  it("buy laptops with no computers in inventory", () => {
    contract.buyComputers(3);
    expect(storage.getPrimitive<i32>(laptopCounterName, 0)).toBe(3, "Count of laptops should be: 3");
  })

  it("buy desktops with no computers in inventory", () => {
    contract.buyComputers(0, 5);
    expect(storage.getPrimitive<i32>(desktopCounterName, 0)).toBe(5, "Count of desktop should be: 5");
  })

  // sellLaptops
  it("sell laptops with no computers in inventory", () => {
    contract.sellLaptops(1)
    expect(storage.getPrimitive<i32>(laptopCounterName, 0)).toBe(0, "Count of laptops should be: 0");
  })

  it("sell laptops with computers in inventory", () => {
    contract.buyComputers(5, 5)
    contract.sellLaptops(2)
    expect(storage.getPrimitive<i32>(laptopCounterName, 0)).toBe(3, "Count of laptops should be: 3");
  })

  // sellDesktops
  it("sell desktops with no computers in inventory", () => {
    contract.sellLaptops(1)
    expect(storage.getPrimitive<i32>(laptopCounterName, 0)).toBe(0, "Count of laptops should be: 0");
  })

  it("sell desktops with computers in inventory", () => {
    contract.buyComputers(5, 5)
    contract.sellDesktops(3)
    expect(storage.getPrimitive<i32>(desktopCounterName, 0)).toBe(2, "Count of desktops should be: 2");
  })
})
