import { IAirwayBill } from "./airwaybill";
import { v2 } from "@govtechsg/open-attestation";

export const datasource: IAirwayBill = {
  name: "John Doe",
  institute: "Institute of John Doe",
  issuers: [
    {
      name: "institute of blockchain"
    }
  ],
  $template: {
    name: "custom",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  },
  content: {
    id: "125-3333-4444",
    issuedBy: "Qatar Airways",
    shipperName: "Pfizer Inc",
    consigneeName: "Ministry of Health Malaysia",
    consigneeAddress: "Blok E1, E3, E6, E10, Kompleks E, Pusat Pentadbiran Kerajaan Persekutuan, 62590 Putrajaya, W.P. Putrajaya",
    currency: "USD",
    chgsCode: "PP",
    piecesNo: "0 CARTON(S)",
    natureOfGoods: "CONSOLIDATED SHIPMENT AS PER ATTACHED CARGO MANIFEST",
    sign: "Khairul Abdul",
    signDate:"12/03/2020"
  }
};
