import React, { FormEvent, useState } from 'react';
import { Container, Paper, Button } from '@mui/material';
import { UserForm } from './UserForm';
// import { AddressForm } from './AddressForm';
import { ComplaintForm } from './Complaint';
import { IncidentAddressForm } from './IncidentAddressForm';
import StartPage from './StartPage';
import { ComplaintCont } from './ComplaintCont';
import { FinalizeSubmissionForm } from './FinalizeSubmissionForm';
import { RepresentativeForm } from './Representative';
import ReCAPTCHA from "react-google-recaptcha";
import { FormData } from './types'
import SelectionPage from './SelectionPage';

const INITIAL_DATA: FormData = {
  //use-info-page
  user_title: '',
  user_firstName: '',
  user_lastName: '',
  user_postalAddress: '',
  user_address: '',
  user_suburb: '',
  user_postcode: '',
  user_state: '',
  user_country: '',
  user_preferredContact: '',
  user_landline: '',
  user_mobile: '',
  user_email: '',
  // RepresentativeForm-data page
  representativeTitle: '',
  representativeFirstName: '',
  representativeLastName: '',
  representativePostalAddress: '',
  representativeSuburb: '',
  representativePostcode: '',
  representativeState: '',
  representativeCountry: '',
  representativePreferredContact: '',
  representativeLandline: '',
  representativeMobile: '',
  representativeEmail: '',
  //Incident-address-page
  incident_address: '',
  incident_address1: '',
  incident_city: '',
  incident_postcode: '',
  incident_state: '',
  //complaint page 
  complaint_supplier: '',
  complaint_service: '',
  complaint_accountNumber: '',
  complaint_complaintDescription: '',
  complaint_resolutionDescription: '',
  //complaint-cont page
  complaint_cont_concession: '',
  complaint_cont_concessionTypes: [],
  complaint_cont_complaintDescription: '',
  complaint_cont_agree: false,
  complaint_cont_treeIdentification: '',
  //final-page-submission
  final_sub_bestTime: '',
  final_sub_howDidYouHear: '',
  final_sub_attachFile: null,
  final_sub_isRobot: false,
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [showStartPage, setShowStartPage] = useState(true);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [userList, setUserList] = useState<FormData[]>([]);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  function next() {
    setCurrentStepIndex((i) => (i >= steps.length - 1 ? i : i + 1));
  }

  function back() {
    setCurrentStepIndex((i) => (i <= 0 ? i : i - 1));
  }

  function startForm() {
    setData(INITIAL_DATA);
    setCurrentStepIndex(0);
    setShowStartPage(false);
  }

  function handleSelectionPageNext() {
    next();
  }

  const steps = [
    <SelectionPage onNext={handleSelectionPageNext} />,
    <UserForm {...data} updateFields={updateFields} />,
    <RepresentativeForm {...data} updateFields={updateFields} />,
    <IncidentAddressForm {...data} updateFields={updateFields} />,
    <ComplaintForm {...data} updateFields={updateFields} />,
    <ComplaintCont {...data} updateFields={updateFields} />,
    <FinalizeSubmissionForm {...data} updateFields={updateFields} />
  ];

  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  // const step = showStartPage ? (
  //   <StartPage onNext={startForm} />
  // ) : (
  //   steps[currentStepIndex]
  // );

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    setUserList((prevList) => [...prevList, data]); //n
    console.log(data);
    alert('Successful Account Creation');
    setData(INITIAL_DATA);
    setShowStartPage(true);
    setCurrentStepIndex(0);
    setRecaptchaValue(null);
  }

  return (
    <Container
      component="main"
      maxWidth={false}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#d7e3f5'
      }}
    >
      {showStartPage ? (
        <StartPage onNext={startForm} userDataList={userList} />
      ) : (
        <Paper
          style={{
            padding: '2rem',
            borderRadius: '.5rem',
            fontFamily: 'Arial',
            maxWidth: '700px',
          }}
        >
          <form onSubmit={onSubmit}>
            <div style={{ textAlign: 'right' }}>
              {currentStepIndex + 1} / {steps.length}
            </div>
            {steps[currentStepIndex]}
            {isLastStep && (
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={(value) => setRecaptchaValue(value)}
            />
          )}
            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
              {!isFirstStep && currentStepIndex !== 0 && currentStepIndex !== 1 && (
                <Button
                  type="button"
                  onClick={back}
                  style={{ marginRight: '8px', backgroundColor: 'DodgerBlue', color: 'white', fontSize: '15px' }}
                >
                  Back
                </Button>
              )}
              {!isLastStep && currentStepIndex !== 0 && (
                <Button
                  type="submit"
                  style={{ marginRight: '8px', backgroundColor: 'DodgerBlue', color: 'white', fontSize: '15px' }}
                >
                  Next
                </Button>
              )}
              {isLastStep && (
                <Button
                  type="submit"
                  disabled={!recaptchaValue}
                  style={{ backgroundColor: recaptchaValue ? 'DodgerBlue' : 'gray',
                  color: 'white',
                  fontSize: '15px',
                  cursor: recaptchaValue ? 'pointer' : 'not-allowed', }}
                >
                  Finish
                </Button>
              )}
            </div>
          </form>
        </Paper>
      )}
    </Container>
  );
}

export default App;
