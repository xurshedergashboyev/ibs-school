import React, { useState } from "react";
import {
  AfterSubmission,
  BlogBottomPopupStyled, CancelButton,
  DataRight,
  EmailBox,
  EmailInput,
  EmailWrapper,
  PopupIcon,
  SendEmail,
  Texts,
} from "./styles";
import { Text } from '../Languages'
//icons
import { ReactComponent as GiftIcon } from "../../assets/icons/gift.svg";
import { ReactComponent as SendIcon } from "../../assets/icons/sendEmail.svg";
import { ReactComponent as CancelIcon } from "../../assets/icons/cancelSmall.svg";
import { ReactComponent as Check } from "../../assets/icons/check-solid-white.svg";
//axios
import axios from "axios";
import {link} from "../../backendConfig/link/link";

const BlogBottomPopup = () => {

  const [ isOpen, setIsOpen ] = useState( true );
  const [ submitEmail, setSubmitEmail ] = useState( false );

  const [submitProcess,setSubmitProcess]=useState({loading:false,error:false,success:false})

  const handleSubmit=(e)=>{
    e.preventDefault()
    setSubmitProcess({loading:true,error:false,success:false})
    const form={
      email:e.target.email.value
    }
    axios.post(`${link}/toGetGift`,form)
        .then(res=>{
          setSubmitProcess({loading:false,error:false,success:true})
          setTimeout(()=>setSubmitEmail( true ),2000);
          console.log(res)})
        .catch((err)=>{
          setSubmitProcess({loading:false,error:true,success:false})
          console.log(err)
        })
        .finally(res=>{
          setTimeout(()=>setSubmitProcess({loading:false,error:false,success:false}),3000)
          console.log(res)
        })

    // setIsOpen(!isOpen)
  }

  return (
    isOpen && <BlogBottomPopupStyled submittedEmail={ submitEmail }>
        {!submitEmail && (
            <><PopupIcon >
        <GiftIcon/>
      </PopupIcon>
      <DataRight >
        <Texts>
          <h1>
            <Text tid="blogPageFormHeading" />
          </h1>
          <p>
            <Text tid="blogPageFormDesc" />
          </p>
        </Texts>

        <EmailWrapper>
          <EmailBox onSubmit={ handleSubmit }>
            <EmailInput id={ "email" } name={ "email" } type={ "email" } placeholder={ "Email" }/>
            <SendEmail>
              {
                submitProcess.loading?
                    <div className={"spinner-border"}><span className={"sr-only"}>Loading...</span></div>:
                    submitProcess.error? <span>!</span>:
                        submitProcess.success?<Check/>:
                        <SendIcon/>
              }

            </SendEmail>
          </EmailBox>
        </EmailWrapper>
      </DataRight> </>
        )}

        {submitEmail &&
        <AfterSubmission>
        <h1>
          Мы добавили вам курс!
        </h1>
        <p>
          Зайдите в систему и вы сразу сможете приступить к обучению.
        </p>
      </AfterSubmission>
        }
      <CancelButton onClick={ () => setIsOpen( !isOpen ) }>
        <CancelIcon/>
      </CancelButton>
    </BlogBottomPopupStyled>
  );
};

export default BlogBottomPopup;