

export class Property {
  id: number = 0;
  propertyAddress: string | null;
  rentalAmount: number | null;
  purchaseDate: string | null;
  purchaseAmount: number |null ;
  note: string | null;
  leaseStatus: string | null;
  propertyType: string |null;



  constructor(id: number =0, propertyAddress: string ="", rentalAmount: number = 0,
  purchaseAmount: number  = 0, note: string= "",
  leaseStatus: string = "", propertyType: string = "", purchaseDate: string = ""){
    this.id = id ;
    this.propertyAddress = propertyAddress;
    this.rentalAmount = rentalAmount;
    this.purchaseDate = purchaseDate;
    this.purchaseAmount = purchaseAmount;
    this.note = note;
    this.leaseStatus = leaseStatus;
    this.propertyType = propertyType;

  }

}
