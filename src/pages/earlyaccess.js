import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import { EarlyAccessForm } from "../components/sections/early-access-form"
import Footer from "../components/sections/footer"

import { Container } from "../components/global"

const EarlyAccess = () => (
  <Layout>
    <SEO title="Early Access" />
    <Navigation />
    <EarlyAccessForm />
    <Footer />
  </Layout>
)

export default EarlyAccess
