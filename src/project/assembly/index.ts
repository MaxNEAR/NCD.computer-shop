import { storage, Context, logging } from "near-sdk-core"

@nearBindgen
export class ComputerShopContract {
  private laptopCounterName: string = "laptop"
  private desktopCounterName: string = "desktop"

  /**
  * Sells laptop computers to customer and remove them from inventory. 
  * @param {i32} count - Count of laptops which customer want to buy
  */
  sellLaptops(count: i32): void {
    const currentCount = storage.getPrimitive<i32>(this.laptopCounterName, 0);
    let diff = currentCount - count;
    if (diff >= 0) {
      storage.set<i32>(this.laptopCounterName, diff);
      logging.log("Computer shop sell: "+ count.toString() + " laptops.");
    } else {
      logging.log("Computer shop cannot sell: "+ count.toString() + " laptops.");
    }
  }

  /** 
  * Sells desktop computers to customer and remove them from inventory.
  * @param {i32} count - Count of desktop computers which customer want to buy
  */
  sellDesktops(count: i32): void {
    const currentCount = storage.getPrimitive<i32>(this.desktopCounterName, 0);
    let diff = currentCount - count;
    if (diff >= 0) {
      storage.set<i32>(this.desktopCounterName, diff);
      logging.log("Computer shop sell: "+ count.toString() + " desktops.");
    } else {
      logging.log("Computer shop cannot sell: "+ count.toString() + " desktops.");
    }
  }

  /**  
  * Show current state of inventory
  */
  showCurrentShopState(): void {
    const laptopCount = storage.getPrimitive<i32>(this.laptopCounterName, 0);
    const desktopCount = storage.getPrimitive<i32>(this.desktopCounterName, 0);

    this._storageReport();

    logging.log("Computer shop inventory.");
    logging.log("Laptop computers: "+ laptopCount.toString());
    logging.log("Desktop computers: "+ desktopCount.toString());
  }

  /**  
  * Show current state of inventory
  * @param {i32} laptopCount - Count of laptop computers which shop buyed at suppliers
  * @param {i32} desktopCount - Count of desktop computers which shop buyed at suppliers
  * @returns State message
  */
  buyComputers(laptopCount: i32 = 0, desktopCount: i32 = 0): void {
    let currentCount = storage.getPrimitive<i32>(this.laptopCounterName, 0);
    let newValue = currentCount + laptopCount;
    storage.set<i32>(this.laptopCounterName, newValue);

    currentCount = storage.getPrimitive<i32>(this.desktopCounterName, 0);
    newValue = currentCount + desktopCount;
    storage.set<i32>(this.desktopCounterName, newValue);

    this._storageReport();
  }

  /**
  * Summarize data about contract and transaction
  */
  private _storageReport(): void {
    logging.log("Contract: " + Context.contractName);
    logging.log("Storage: " + Context.storageUsage.toString() + " bytes");
  }
}