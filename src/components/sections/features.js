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
          <FeatureTitle>Automatic License Plate Recognition</FeatureTitle>
          <FeatureText>
            82% of crime happens in a vehicle. Our cameras automatically capture license plates to protect you in the event of crime.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Computer Vision</FeatureTitle>
          <FeatureText>
            We use cutting-edge Computer Vision techniques to detect vehicles accurately, efficiently, and at night.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Low-Power</FeatureTitle>
          <FeatureText>
            Our product was made to work in remote areas, if you need security off the grid. We support that.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Privacy</FeatureTitle>
          <FeatureText>Your privacy matters. You're the only one who will ever have access to the data and footage collected by your cameras.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Notifications</FeatureTitle>
          <FeatureText>
            Sleep better at night and create customized alerts for when a vehicle has entered your property.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Cloud-Native</FeatureTitle>
          <FeatureText>
            Access your footage from anywhere. Our product runs in the cloud and we hold your encrypted footage for 30 days.
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
  text-align: center;
`

const FeatureText = styled.p`
  text-align: center;
`
