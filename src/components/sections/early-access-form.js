import React from "react"
// import styled from "@emotion/styled"
import styled from "styled-components"
import { Container } from "../global"
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const EarlyAccessForm = () => (
  <SignupWrapper>
    <Container>
      <FormWrapper>
        <h1>Early Access</h1>
        <p>Some cool copy on getting signed up for LiveLot
        </p>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Please Enter a Valid Email';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <label>Email</label>
              <SignupInput
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <FormValidationMsg>
                {errors.email && touched.email && errors.email}
              </FormValidationMsg>
              <SubmitButton type="submit" disabled={isSubmitting}>
                Submit
           </SubmitButton>
            </form>
          )}
        </Formik>
      </FormWrapper>
    </Container>
  </SignupWrapper>
)

const FormWrapper = styled.section`
  max-width: 600px;
  width: 75%;
  /* margin: 0 auto;
  padding: 0 16px; */

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
    width:100%
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 600px;
    width:100%
  }

  /* @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
    width:100%

  } */

  /* @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
    width:100%
  }

  ${props =>
    props.fluid &&
    `
    max-width: 600px !important;
  `}; */
`

const FormValidationMsg = styled.p`
font-weight: 500;
text-transform: uppercase;
font-size:12px;
color: #ef0700;
margin: 4px 0px;
`

const SignupInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 48px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 8px 0px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`
const SubmitButton = styled.button`
  font-family: ${props => props.theme.font.normal};
  ${props => props.theme.font_size.xsmall};
  color: white;
  /* background: #098b8c; */
  /* background: ${props => props.theme.color.primary}; */
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 12px 16px;
  text-transform: uppercase;
  font-size: 14px;
`

const SignupWrapper = styled.header`
  background-color: #f8f8f8;
  padding: 160px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`