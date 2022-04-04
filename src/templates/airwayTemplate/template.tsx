import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { IAirwayBill } from "./airwaybill";

const containerStyle = css`
  border: 1px solid;
  margin: auto;
  width: 100%;
`;

const contentStyle = css`
  margin: auto;
  width: 100%;
  display: flex;
  // border: 1px solid;
`;

const singleStyle = css`
  border: 1px solid;
  width: 50%;
`;

const flexStyle = css`
  display: flex;
`;

const titleStyle = css`
  padding: 5px;
  font-size: 12px;
  margin-bottom: 1px
`;

export const AirwayBillTemplate: FunctionComponent<TemplateProps<IAirwayBill> & { className?: string }> = ({
  document,
  className = "",
}) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <div css={contentStyle}>
        <div css={singleStyle}>
          <div  style={{display:"flex", height: "40px" }}>
        <div css={titleStyle}>Shipper Name and Address</div>
        <div style={{marginLeft:"auto", fontSize: "12px", border: "1px solid", padding: "5px"}}>Shipper's Account Number</div>
        </div>
        <span style={{fontSize: "20px", fontWeight:"bold", margin:"5px"}}>{document!.content!.shipperName}</span>
        </div>
        <div css={singleStyle}>
          <div css={titleStyle}>Not Negotiable</div>
          <div css={flexStyle}>
            <span style={{fontSize: "20px", marginTop: "10px", marginLeft:"5px"}}>Air Waybill</span>
            <span style={{marginLeft:"20px", fontSize: "20px", fontWeight:"bold", marginTop: "10px"}}>
              {document!.content!.id}
            </span>
          </div>
          <div css={titleStyle} style={{marginTop:"10px"}}>Issued By</div>
          <div style={{textAlign:"center"}}>
            <span style={{fontSize: "20px", fontWeight:"bold"}}>{document!.content!.issuedBy}</span>
          </div>
          <div css={titleStyle} style={{marginTop:"10px"}}>Copies 1, 2 and 3 of this Air Waybill are originals and have the same validity</div>          
        </div>
      </div>  
      <div css={contentStyle}>
      <div css={singleStyle}>
        <div  style={{display:"flex", height: "40px" }}>
          <div css={titleStyle}>Consignee's Name and Address</div>
          <div style={{marginLeft:"auto", fontSize: "12px", border: "1px solid", padding: "5px"}}>Consignee's Account Number</div>
        </div>
        <div style={{fontSize: "20px", fontWeight:"bold", margin:"5px"}}>{document!.content!.consigneeName}</div>
        <div style={{fontSize: "20px", fontWeight:"bold", margin:"5px"}}>{document!.content!.consigneeAddress}</div>
      </div>
      <div css={singleStyle}><div css={titleStyle}>
        It is agreed that the goods described herein are accepted in apparent good order and condition
        (except as noted) for carriage SUBJECT TO THE CONDITIONS OF CONTRACT ON THE REVERSE HEREOF.
        ALL GOODS MAY BE CARRIED BY ANY OTHER MEANS INCLUDING ROAD OR ANY OTHER CARRIER UNLESS SPECIFIC 
        CONTRARY INSTRUCTIONS ARE GIVEN HEREON BY THE SHIPPER, AND SHIPPER AGREES THAT THE SHIPMENT MAY 
        BE CARRIED VIA INTERMEDIATE STOPPING PLACES WHICH THE CARRIER DEEMS APPROPRIATE THE SHIPPERS ATTENTION IS 
        DRAWN TO THE NOTICE CONCERNING CARRIERS LIMITATION OF LIABILITY. Shipper may increase such 
        limitation of liability by declaring a higher value of carriage and paying a supplemental charge if required.
        </div></div>
      </div>
      <div css={contentStyle}>
      <div css={singleStyle}>
        <div>
        <div css={titleStyle} style={{height:"40px"}}>Consignee's Name and Address</div>    
        <div style={{display:"flex"}}>
        <div css={singleStyle} style={{height:"40px"}}><div css={titleStyle}>Agent's IATA Code</div></div> 
        <div css={singleStyle}><div css={titleStyle}>Account No</div></div> 
        </div> 
        </div>
        </div>
        <div css={singleStyle}>
        <div css={titleStyle}>Accounting Information</div>   
        </div>
      </div>
      <div css={contentStyle}>
        <div css={singleStyle} style={{height:"40px"}}>
          <div css={titleStyle}>
          Aiport of Departure (addr. of First Carrier) and Requested Routing
          </div>
        </div>
        <div css={singleStyle}>
          <div style={{display:"flex"}}>
          <div css={titleStyle}>
          File No.
          </div>
          <div css={titleStyle} style={{marginLeft:"auto"}}>
          Optional Shipping Information
          </div>
          </div>
        </div>
      </div>
      <div css={contentStyle}>
        <div css={singleStyle} style={{display:"flex", height: "70px"}}>
          <div style={{width:"10%", border: "1px solid"}}> <div css={titleStyle}>To</div></div>
          <div style={{width:"60%", border: "1px solid", display:"flex"}}>
            <div css={titleStyle}>By First Carrier</div>
            <div css={titleStyle} style={{marginLeft:"auto"}}>Routing</div>
          </div>
          <div style={{width:"10%", border: "1px solid"}}> <div css={titleStyle}>to</div></div>
          <div style={{width:"10%", border: "1px solid"}}> <div css={titleStyle}>by</div></div>
          <div style={{width:"10%", border: "1px solid"}}> <div css={titleStyle}>to</div></div>
          <div style={{width:"9%", border: "1px solid"}}> <div css={titleStyle}>by</div></div>
        </div>
        <div css={singleStyle} style={{display:"flex", height: "70px"}}>
          <div style={{width:"auto", border: "1px solid"}}> <div css={titleStyle} style={{height:"30px"}}>Currency</div><div style={{textAlign:"center"}}>{document!.content!.currency}</div></div>
          <div style={{width:"auto", border: "1px solid"}}> <div css={titleStyle} style={{height:"30px"}}>CHGS Code</div><div style={{textAlign:"center"}}>{document!.content!.chgsCode}</div></div>
          <div style={{width:"auto", border: "1px solid"}}> <div css={titleStyle} style={{height:"30px"}}>WT/VAL</div></div>
          <div style={{width:"auto", border: "1px solid"}}> <div css={titleStyle} style={{height:"30px"}}>Other</div></div>
          <div style={{width:"auto", border: "1px solid"}}> <div css={titleStyle} style={{height:"30px"}}>Declared value for Carriage</div></div>
          <div style={{width:"auto", border: "1px solid"}}> <div css={titleStyle} style={{height:"30px"}}>Declared value for Customs</div></div>
        </div>
      </div>
      <div css={contentStyle}>
        <div css={singleStyle} style={{display:"flex", height: "60px"}}>
          <div css={titleStyle}>Airport of Destination</div>
          <div css={titleStyle} style={{marginLeft:"auto"}}>Requested Flight Date</div>
        </div>
        <div css={singleStyle} style={{display:"flex", height: "60px"}}>
          <div style={{border: "1px solid", width:"50%", textAlign:"center"}}><div css={titleStyle}>Amount of Insurance</div></div>
          <div css={titleStyle}>INSURANCE - If carrier offers insurance, and such insurance is request in accordance with the conditions thereof, indicate amount to be insured in figures in box marked 'Amount of Insurance'</div>
        </div>
      </div>
      <div css={contentStyle} style={{height:"70px"}}>
        <div css={titleStyle}>Handling Information</div>
      </div>
      <div css={contentStyle} style={{height:"30px"}}>
        <div css={titleStyle}>
          These commodities, technology or software were exported from the United States in accordance with the Export Administration Regulations, Ultimate Destination
        </div>
      </div>
      <div css={contentStyle} style={{height:"200px"}}>
        <div css={singleStyle} style={{width:"10%"}}>          
          <div css={titleStyle} style={{height:"50px"}}>No. of Pieces RCP</div>
          <div style={{padding:"5px", fontSize:"13px"}}>{document!.content!.piecesNo}</div>
        </div>
        <div css={singleStyle} style={{width:"10%"}}>          
          <div css={titleStyle} style={{height:"50px"}}>GROSS WEIGHT (kg)</div>
        </div>
        <div css={singleStyle} style={{width:"15%"}}>          
          <div css={titleStyle} style={{height:"50px"}}>Rate Class, Commodity Items No.</div>
        </div>
        <div css={singleStyle} style={{width:"10%"}}>          
          <div css={titleStyle} style={{height:"50px"}}>Chargeable Weight</div>
        </div>
        <div css={singleStyle} style={{width:"10%"}}>          
          <div css={titleStyle} style={{height:"50px"}}>Rate / Charge</div>
        </div>
        <div css={singleStyle} style={{width:"10%"}}>          
          <div css={titleStyle} style={{height:"50px"}}>Total</div>
        </div>
        <div css={singleStyle} style={{width:"auto"}}>          
          <div css={titleStyle} style={{height:"50px"}}>Nature and Quantity of Goods (incl. Dimensions of Volume)</div>
          <div style={{padding:"5px", fontSize:"13px"}}>{document!.content!.natureOfGoods}</div>
        </div>
      </div>
      <div css={contentStyle}>
        <div css={singleStyle}> 
          <div style={{display:"flex", border: "1px solid"}}>
            <div css={titleStyle} style={{height:"50px", width:"30%", textAlign: "center"}}>Prepaid</div>
            <div css={titleStyle} style={{height:"50px", width:"30%", textAlign: "center"}}>Weight</div>
            <div css={titleStyle} style={{height:"50px", width:"30%", textAlign: "center"}}>Collect</div>
          </div>
          <div style={{display:"flex", border: "1px solid"}}>
            <div css={titleStyle} style={{height:"50px", width:"100%", textAlign: "center"}}>Valuation Charge</div>
          </div>
          <div style={{display:"flex", border: "1px solid"}}>
            <div css={titleStyle} style={{height:"50px", width:"100%", textAlign: "center"}}>Tax</div>
          </div>
          <div style={{display:"flex", border: "1px solid"}}>
            <div css={titleStyle} style={{height:"50px", width:"100%", textAlign: "center"}}>Total Other Charges Due Agent</div>
          </div>
          <div style={{display:"flex", border: "1px solid"}}>
            <div css={titleStyle} style={{height:"50px", width:"100%", textAlign: "center"}}>Total Other Charges Due Carrier</div>
          </div>
        </div>
        <div css={singleStyle}> 
          <div style={{display:"flex", border: "1px solid", height: "40%"}}>
            <div css={titleStyle} style={{height:"50px", width:"70%", textAlign: "left"}}>Other Charges</div>
            <div css={titleStyle} style={{height:"50px", width:"15%", textAlign: "center"}}>PREPAID</div>
            <div css={titleStyle} style={{height:"50px", width:"15%", textAlign: "center"}}>COLLECT</div>
          </div>
          <div style={{display:"flex", border: "1px solid", height: "59%"}}>
            <div css={titleStyle} style={{textAlign: "left"}}>Shipper certifies that the particulars on the face hereof are correct and that insofar as any part of the consignment contains dangerous goods, such part is properly described by name and is in proper
              condition for carriage by air according to the applicable government regulations and, for international shipments, the current International Air Transport Association's Dangerous Goods Regulations. It is
              agreed that the goods described herein are accepted in apparent good order and condition (except as noted) for carriage. SUBJECT TO THE CONDITIONS OF CONTRACT ON THE REVERSE
              HEREOF, THE SHIPPER'S ATTENTION IS DRAWN OF THE NOTICE CONCERNING CARRIERS LIMITATION OF LIABILITY. Shipper may increase such limitation of liability by declaring a higher
              value for carriage and pay a supplemental charge if required.</div>
          </div>
        </div>
      </div>
      <div css={contentStyle}>
        <div css={singleStyle}> 
        </div>
        <div css={singleStyle}> 
          <div css={titleStyle} style={{height:"20px", width:"100%", textAlign: "center"}}>Signature of Shipper or Agent</div>
        </div>
      </div>
      <div css={contentStyle}>
        <div css={singleStyle}> 
          <div style={{display:"flex", border: "1px solid" , height: "100%"}}>
            <div css={titleStyle} style={{height:"50px", width:"50%", textAlign: "center"}}>Total Prepaid</div>
            <div css={titleStyle} style={{height:"50px", width:"49%", textAlign: "center"}}>Total Collect</div>
          </div>
          </div>
          <div css={singleStyle}> 
          <div style={{display:"flex", border: "1px solid", height: "100%"}}>
            <div style={{height:"50px", width:"50%", textAlign: "center", marginTop: "30px", fontWeight:"bold"}}>{document!.content!.sign}</div>
            <div  style={{height:"50px", width:"49%", textAlign: "center", marginTop: "30px"}}>{document!.content!.signDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};