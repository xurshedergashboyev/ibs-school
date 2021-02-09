import React, {useEffect, useState} from "react";

//styles
import {
  PopupWrapper,
  PopupInner,
  FormSection,
  FormSectionText,
  FormSectionTitle,
  FormSectionDesc,
  Form,
  FormInput,
  FormWrapper,
  CloseIcon,
  MainButton,
} from "./style";

// packages
import Reward from "react-rewards";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { AiOutlineClose } from "react-icons/ai";
import { Text } from "../Languages";
import axios from "axios";
import {link} from "../../backendConfig/link/link";
import {useSelector} from "react-redux";


const PopupForm = ({ callback, selectedCourse }) => {

  const state = useSelector(state=>state.coursesListReducer)

  const subCategory=[]


  useEffect(()=>{

    state.coursesList.map((data)=>{
      subCategory.push({value:data, label:data})
    })
  },[state])

  let reward;
  const handleClick = () => {
    // setActive(!active);
    reward.rewardMe();
  };

  const [selected, setSelected]=useState()
  const [submitProcess,setSubmitProcess]=useState({loading:false,error:false,success:false})
  const [phoneNumber,setPhoneNumber]=useState()

  const handleSubmit = (e) => {
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
          setTimeout(callback,3000)
          console.log(res)
        } )
        .catch(err=>{
          setSubmitProcess({loading:false,error:true,success:false})
        })
        .finally(res=>{
          setTimeout(()=>setSubmitProcess({loading:false,error:false,success:false}),3000)
          console.log(res)
        })
    // e.target.reset()

  }


  console.log(subCategory,"subCategory")

  return (
    <PopupWrapper>
      <PopupInner>
        <FormWrapper>
          <FormSection>
            <CloseIcon>
              <AiOutlineClose onClick={callback} className="close-icon" />
            </CloseIcon>
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
                required
              />
              <FormInput
                name={"email"}
                type="email"
                placeholder="Email (optional)"
                className="message"
              />
              <Select
                options={subCategory}
                value={selectedCourse.value && selectedCourse}
                isDisabled={selectedCourse.value && true}
                className="select"
                onChange={(e)=>{setSelected(e.value)}}
                maxMenuHeight={150}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  minHeight:"200px",
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
          </FormSection>
        </FormWrapper>
      </PopupInner>
    </PopupWrapper>
  );
};

export default PopupForm;
