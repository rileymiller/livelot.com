import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Smart Land Security</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Machine Learning</FeatureTitle>
          <FeatureText>
            We use bleeding-edge Machine Learning techniques to detect vehicles accurately, efficiently, and at night.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Cloud-Native</FeatureTitle>
          <FeatureText>
            Our product lives in the cloud so you can monitor your property from anywhere.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Notifications</FeatureTitle>
          <FeatureText>
            Create customized alerts for when a vehicle has entered your property.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Solar-Powered</FeatureTitle>
          <FeatureText>
            Our product was made to work in remote areas, if you need security off the grid. We support that.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Privacy</FeatureTitle>
          <FeatureText>Your privacy matters. You're the only one who will ever have access to the data and footage collected by your cameras.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>More Dankness</FeatureTitle>
          <FeatureText>
            Another placeholder to talk about our dope product.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
