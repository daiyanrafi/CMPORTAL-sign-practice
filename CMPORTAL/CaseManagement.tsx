import React = require("react");
import { IInputs } from "./generated/ManifestTypes";
import App from "./modules/case-form/App";
import axios from "axios";
import Button from "./modules/csv-button/Button";
import Dashboard from "./modules/Dash-board/Dashboard";
import Dropdown from "./modules/Drop-down/Dropdown";
// import policies from "./modules/Drop-down/Policies";
// import guidelines from "./modules/Drop-down/Guidelines";
// import directives from "./modules/Drop-down/Directives";
// import procedures from "./modules/Drop-down/Procedures";
// import mappedPoliciesData from "./modules/Drop-down/Policies";
// import mappedGuidelinesData from "./modules/Drop-down/Guidelines";
// import mappedDirectiveData from "./modules/Drop-down/Directives";
// import mappedProceduresData from "./modules/Drop-down/Procedures";
import { Row } from "./modules/Drop-down/Row";
import documents from "./modules/Drop-down/data/cdocuments.json"

export default class HelloWorld extends React.Component<
  ComponentFramework.Context<IInputs>,
  IState
> {
  private _props: ComponentFramework.Context<IInputs>;
  constructor(props: ComponentFramework.Context<IInputs>) {
    super(props);

    this._props = props;
    this.state = {

      policies: [],
      guidelines: [],
      directives: [],
      procedures: []
    }
    // this.fetchData();
    // this.postData();
  }

  // componentDidMount() {
  //   this.fetchData();
  // }

  // //get-data
  // public fetchData() {
  //   alert('GET-1');
  //   var getUrl = '/_api/sabs_tests';

  //   axios.get(getUrl)
  //     .then(result => {
  //       alert('GET successful');
  //       console.log(result);
  //     })
  //     .catch(error => {
  //       alert('GET-Error occurred');
  //       console.error('AxiosError:', error);
  //     });
  // }

  //post data
  // private postData() {
  //   alert('POST-1');
  //   var postUrl = '/_api/sabs_tests';
  //   var postData = { "sabs_name": "New data to be posted" };

  //   axios.post(postUrl, postData)
  //     .then(response => {
  //       alert('POST successful');
  //       console.log(response.data);
  //     })
  //     // .catch(error => {
  //     //   alert('POST-Error occurred');
  //     //   console.error('AxiosError:', error);
  //     // });
  //     .catch(error => {
  //       if (error.response && error.response.status === 401) {
  //         alert('Post Authentication failed.');
  //       } else {
  //         alert('Error POST');
  //         console.error('AxiosError:', error);
  //       }
  //     });

  // }

  componentDidMount(): void {
    const policies = documents.filter(
      (item: any) => item.DocumentType === "Policy"
    );

    const mappedPoliciesData: Row[] = policies.map((item: any) => ({
      id: item.ID,
      label: item.Title,
      content: item.Title,
    }));

    const guidelines = documents.filter(
      (item: any) => item.DocumentType === "Guideline"
    );

    const mappedGuidelinesData: Row[] = guidelines.map((item: any) => ({
      id: item.ID,
      label: item.Title,
      content: item.Title,
    }));

    const directives = documents.filter(
      (item: any) => item.DocumentType === "Directive"
    );

    const mappedDirectiveData: Row[] = directives.map((item: any) => ({
      id: item.ID,
      label: item.Title,
      content: item.Title,
    }));

    const procedures = documents.filter(
      (item: any) => item.DocumentType === "Procedure"
    );

    const mappedProceduresData: Row[] = procedures.map((item: any) => ({
      id: item.ID,
      label: item.Title,
      content: item.Title,
    }));

    this.setState({policies: mappedPoliciesData, guidelines: mappedGuidelinesData, directives: mappedDirectiveData, procedures: mappedProceduresData})
  }

  public render() {
    let {policies, guidelines, directives, procedures} = this.state;
    return (
      <div>
        {/* <h1>Hello world-</h1> */}
        {/* <Dashboard/> */}
        {/* <Button/> */}
        {/* <App/> */}
        <Dropdown data={policies} title="Policies" />
        <Dropdown data={guidelines} title="Guidelines" />
        <Dropdown data={directives} title="Directives" />
        <Dropdown data={procedures} title="Procedures" />
      </div>
    );
  }
}

interface IState {
  policies: any,
  guidelines: any,
  directives: any,
  procedures: any
}
