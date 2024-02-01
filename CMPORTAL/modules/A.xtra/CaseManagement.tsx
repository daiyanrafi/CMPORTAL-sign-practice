// import React = require("react");
// import { IInputs } from "./generated/ManifestTypes";
// import Dropdown from "./modules/Drop-down/Dropdown";
// import { Row } from "./modules/Drop-down/Row";
// import documents from "./modules/Drop-down/data/cdocuments.json"

// export default class HelloWorld extends React.Component<
//   ComponentFramework.Context<IInputs>,
//   IState
// > {
//   private _props: ComponentFramework.Context<IInputs>;
//   constructor(props: ComponentFramework.Context<IInputs>) {
//     super(props);

//     this._props = props;
//     this.state = {

//       policies: [],
//       guidelines: [],
//       directives: [],
//       procedures: []
//     }
//   }

//   componentDidMount(): void {
//     const policies = documents.filter(
//       (item: any) => item.DocumentType === "Policy"
//     );

//     const mappedPoliciesData: Row[] = policies.map((item: any) => ({
//       id: item.ID,
//       label: item.Title,
//       content: item.Title,
//     }));

//     const guidelines = documents.filter(
//       (item: any) => item.DocumentType === "Guideline"
//     );

//     const mappedGuidelinesData: Row[] = guidelines.map((item: any) => ({
//       id: item.ID,
//       label: item.Title,
//       content: item.Title,
//     }));

//     const directives = documents.filter(
//       (item: any) => item.DocumentType === "Directive"
//     );

//     const mappedDirectiveData: Row[] = directives.map((item: any) => ({
//       id: item.ID,
//       label: item.Title,
//       content: item.Title,
//     }));

//     const procedures = documents.filter(
//       (item: any) => item.DocumentType === "Procedure"
//     );

//     const mappedProceduresData: Row[] = procedures.map((item: any) => ({
//       id: item.ID,
//       label: item.Title,
//       content: item.Title,
//     }));

//     this.setState({policies: mappedPoliciesData, guidelines: mappedGuidelinesData, directives: mappedDirectiveData, procedures: mappedProceduresData})
//   }

//   public render() {
//     let {policies, guidelines, directives, procedures} = this.state;
//     return (
//       <div>
//         <Dropdown data={policies} title="Policies" />
//         <Dropdown data={guidelines} title="Guidelines" />
//         <Dropdown data={directives} title="Directives" />
//         <Dropdown data={procedures} title="Procedures" />
//       </div>
//     );
//   }
// }

// interface IState {
//   policies: any,
//   guidelines: any,
//   directives: any,
//   procedures: any
// }


///new updated one**************************************************
// import React = require("react");
// import { IInputs } from "./generated/ManifestTypes";
// import Dropdown from "./modules/Drop-down/Dropdown";
// import { Row } from "./modules/Drop-down/Row";
// import documents from "./modules/Drop-down/data/cdocuments.json";

// export default class HelloWorld extends React.Component<
//   ComponentFramework.Context<IInputs>,
//   IState
// > {
//   private _props: ComponentFramework.Context<IInputs>;
//   constructor(props: ComponentFramework.Context<IInputs>) {
//     super(props);

//     this._props = props;
//     this.state = {
//       policies: [],
//       guidelines: [],
//       directives: [],
//       procedures: [],
//     };
//   }

//   componentDidMount(): void {
//     this.setState({
//       policies: this.filterAndMapDocuments("Policy"),
//       guidelines: this.filterAndMapDocuments("Guideline"),
//       directives: this.filterAndMapDocuments("Directive"),
//       procedures: this.filterAndMapDocuments("Procedure"),
//     });
//   }

//   private filterAndMapDocuments(documentType: string): Row[] {
//     const filteredDocuments = documents.filter(
//       (item: any) => item.DocumentType === documentType
//     );

//     return filteredDocuments.map((item: any) => ({
//       id: item.ID,
//       label: item.Title,
//       content: item.Title,
//     }));
//   }

//   public render() {
//     let { policies, guidelines, directives, procedures } = this.state;
//     return (
//       <div>
//         <Dropdown data={policies} title="Policies" />
//         <Dropdown data={guidelines} title="Guidelines" />
//         <Dropdown data={directives} title="Directives" />
//         <Dropdown data={procedures} title="Procedures" />
//       </div>
//     );
//   }
// }

// interface IState {
//   policies: Row[];
//   guidelines: Row[];
//   directives: Row[];
//   procedures: Row[];
// }
