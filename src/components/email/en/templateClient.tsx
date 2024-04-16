import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

type EmailTemplateProps = {
  name: string;
  email: string;
  message: string;
};

export const templateClient = ({ name, email, message }: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>Recibimos su mensaje!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={heading}>Hola {name},</Text>
              <Text style={paragraph}>Recibimos su mensaje:</Text>
              <Text style={review}>{message}</Text>
              <Text style={paragraph}>Respondemos en 2-3 días hábiles a su email: {email}.</Text>
              <Text style={paragraph}>
                Si necesitas algo mas, puede responder a este email. Gracais por su tiempo,
              </Text>
              <Text style={paragraph}>- Equipo Optiflexo</Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};
