import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Reward from "react-rewards";
import NumberFormat from "react-number-format";
import Select from "react-select";

//styles
import {
  FormSection,
  FormSectionText,
  FormSectionTitle,
  FormSectionDesc,
  Form,
  FormInput,
  FormWrapper,
  MainButton,
} from "./style";

import { Text } from "../Languages";
import {link} from "../../backendConfig/link/link";


const HeroForm = () => {

  const state = useSelector(state => state.coursesListReducer)

  const options = []

  useEffect(() => {
    state.coursesList.map((data)=>{
      options.push({value: data,label: data})
    })
  }, [state])

  const [active, setActive] = useState(false);
  let reward;
  const handleClick = () => {
    setActive(!active);
    reward.rewardMe();
  };

  const [selected,setSelected]=useState()
  const [phoneNumber,setPhoneNumber] = useState()
  const [submitProcess,setSubmitProcess]=useState({loading:false,error:false,success:false})

  const handleSubmit=(e)=>{
    e.preventDefault()
    setSubmitProcess({loading:true,error:false,success:false})
    console.log("submitting")
    const form={
      name:e.target.name.value,
      phoneNumber:phoneNumber,
      email:e.target.email.value,
      selectedCourse:selected
    }

    axios.post(`${link}/enrolledStudent`,form)
        .then(res =>{
          setPhoneNumber('')
          e.target.reset()
          setSubmitProcess({loading:false,error:false,success:true})
          console.log(res)
        } )
        .catch(err=>{
          setSubmitProcess({loading:false,error:true,success:false})
        })
        .finally(res=>{
          setTimeout(()=>setSubmitProcess({loading:false,error:false,success:false}),4000)
          console.log(res)
        })

  }

  return (
    <FormWrapper>
      <FormSection>
        <FormSectionText>
          <FormSectionTitle>
            <Text tid="heroFormHeading" />
          </FormSectionTitle>
          <FormSectionDesc>IBS School</FormSectionDesc>
        </FormSectionText>
        <Form onSubmit={handleSubmit}>
          <FormInput name={"name"} type="text" required placeholder="Name" />
          <NumberFormat
            name={"phoneNumber"}
            format="+998 (##) ###-##-##"
            mask="_"
            className="number-format"
            placeholder="Phone"
            onChange={(e)=>setPhoneNumber(e.target.value)}
            value={phoneNumber}
            required
          />
          <FormInput
            type="email"
            name={"email"}
            placeholder="Email (optional)"
            className="message"
          />
          <Select
            options={options}
            className="select"
            onChange={(e)=>setSelected(e.value)}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                text: "#000000",
                primary25: "#ffe3a7",
                primary50: "#ffd46f",
                primary: "#ffbf2b",
              },
            })}
          />
          <Reward
            ref={(ref) => {
              reward = ref;
            }}
            type="confetti"
            config={{
              spread: 100,
              lifetime: 250,
              startVelocity: 35,
              elementCount: 100,
              colors: ["#ffbf2b", "#fff", "#000"],
            }}
          >
            <MainButton
              disabled={submitProcess.loading || submitProcess.success || submitProcess.error}
              style={{ marginTop: 20, padding: "15px 62px" }}
              onClick={handleClick}
            >
              {submitProcess.loading ? <div className={"spinner-border"}><span className={"sr-only"}>Loading...</span></div>:
                  submitProcess.success?(<Text tid="heroFormButtonSuccess" />):
                      submitProcess.error? <span>something went wrong</span> :
                          (<Text tid="heroFormButtonSubmit" />
              ) }
            </MainButton>
          </Reward>
        </Form>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          role="decorative"
          aria-hidden="true"
          viewBox="0 0 133.9 97.5"
          overflow="visible"
          className="Intro__svg"
        >
          <defs>
            <pattern
              x="-257.8"
              y="-219"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
              id="dot-pattern"
              viewBox="0 -8 8 8"
              overflow="visible"
            >
              <rect y="-8" width="8" height="8" fill="none" />
              <circle
                cx="4.3"
                cy="-4"
                r=".7"
                fill="var(--color-dark)"
                stroke="var(--color-dark)"
                strokeMiterlimit="10"
              />
            </pattern>
          </defs>
          <pattern
            id="SVGID_1_"
            xlinkHref="#dot-pattern"
            patternTransform="translate(-1.3637 4.2113)"
          />
          <rect width="100" height="60" fill="url(#SVGID_1_)" />
        </svg>
      </FormSection>
    </FormWrapper>
  );
};

export default HeroForm;