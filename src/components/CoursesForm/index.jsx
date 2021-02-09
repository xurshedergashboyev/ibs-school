import React, {useState} from "react";
import {
    CoursesFormStyled,
    FormBox,
    Input,
    LeftData,
    PhoneNumberInput,
    RightData,
    SubmitButton,
    UnderForm,
} from "./styles";

import {Text} from '../Languages'
import {link} from "../../backendConfig/link/link";
import axios from "axios";

const CoursesForm = () => {

    const gradients = [
        ['#9dd777', '#cd4640', '#7e9f4a'],
        ['#90c26f', '#5eafb4', '#7e9f4a'],
        ['#beadbd', '#cfafaf', '#ffbf2b'],
        ['#cfafc4', '#adbeb0'],
        ['#d6a1a1', '#ffbf2b'],
    ];

    const [submitProcess, setSubmitProcess] = useState({loading: false, error: false, success: false});

    const [phoneNumber,setPhoneNumber] = useState()
    const [close,setClose]=useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setSubmitProcess({loading: true, error: false, success: false})
        const form = {
            name: e.target.name.value,
            phoneNumber: phoneNumber
        }

        axios.post(`${link}/undecidedStudent`, form)
            .then(res => {
                setSubmitProcess({loading: false, error: false, success: true})
                setPhoneNumber('')
                e.target.reset()
                setTimeout(()=>setClose(true),4000)
                console.log(res)
            })
            .catch((err) => {
                setSubmitProcess({loading: false, error: true, success: false})
            })
            .finally(res => {
                setTimeout(()=>setSubmitProcess({loading: false, error: false, success: false}),3000)
                console.log(res)
            })
    }

    return (
        !close && <CoursesFormStyled gradients={gradients} // required
                           property="background"
                           duration={3000}
                           angle="45deg">
            <LeftData>
                <h1>
                    <Text tid="coursePageFormHeading"/>
                </h1>
                <p>
                    <Text tid="coursePageFormDesc"/>
                </p>
            </LeftData>
            <RightData>
                <FormBox onSubmit={handleSubmit}>
                    <Input placeholder={"Name"}
                           name={"name"}
                           id={"name"}
                           required
                    />
                    <PhoneNumberInput format="+998 (##) ###-##-##"
                                      mask="_" placeholder={"PhoneNumber"}
                                      name={"phoneNumber"} id={"phoneNumber"}
                                      onChange={(e)=>{setPhoneNumber(e.target.value)}}
                                      value={phoneNumber}
                                      required
                    />
                    <SubmitButton error={submitProcess.error} success={submitProcess.success}>
                        {submitProcess.loading?
                        <div className={"spinner-border"}><span className={"sr-only"}>Loading...</span></div>:
                            submitProcess.error?
                            <span>something went wrong</span>:
                                submitProcess.success?
                                    <span>success</span>:

                        <Text tid="coursePageFormButton"/>}
                    </SubmitButton>
                    <UnderForm>
                        <Text tid="coursePageFormExtra"/>
                    </UnderForm>
                </FormBox>
            </RightData>
        </CoursesFormStyled>

    );
};

export default CoursesForm;