import { SyntheticEvent, useRef, useState } from "react";
import {
  Description,
  FormWrapper,
  ImageWrapper,
  Title,
  Wrapper,
  EmailInput,
  SubscribeButton,
  InputButtonWrapper,
  Notice,
  ThreeDots,
  StyledLogoSvg,
} from "./styles";
import { toast } from "react-toastify";

export interface TabletNewsLetterInterface {
  handleSubscribe(emailAddress: string): Promise<void>;
}
const TabletNewsLetterWidget = (props: TabletNewsLetterInterface) => {
  const noticeStatement = `  By submitting your email, you agree to our Terms of Service and Privacy
  Notice. You can opt out at any time.`;

  const [email, setEmail] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleSubscribeClick = async (e: SyntheticEvent) => {
    e.preventDefault();

    const isValidEmail = email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    setIsSaving(true);
    if (isValidEmail) {
      try {
        await props.handleSubscribe(email);
        toast.success("Subscirbed!");
        setEmail("");
      } catch (e) {
        return;
      } finally {
        emailInputRef.current!.value = "";
        setIsSaving(false);
      }
    } else {
      alert("Please enter a valid email address");
      setIsSaving(false);
    }
  };
  return (
    <Wrapper>
      <FormWrapper>
        <Title>Sign up for our newsletter!</Title>
        <InputButtonWrapper
          ref={formRef}
          onSubmit={(e) => handleSubscribeClick(e)}
        >
          <EmailInput
            ref={emailInputRef}
            placeholder="Enter Your Email..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <SubscribeButton>
            {!isSaving && `SUBSCRIBE`}
            {isSaving && <ThreeDots />}
          </SubscribeButton>
        </InputButtonWrapper>
        <Notice>{noticeStatement}</Notice>
      </FormWrapper>
      <ImageWrapper>
        <StyledLogoSvg />
      </ImageWrapper>
    </Wrapper>
  );
};

export default TabletNewsLetterWidget;
