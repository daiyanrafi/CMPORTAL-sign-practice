// casemanagement.tsx

import React = require("react");
import { IInputs } from "./generated/ManifestTypes";
import App from "./modules/case-form/App";
import axios from "axios";
import Button from "./modules/csv-button/Button";
import Dashboard from "./modules/Dash-board/Dashboard";
import Dropdown from "./modules/Drop-down/Dropdown";
// import { Row } from "./modules/Drop-down/Row";
import { Row } from "./modules/User-doc/Row";
import documents from "./modules/Drop-down/data/cdocuments.json";
import Userdoc from "./modules/User-doc/Userdoc";
// import JsonTable from "./modules/Booking-table/JsonTable";
// import BookingContainer from "./BookingContainer";
import activities from './modules/User-doc/data/cactivities.json';

export default class HelloWorld extends React.Component<
  ComponentFramework.Context<IInputs>,
  IState
> {
  private _props: ComponentFramework.Context<IInputs>;
  constructor(props: ComponentFramework.Context<IInputs>) {
    super(props);

    this._props = props;
    this.state = {
      // policies: [],
      // guidelines: [],
      // directives: [],
      // procedures: [],
      documents: [],
      people: [],
    };
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

  // componentDidMount(): void {
  //   const policies = documents.filter(
  //     (item: any) => item.DocumentType === "Policy"
  //   );

  //   const mappedPoliciesData: Row[] = policies.map((item: any) => ({
  //     id: item.ID,
  //     label: item.Title,
  //     content: item.Title,
  //   }));

  //   const guidelines = documents.filter(
  //     (item: any) => item.DocumentType === "Guideline"
  //   );

  //   const mappedGuidelinesData: Row[] = guidelines.map((item: any) => ({
  //     id: item.ID,
  //     label: item.Title,
  //     content: item.Title,
  //   }));

  //   const directives = documents.filter(
  //     (item: any) => item.DocumentType === "Directive"
  //   );

  //   const mappedDirectiveData: Row[] = directives.map((item: any) => ({
  //     id: item.ID,
  //     label: item.Title,
  //     content: item.Title,
  //   }));

  //   const procedures = documents.filter(
  //     (item: any) => item.DocumentType === "Procedure"
  //   );

  //   const mappedProceduresData: Row[] = procedures.map((item: any) => ({
  //     id: item.ID,
  //     label: item.Title,
  //     content: item.Title,
  //   }));

  //   const people = ["Daiyan Rafi", "Tanbir Hossain", "Mahfuzur Rahman", "Mohammad Hossain", "Md Ismail", "Amana Begum"]

  //   this.setState({
  //     policies: mappedPoliciesData,
  //     guidelines: mappedGuidelinesData,
  //     directives: mappedDirectiveData,
  //     procedures: mappedProceduresData,
  //     people
  //   });
  // }

  componentDidMount(): void {
    const people: IPeople[] = [{ name: "Daiyan Rafi", AuthorId: 28 }, { name: "Tanbir Hossain", AuthorId: 27 }, { name: "Mahfuzur Rahman", AuthorId: 26 }, { name: "Md Ismail", AuthorId: 25 }];
    const allDocuments: Row[] = documents
      .filter((item: any) => item.DocumentType)
      .map((item: any) => ({
        id: item.ID,
        label: item.DocumentType,
        content: item.Title,
        modified: item.Modified
      }));

    this.setState({ documents: allDocuments, people });
  }

  public render() {
    // let { policies, guidelines, directives, procedures, people } = this.state;
    let { documents, people } = this.state;
    return (
      <div>
        {/* <h1>Hello world-</h1> */}
        {/* <Dashboard/> */}
        {/* <Button/> */}
        {/* <App/> */}
        {/* <BookingContainer /> */}
        {/* <Dropdown data={policies} title="Policies" />
        <Dropdown data={guidelines} title="Guidelines" />
        <Dropdown data={directives} title="Directives" />
        <Dropdown data={procedures} title="Procedures" /> */}

        {/* <h1>Test component</h1> */}

        {/* {
          people.map((person: string) => {
            return <Dropdown data={policies} title={person} />
          })
        } */}

        {people.map((person: IPeople) => (
          <div key={person.name}>
            <Userdoc data={documents} poeple={person} activities={activities} />
          </div>
        ))}
      </div>
    );
  }
}

interface IState {
  // policies: any;
  // guidelines: any;
  // directives: any;
  // procedures: any;
  // people: any;
  documents: Row[];
  people: IPeople[];
}

export interface IPeople {
  name: string;
  AuthorId: number;
}
