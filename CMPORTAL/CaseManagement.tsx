import React = require("react");
import { IInputs } from "./generated/ManifestTypes";
import App from "./modules/case-form/App";
import axios from "axios";

export default class HelloWorld extends React.Component<
  ComponentFramework.Context<IInputs>,
  {}
> {
  private _props: ComponentFramework.Context<IInputs>;
  constructor(props: ComponentFramework.Context<IInputs>) {
    super(props);

    this._props = props;
    // this.fetchData();
    // this.postData();
  }

  // componentDidMount() {
  //   this.fetchData();
  // }

  // //get data
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

  // //post data
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
  

  public render() {
    return (
      <div>
        {/* <h1>Hello world-</h1> */}
        <App/>
      </div>
    );
  }
}