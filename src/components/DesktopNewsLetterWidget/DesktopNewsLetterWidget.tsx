import { SyntheticEvent, useRef, useState } from "react";
import {
  LogoTitleWrapper,
  Wrapper,
  Description,
  EmailInput,
  SubscribeButton,
  Notice,
  InputButtonWrapper,
  ThreeDots,
  StyledLogoSvg,
} from "./styles";
import { toast } from "react-toastify";

const DesktopNewsLetterWidget = (props: {
  title: string;
  description: string;
  handleSubscribe(emailAddress: string): Promise<void>;
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const handleSubscribeClick = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!emailInputRef.current?.value) {
      return;
    }

    setIsSaving(true);

    try {
      await props.handleSubscribe(emailInputRef.current?.value);
    } catch (e) {
      return;
    } finally {
      if (emailInputRef.current) {
        emailInputRef.current.value = "";
      }
      setIsSaving(false);
    }

    toast.success("Subscribed!");
  };

  const noticeStatement = `By submitting your email, you agree to our Terms of Service and Privacy
  Notice. You can opt out at any time.`;

  return (
    <Wrapper>
      <LogoTitleWrapper>
        <StyledLogoSvg />
        <Description>{props.description}</Description>
      </LogoTitleWrapper>
      <InputButtonWrapper
        ref={formRef}
        onSubmit={(e) => handleSubscribeClick(e)}
      >
        <EmailInput
          ref={emailInputRef}
          type="email"
          placeholder="Your Email Address"
        />
        <SubscribeButton type="submit">
          {!isSaving && `SUBSCRIBE`}
          {isSaving && <ThreeDots />}
        </SubscribeButton>
      </InputButtonWrapper>
      <Notice>{noticeStatement}</Notice>
    </Wrapper>
  );
};

export default DesktopNewsLetterWidget;
