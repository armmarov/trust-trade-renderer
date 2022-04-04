import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates as customTemplate } from "./customTemplate";
import styled from "@emotion/styled";
import { CustomTemplate } from "./customTemplate/customTemplate";
import { CustomTemplateCertificate } from "./samples";
import { templates as AirwayBillTemplate } from "./airwayTemplate";

export const registry: TemplateRegistry<any> = {
  AirwayBill: AirwayBillTemplate
};
